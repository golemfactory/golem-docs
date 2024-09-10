---
title: Golem-Workers stable diffusion usage example
pageTitle: Golem-Workers stable diffusion usage example
description: Step-by-step instructions on how to run automtic1111 with stable diffusion model with Golem-Workers

type: Article
---
# Stable diffusion usage example

In this example, we’ll show you how to run a sample [Automatic1111](https://github.com/AUTOMATIC1111/stable-diffusion-webui) 
(from [modelserve AI](https://modelserve.ai)) image using Golem Workers.


## 1. Create a cluster
In the first step, create a cluster with any name you choose (`cluster_id`). For example: `GolemWorkers`.

```bash
curl --location 'http://localhost:8000/create-cluster' \
--header 'Content-Type: application/json' \
--data '{
  "cluster_id": "GolemWorkers1",
  "budget_types": {
    "default": {
      "budget": {
        "golem_workers.budgets.AveragePerCpuUsageLinearModelBudget": {
          "average_cpu_load": 1,
          "average_duration_hours": 0.5,
          "average_max_cost": 1.5
        }
      },
      "scope": "cluster"
    }
  },
  "network_types": {
    "default": {
      "ip": "192.168.0.1/16"
    }
  },
  "node_types": {
    "default": {
      "market_config": {
        "filters": [
          {
            "golem_reputation.ProviderBlacklistPlugin": {
              "payment_network": "holesky"
            }
          }
        ],
        "sorters": [
          {
            "golem_reputation.ReputationScorer": {
              "payment_network": "holesky"
            }
          }
        ]
      },
      "on_stop_commands": [
        "golem_workers.work.stop_activity"
      ]
    }
  }
}'
```

## 2. Create a node
Next, create a node based on the image 
[scalepointai/automatic1111:4](https://registry.golem.network/explore/scalepointai/automatic1111), 
and specify the path to the model 
(e.g., `https://huggingface.co/stabilityai/sdxl-turbo/resolve/main/sd_xl_turbo_1.0_fp16.safetensors`).

```bash
curl --location 'http://localhost:8000/create-node' \
--header 'Content-Type: application/json' \
--data '{
  "cluster_id": "GolemWorkers",
  "node_networks": {
	"default": {}
  },
  "node_config": {
	"market_config": {
  	"demand": {
    	"payloads": [
      	{
        	"golem_workers.payloads.ClusterNodePayload": {
          	"runtime": "vm-nvidia",
          	"image_tag": "scalepointai/automatic1111:4",
          	"subnet_tag": "gpu-test",
              "outbound_urls": [
                "https://huggingface.co",
                "https://cdn-lfs.huggingface.co",
                "https://cdn-lfs-us-1.huggingface.co",
                "https://gpu-provider.dev.golem.network"
              ]


        	}
      	}
    	]
  	}
	},
	"on_start_commands": [
  	{
    	"golem_workers.work.deploy_and_start_activity": {
      	"deploy_timeout_minutes": 60
    	}
  	},
  	{
    	"golem_workers.work.prepare_and_run_ssh_server": {
      	"ssh_private_key_path": "/tmp/ssh_key"
    	}
  	},
  	{
    	"golem_workers.work.run_in_shell": [
      	"cd /usr/src/app/ && ./start.sh --model_url https://gpu-provider.dev.golem.network/models/v1-5-pruned-emaonly.safetensors > /usr/src/app/output/log 2>&1 &"
    	]
  	}
	],
	"sidecars": [
  	{
    	"golem_workers.sidecars.WebsocatPortTunnelSidecar": {
      	"network_name": "default",
      	"local_port": "8080",
      	"remote_port": "8000"
    	}
  	},
  	{
    	"golem_workers.sidecars.WebsocatPortTunnelSidecar": {
      	"network_name": "default",
      	"local_port": "8081",
      	"remote_port": "8001"
    	}
  	}
	]
  }
}'
```


## 3. Get the node's status

Next, you should wait until your node is up.
Check the nodes state with a call to `get-node`:

```bash
curl --location 'http://localhost:8000/get-node' \
--header 'Content-Type: application/json' \
--data '{
  "cluster_id": "GolemWorkers",
  "node_id": "node0"
}'
```

It returns the node’s state:

- `provisioning` means you have to wait a bit more for the deployment of the image
- `starting` means the image is up and running, and the starting actions are being performed
- `started` means the node is ready

## 4. Send request to node and generate images
In the final step, launch a web browser and go to [http://localhost:8080/](http://localhost:8080). 
This will open the Automatic1111 GUI, where you can generate images.

![automatic1111 screenshot](/golem-workers/automatic1111.png)

To generate some images using the Automatic1111 GUI, you can either enter your own prompt or use the following example:

1. Open the Automatic1111 GUI by navigating to http://localhost:8080/ in your web browser.
1. In the prompt field, enter the text, eg. "portrait of a young woman, blue eyes, cinematic".
1. (optional) Adjust any additional settings if needed, such as the number of steps, sampler type, or output dimensions.
1. Click the “Generate” button to produce the images.


#### Alternatively, use the automatic1111 API directly 

Copy and run the following Python code (directly in the terminal or using a Jupyter Notebook)

```python
import requests, time, io, base64
from PIL import Image

url = 'http://localhost:8080'
headers = {
	'Content-Type': 'application/json'
}

data = {
	"prompt": "portrait of a young women, blue eyes, cinematic",
	"steps": 10,
	"width": 512,
	"height": 512
}
for i in range(1, 11):
  start_time = time.time()
  response = requests.post(url=f'{url}/sdapi/v1/txt2img', json=data)
  try:
  	r = response.json()
  except Exception:
  	print(f"Status code: {response.status_code}, Data: {response.content}")
  	continue
  end_time = time.time()

  inference_time = (end_time - start_time)
  print(f'Inference time #{i}:', inference_time, "seconds")

  image = Image.open(io.BytesIO(base64.b64decode(r['images'][0])))
  image.save(f'output-{i}.png')
```

This code will generate 10 images and save them to your computer.

## 5. Stop the cluster
After completing the testing, you can shut down the cluster, using the following command:

```bash
curl --location 'http://localhost:8000/delete-cluster' \
--header 'Content-Type: application/json' \
--data '{
  "cluster_id": "GolemWorkers"
}'
```


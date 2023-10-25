Download our example Ray app and execute it locally (a Ray instance will be created on your machine)

```bash
# Download the example Ray app
wget https://github.com/golemfactory/ray-on-golem/raw/main/examples/simple-task.py 

# Execute the app locally by starting a local ray instance on your computer
python3 simple-task.py
```

This particular script shows information about the cluster it is being run on 
and also visualizes the number of tasks run on different nodes (by default it executes 100 tasks).

Once you ensure the app works, you can feed it to your Ray on the Golem cluster:

```bash
# Submit the app to be executed on your cluster
ray submit golem-cluster.yaml simple-task.py
```

You can see the information about the cluster both before and after running the computations.

Submit the script again, requesting more tasks to see how the autoscaler expands the cluster, as the work progresses (give it up to 5 mins):

```bash
# Submit the app with 400 tasks
ray submit golem-cluster.yaml simple-task.py -- --count 400 
```

The above shows the usual workflow with Ray apps.
- You develop them, while at the same time testing them, on your local machine.
- When you are ready to get more power - you send them to a Ray cluster **without changing a single line** of your application's code.


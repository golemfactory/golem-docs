# Quickstart

This quickstart shows you how to set Ray and Ray on Golem up, start your cluster, test it, and then stop it.
It limits the explanation to the bare minimum - if you are looking for more details jump to [setup tutorial](/docs/creators/ray/setup-tutorial)

Run the following to get a feeling of how Ray on Golem works. 

{% partial file="ray/recommend-venv.md" /%}

```bash
# Install ray-on-golem & ray (recommended within a clean virtual environment)
pip3 install -U ray-on-golem
```
```bash
# Download the golem-cluster.yaml
wget https://github.com/golemfactory/ray-on-golem/raw/main/golem-cluster.yaml

# In this command:
# * yagna (golem-node) starts in the background (if not running)
# * ray-on-golem cluster manager starts in the background
# * ray head node is started on a golem provider
ray up golem-cluster.yaml --yes
```
```bash
# Download the example Ray app
wget https://github.com/golemfactory/ray-on-golem/raw/main/examples/simple-task.py 

# Execute the app locally by starting a local ray instance on your computer
python3 simple-task.py
```
```bash
# Submit the app to be executed on your cluster
ray submit golem-cluster.yaml simple-task.py
```
```bash
# Tear down the cluster
ray down golem-cluster.yaml --yes

```

## Summary

By completing the above quickstart you have successfully:

- Installed ray and ray-on-golem packages
- Downloaded the example golem cluster yaml and the example ray application
- Started up the Ray on Golem cluster
- Run the app on your local computer and then on the cluster
- Stopped the cluster

Congratulations!

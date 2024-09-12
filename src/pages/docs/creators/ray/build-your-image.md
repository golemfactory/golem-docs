
# Build Your Own Ray on Golem Image: Step by Step

This guide will help you create your own custom Ray on Golem image.
You'll learn how to build and push an image with your specific dependencies to the Golem Registry, 
making it ready for distributed computing with Ray on Golem.

You want to create your image mostly when your application requires packages or data not available in a 
standard Ray on Golem image. Frequently installing additional packages each time a new node starts up 
behaves worse than having them in the image already (even if it means the image is bigger).

## Clone the Repository

Start by cloning the `ray-on-golem` repository to your local machine:

```bash
git clone https://github.com/golemfactory/ray-on-golem.git
```

## Set Up the Environment

Next, set up your development environment using `poetry`, which is a tool for dependency management. 
It's best to do this inside a fresh virtual environment:

```bash
pip install poetry
poetry install
```

## Add Your Dependencies

To customize the image, you’ll want to add any additional dependencies you require.
Typically the dependencies are Python pip packages and / or data required by the computations (eg. an AI model).

Open the `Dockerfile` and insert the following line with your dependencies, before the virtual environment is created:

```Dockerfile
RUN pip install <your-dependency>
```

Make sure you place this **before** the following line:

```Dockerfile
RUN python -m venv --system-site-packages /root/venv
```

This ensures that your dependencies will be installed before the environment setup.

## Build Your Docker Image

Once you've added your dependencies, it’s time to build the Docker image.
Don’t worry about the warning regarding the default Python version - it’s harmless.
You can specify the Python version during the build process like this:

```bash
docker build -t my_img --build-arg="PYTHON_VERSION=3.10" .
```

## Convert the Docker Image to a Golem Image

Now that your Docker image is ready, the next step is to convert it into a Golem-compatible image using `gvmkit-build`:

```bash
poetry run gvmkit-build my_img
```

## Set Up the Golem Registry

To push your image to the Golem Registry, you first need to set up your registry account. Here’s how:

- Log in to [Golem Registry](https://registry.golem.network).
- Create a new repository.
- In `Account settings`, generate and save your Personal Access Token (PAT).
This will be used for authentication when pushing the image.

## Push the Image to Golem Registry

With your registry credentials ready, push your image to the Golem Registry using the following command:

```bash
REGISTRY_TOKEN=<your_registry_personal_access_token> REGISTRY_USER=<your_registry_username> gvmkit-build my_img --push-to <your_registry_username>/<the_registry_repo>:<your_img_tag>
```

## Update the YAML Configuration

After successfully pushing your image, you need to update the `image_tag` in your Ray configuration file (`yaml`).
Replace the `image_tag` with the one corresponding to your newly pushed image:

```yaml
image_tag: <your_registry_username>/<the_registry_repo>:<your_img_tag>
```

## You Are Ready to `ray up`

At this point, your custom Ray on Golem image is ready! 
You can now use the `ray up` command to deploy your Ray cluster with your customized image.

For more general details on the process, 
refer to the official [GVMKit documentation](https://docs.golem.network/docs/creators/tools/gvmkit).

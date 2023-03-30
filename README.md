# golem-docs

## Creating a local development environment

### Cloning and navigating to the repository

```sh
git clone https://github.com/golemfactory/golem-docs
cd golem-docs
```

### Installing the requirements
```sh
python3 -m pip install -r requirements.txt
```
> Note that you may need to use `python` instead of `python3` if you're using Windows


### Starting the local web server
```sh
mkdocs serve
```
> Note that if this command is not recognized, your PATH is likely incorrectly set

### Viewing the rendered documentation

Open the link in your browser (here: `http://127.0.0.1:8000/`)
```sh
INFO     -  Documentation built in 5.11 seconds
INFO     -  [20:41:50] Watching paths for changes: 'docs', 'mkdocs.yml'
INFO     -  [20:41:50] Serving on http://127.0.0.1:8000/
```

### Result

![image](https://user-images.githubusercontent.com/64747030/227019591-14d85208-2918-48aa-a5d7-83943b5cad4b.png)

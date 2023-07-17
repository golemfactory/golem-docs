[View code on GitHub](https://github.com/golemfactory/yajsapi/.autodoc/docs/json/package)

The `.autodoc/docs/json/package` folder contains essential code for configuring and managing packages in the `yajsapi` project. These packages represent units of code or functionality that can be imported and used by other parts of the project.

The `config.ts` file defines the `PackageConfig` class, which is used to configure a package that can be run on a remote compute resource. It takes an object of `PackageOptions` as a parameter, containing information about the package, such as the image hash, repository URL, and required resources. The class sets default values for any properties not provided in the `PackageOptions` object. For example:

```javascript
import { PackageConfig } from 'yajsapi';

const options = {
  imageHash: 'abcdef123456',
  repoUrl: 'https://github.com/my-repo',
  minMemGib: 1,
  minStorageGib: 10,
  minCpuThreads: 2,
  minCpuCores: 1,
  capabilities: ['gpu'],
};

const packageConfig = new PackageConfig(options);
```

The `index.ts` file exports two items, `Package` and `PackageOptions`, from a file called `package.js` located in the `yajsapi` project. By exporting these items, other parts of the project can import and use them as needed, allowing for modular and organized code. For example:

```javascript
import { Package } from "yajsapi";
```

The `repo_resolver.ts` file contains the `RepoResolver` class, responsible for resolving the URL of an image repository. It uses the `axios` library to check if a given URL is valid and returns the first valid URL from a list of URLs. If no valid URL is found, the class falls back to a default URL. Here's an example of how the `RepoResolver` class can be used:

```javascript
import { RepoResolver } from "yajsapi";

const resolver = RepoResolver.create({ logger: console });
const repoUrl = await resolver.getRepoUrl();
console.log(`Using image repository: ${repoUrl}.`);
```

In summary, the code in the `.autodoc/docs/json/package` folder plays a crucial role in the `yajsapi` project by providing a way to configure and manage packages, resolve image repository URLs, and export key components for use in other parts of the project. This allows for a modular and organized codebase, making it easier for developers to understand and use the project.

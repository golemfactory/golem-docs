[View code on GitHub](https://github.com/golemfactory/yajsapi/.autodoc/docs/json/storage)

The `json/storage` folder in the yajsapi project contains the implementation of the `StorageProvider` interface and the `GftpStorageProvider` class. The `StorageProvider` interface defines the methods that a storage provider must implement to be compatible with the yajsapi project, allowing for easy integration of various storage providers.

The `GftpStorageProvider` class is a specific implementation of the `StorageProvider` interface for interacting with a GridFTP server. It provides methods for initializing the GFTP server, receiving files, publishing files, releasing files, and closing the server. This class can be used in the larger project to provide file transfer functionality using the GFTP protocol.

Example usage of the `GftpStorageProvider` class:

```javascript
import { GftpStorageProvider } from 'yajsapi';

const gftpProvider = new GftpStorageProvider();

(async () => {
  await gftpProvider.init();
  const fileUrl = await gftpProvider.publish('/local/path/to/file.txt');
  console.log('File published at:', fileUrl);

  const receivedFile = await gftpProvider.receive(fileUrl);
  console.log('Received file contents:', receivedFile);

  await gftpProvider.release([fileUrl]);
  console.log('File released');

  await gftpProvider.close();
  console.log('GFTP server closed');
})();
```

The `index.ts` file exports the `StorageProvider` and `GftpStorageProvider` classes, making them available for other parts of the yajsapi project to import and use as needed. For example, a module responsible for uploading simulation data to a storage provider could import `StorageProvider` and use it to upload the data.

Example usage of the `StorageProvider` class with Amazon S3:

```javascript
import { StorageProvider } from 'yajsapi';

class S3StorageProvider extends StorageProvider {
  // Implement the required methods for interacting with Amazon S3
}

const s3Provider = new S3StorageProvider({
  accessKeyId: 'my-access-key',
  secretAccessKey: 'my-secret-key',
  region: 'us-west-2'
});

(async () => {
  const fileUrl = await s3Provider.publish('/local/path/to/file.txt');
  console.log('File uploaded to S3:', fileUrl);

  const receivedFile = await s3Provider.receive(fileUrl);
  console.log('Received file contents from S3:', receivedFile);

  await s3Provider.release([fileUrl]);
  console.log('File deleted from S3');
})();
```

In summary, the `json/storage` folder provides a flexible and extensible way for the yajsapi project to interact with various storage providers, making it easier for users to customize the project to their specific needs. The `GftpStorageProvider` class offers file transfer functionality using the GFTP protocol, while the `StorageProvider` interface allows for the integration of other storage providers, such as Amazon S3 or Google Cloud Storage.

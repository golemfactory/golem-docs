[View code on GitHub](https://github.com/golemfactory/yajsapi/activity/factory.ts)

The `ActivityFactory` class is a factory for creating `Activity` objects. It is used internally within the yajsapi project and should not be used directly. Instead, the `Activity.create` method should be used to create `Activity` objects.

The `ActivityFactory` constructor takes an `agreementId` string and an optional `options` object of type `ActivityOptions`. The `options` object is used to configure the `Activity` object that will be created. The `ActivityConfig` class is used to validate and set default values for the `options` object.

The `create` method is used to create an `Activity` object for the given `agreementId`. If the `secure` parameter is `true`, an error is thrown because secure activities are not yet implemented. Otherwise, the `createActivity` method is called to create the `Activity` object.

The `createActivity` method makes an API call to create an activity with the given `agreementId`. It then extracts the `activityId` from the response and creates a new `Activity` object with the extracted `activityId`, `agreementId`, and `options`. It also logs a debug message and dispatches an `ActivityCreated` event.

Overall, the `ActivityFactory` class provides a simple way to create `Activity` objects with the correct configuration for a given `agreementId`. It is used internally within the yajsapi project and should not be used directly. Instead, the `Activity.create` method should be used to create `Activity` objects. Here is an example of how to use the `Activity.create` method:

```javascript
import { Activity } from 'yajsapi';

const agreementId = 'my-agreement-id';
const activity = await Activity.create(agreementId);
```
## Questions: 
 1. What is the purpose of the `ActivityFactory` class?
- The `ActivityFactory` class is used to create activities for a given agreement ID.

2. What is the difference between the `create` method and the `createActivity` method?
- The `create` method is a public method that creates an activity for a given agreement ID, while the `createActivity` method is a private method that actually creates the activity and returns it.

3. What happens if the `secure` parameter is set to `true` in the `create` method?
- If the `secure` parameter is set to `true`, an error will be thrown with the message "Not implemented".
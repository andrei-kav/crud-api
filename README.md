# crud-api

* Entry endpoint is `/api/users`. Other than that will result in the error `Root "incorrect/root" not found`
* Any GET request that looks like `/api/users/something` will result in the error and the message `User UUID "something" is invalid`
* Data for POST request should be provided as json. It should look like `{"age": 4, "username": "John", "hobbies": ["soccer"]}`
* Data for PUT request should be provided as json. It may contain any fields you want except `id`. 
    Also the required fields `(username, age, hobbies)` should stay of the required type. You can not change the username< string > with a < number >.
    PUT request may look like `{"age": 23, "extraField": "extraValue", "hobbies": ["soccer"]}`.
    Incorrect result in the request body (if there is `id` provided or the required fields are of the invalid type) will result in the error `New data is invalid. Pay attention to the required fields`

# running api

* run `npm run build` to build the application
* run `npm run start:dev` to start the application in development mode
* run `npm run start:prod` to start the application in production mode.
    This command will build the application and then run the built file from the `dist` folder

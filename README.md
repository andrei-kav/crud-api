# crud-api

* Entry endpoint is `/api/users`. Other than that will result in the error `"incorrect/root" not found`
* Any GET request that looks like `/api/users/something` will result in the error and the message `User UUID "something" is invalid`
* Data for POST/PUT request should be provided as json. It should look like `{"age": 4, "username": "John", "hobbies": ["soccer"]}`

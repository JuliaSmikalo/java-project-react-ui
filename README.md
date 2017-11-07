# REST API:
#### HTTP Codes:
* 2xx - ok
* 3xx - redirect
* 4xx - request error
* 5xx - server error


### Common bad response
```JavaScript
declare type ErrorResponse = {
    success: false,
    error: string
}
```

### Login

For auth use JWT Tokens

* URL: `/api/login`
* Method: `POST`

```JavaScript
declare type LoginRequest = {
    email: string,
    password: string
}
```
```JavaScript
declare type LoginResponse = {
    success: true,
    token: string
} | ErrorResponse
```

### User Profile

#### Get user profile details

* URL: `/api/profile`
* Method: `GET`
* Authentication: `Bearer jwt-token`

```JavaScript
declare type GetProfileRequest = undefined
```
```JavaScript
declare type Profile = {
    email: string,
    firstName: string,
    lastName: string,
    photoUrl?: string
}
                           
declare type ProfileResponse = {
    success: true,
    profile: Profile
} | ErrorResponse
```

#### Update user profile details

* URL: `/api/profile`
* Method: `PUT`
* Authentication: `Bearer jwt-token`

```JavaScript
declare type UpdateProfileRequest = Profile
```
```JavaScript
declare type UpdateProfileResponse = ProfileResponse | ErrorResponse
```

#### Get specific user profile details

* URL: `/api/profile/{user-uuid}`
* Method: `GET`
* Authentication: `Bearer jwt-token`

```JavaScript
declare type SpecificProfileResponse = ProfileResponse
```

#### Upload user profile photo

* URL: `/api/upload-profile-photo`
* Method: `PUT`
* Authentication: `Bearer jwt-token`
* Content-Type: `multipart/form-data; boundary=MultipartBoundry`

```JavaScript
declare type UploadProfilePhotoResponse = {success: true} | ErrorResponse
```

#### Get all users profiles

* URL: `/api/profile/all`
* Method: `GET`
* Authentication: `Bearer jwt-token`

```JavaScript
declare type SpecificProfileResponse = {
    success: true,
    profiles: Array<Profile>
} | ErrorResponse
```


### Question
#### Get specific question

* URL: `/api/questions/{question-uuid}`
* Method: `GET`
* Authentication: `Bearer jwt-token`

```JavaScript
declare type QuestionsRequest = undefined
```
```JavaScript
declare type Comment = {
  text: string
  rating: number
}

declare type Message = {
  rating: number,
  approved: boolean,
  title: string,
  text: string,
  authorUuid: string,
  comments: Array<Comment>,
  tags?: Array<String>
}
```

```JavaScript
declare type QuestionResponse = {
  success: true,
  question: Message
} | ErrorResponse
```

#### Publish question

* URL: `/api/questions/`
* Method: `POST`
* Authentication: `Bearer jwt-token`

```JavaScript
declare type QuestionsPublishRequest = {
  title: string,
  text: string,
  tags?: Array<String>
}
```

```JavaScript
declare type QuestionsPublishResponse = QuestionResponse
```


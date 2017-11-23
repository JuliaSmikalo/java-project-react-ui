# React UI for question system

### Base urls

#### Getters

* `/api/login`
* `/api/profile`
* `/api/users`
* `/api/users/{user-id}`
* `/api/questions`
* `/api/questions/{question-id}` -- short info
* `/api/questions-with-answers/{question-id}` -- question with all answers
* `/api/tags`
* `/api/tags/{tag-id}`

#### Setters

* `/api/register`
* `/api/update-profile`
* `/api/users/{user-id}/remove`
* `/api/questions/{question-id}/remove`
* `/api/questions/{question-id}/edit`
* `/api/questions/{question-id}/rating-up`
* `/api/questions/{question-id}/rating-down`
* `/api/questions/{question-id}/mark-best-answer` (Answer ID in POST body)
* `/api/answers/{answer-id}/remove`
* `/api/answers/{answer-id}/edit`
* `/api/answers/{answer-id}/rating-up`
* `/api/answers/{answer-id}/rating-down`
* `/api/tags/{tag-id}/remove`
* `/api/tags/{tag-id}/edit`

### Entries

##### User

* Id
* Name
* Email
* Password
* Photo (can be loaded from Gravatar or AvatarAPI.com)
* Registration date
* Rating (sum all ratings of all his questions and answers)
* Count of profile views

##### Tags

* Name (lowercase) (id)
* Description
* Count of tagged questions

##### Question

* Id
* Title
* Text
* List of tags  (foreign keys to Tag names)
* Author
* Publishing date
* Rating
* Count of views
* List of answers
* Best Answer (foreign key to Answer)

##### Answer

* Id
* Text
* Author (foreign key to User)
* Rating
* Publish date

## REST API:

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
    data: string // Token
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
    data: Profile
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
    data: Array<Profile>
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
// declare type Comment = {
//   text: string
//   rating: number
// }

declare type Message = {
  rating: number,
  approved: boolean,
  title: string,
  text: string,
  authorUuid: string,
  // comments: Array<Comment>,
  tags?: Array<String>
}
```

```JavaScript
declare type QuestionResponse = {
  success: true,
  body: Message
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


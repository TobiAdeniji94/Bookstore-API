# Bookstore-API
This is an api for a bookstore app

## Setup
* Install Nodejs, mongoDB
* Pull this repo
* Update env with .env
* run ``` npm run start ```


# Models
***

## Book
Fields | data Type | constraints
---| --- | --- |
id | ObjectId | required
title | String | required
shortDescription | String | optional
longDescription | String | optional
year | Number | required
isbn | String | required
price | Number | required

## Author
Fields | data Type | constraints
---| --- | --- |
firstname | String | required
lastname | String | required
dob | Date | required
country | String | optional
books | Array | optional

## APIs


### Add a book
* Route:  /api/v1/books
* Method: POST
* Body: 
```
{
    "title":"And There Was Light: Abraham Lincoln and the American Struggle",
    "shortDescription":"In his captivating new book, Jon Meacham has given us the Lincoln for our time.”—Henry Louis Gates, Jr",
    "longDescription":"Pulitzer Prize–winning biographer Jon Meacham chronicles the life of Abraham Lincoln, charting how—and why—he confronted secession, threats to democracy, and the tragedy of slavery to expand the possibilities of America",
    "year": 2022,
    "isbn":"0553393960",
    "price": 22.99
}
```
* Responses

Success
```
{
    "title": "And There Was Light: Abraham Lincoln and the American Struggle",
    "shortDescription": "In his captivating new book, Jon Meacham has given us the Lincoln for our time.”—Henry Louis Gates, Jr",
    "longDescription": "Pulitzer Prize–winning biographer Jon Meacham chronicles the life of Abraham Lincoln, charting how—and why—he confronted secession, threats to democracy, and the tragedy of slavery to expand the possibilities of America",
    "year": 2022,
    "isbn": "0553393960",
    "price": 22.99,
    "lastUpdateAt": "2023-01-01T12:53:00.515Z",
    "_id": "63b1822ceed264606837b276",
    "createAt": "2023-01-01T12:53:00.523Z",
    "__v": 0
}
```

***

### Upadate a book by ID
* Route: /api/v1/books/:id
* Method: PUT
* Body: 

```
{
    "price": 32.99
}
```
* Responses

Success
```
{
    "_id": "63b1822ceed264606837b276",
    "title": "And There Was Light: Abraham Lincoln and the American Struggle",
    "shortDescription": "In his captivating new book, Jon Meacham has given us the Lincoln for our time.”—Henry Louis Gates, Jr",
    "longDescription": "Pulitzer Prize–winning biographer Jon Meacham chronicles the life of Abraham Lincoln, charting how—and why—he confronted secession, threats to democracy, and the tragedy of slavery to expand the possibilities of America",
    "year": 2022,
    "isbn": "0553393960",
    "price": 32.99,
    "lastUpdateAt": "2023-01-01T12:58:29.796Z",
    "createAt": "2023-01-01T12:53:00.523Z",
    "__v": 0
}
```

***

### Get Post By Id
* Route: /api/v1/books/:id
* Method: GET
* Response

Success
```
{
    "_id": "63b1822ceed264606837b276",
    "title": "And There Was Light: Abraham Lincoln and the American Struggle",
    "shortDescription": "In his captivating new book, Jon Meacham has given us the Lincoln for our time.”—Henry Louis Gates, Jr",
    "longDescription": "Pulitzer Prize–winning biographer Jon Meacham chronicles the life of Abraham Lincoln, charting how—and why—he confronted secession, threats to democracy, and the tragedy of slavery to expand the possibilities of America",
    "year": 2022,
    "isbn": "0553393960",
    "price": 32.99,
    "lastUpdateAt": "2023-01-01T12:58:29.796Z",
    "createAt": "2023-01-01T12:53:00.523Z",
    "__v": 0
}
```

***

### Delete a book by ID
* Route: /api/v1/books/:id
* Method: DELETE
* Response

Success
```
{
    "message": "Book successfully deleted",
    "data": {
        "_id": "63b18f48a0fb794006387793",
        "title": "And There Was Light: Abraham Lincoln and the American Struggle",
        "shortDescription": "In his captivating new book, Jon Meacham has given us the Lincoln for our time.”—Henry Louis Gates, Jr",
        "longDescription": "Pulitzer Prize–winning biographer Jon Meacham chronicles the life of Abraham Lincoln, charting how—and why—he confronted secession, threats to democracy, and the tragedy of slavery to expand the possibilities of America",
        "year": 2022,
        "isbn": "0553393960",
        "price": 22.99,
        "lastUpdateAt": "2023-01-01T13:48:56.022Z",
        "createAt": "2023-01-01T13:48:56.030Z",
        "__v": 0
    }
}
```

***

### Get all books
* Route: /api/v1/books
* Method: GET
* Responses

Success
```
[
    {
        "_id": "63a1b61ca6178b167aabeaff",
        "title": "Nana Loves You More",
        "shortDescription": "Jimmy Fallon's children's book",
        "longDescription": "A broadcaster on NBC tonight show has made abook for kids inspired by …",
        "year": 2000,
        "isbn": "1234567890",
        "price": 32.99,
        "lastUpdateAt": "2022-12-20T13:18:20.175Z",
        "createAt": "2022-12-20T13:18:20.176Z",
        "__v": 0
    },
    {
        "_id": "63b19083a0fb794006387797",
        "title": "The Light We Carry: Overcoming in Uncertain Times",
        "shortDescription": "In an inspiring follow-up to her critically acclaimed, #1 bestselling memoir Becoming, former First Lady Michelle Obama shares practical wisdom and powerful strategies for staying hopeful and balanced in today’s highly uncertain world.",
        "longDescription": "Michelle Obama offers readers a series of fresh stories and insightful reflections on change, challenge, and power, including her belief that when we light up for others, we can illuminate the richness and potential of the world around us, discovering deeper truths and new pathways for progress.",
        "year": 2022,
        "isbn": "0593237463",
        "price": 16.99,
        "lastUpdateAt": "2023-01-01T13:54:11.085Z",
        "createAt": "2023-01-01T13:54:11.085Z",
        "__v": 0
    }
]
```

***

### Add an author
* Route:  /api/v1/authors
* Method: POST
* Body: 
```
{
    "firstname":"Jimmy",
    "lastname":"Fallon",
    "dob":"10-27-1971",
    "country": "USA"
}
```
* Responses

Success
```
{
    "firstname": "Jimmy",
    "lastname": "Fallon",
    "dob": "1971-10-26T23:00:00.000Z",
    "country": "USA",
    "books": [],
    "lastUpdateAt": "2023-01-01T14:19:37.063Z",
    "_id": "63b19679f65bdef1faefd689",
    "createAt": "2023-01-01T14:19:37.069Z",
    "__v": 0
}
```

***

### Upadate an Author by ID
* Route: /api/v1/authors/:id
* Method: PUT
* Body: 

```
{
    "country": "France"
}
```
* Responses

Success
```
{
    "_id": "63b19679f65bdef1faefd689",
    "firstname": "Jimmy",
    "lastname": "Fallon",
    "dob": "1971-10-26T23:00:00.000Z",
    "country": "France",
    "books": [],
    "lastUpdateAt": "2023-01-01T14:20:23.470Z",
    "createAt": "2023-01-01T14:19:37.069Z",
    "__v": 0
}
```

***

### Get Author By ID
* Route: /api/v1/authors/:id
* Method: GET
* Response

Success
```
{
    "_id": "63b19350a0fb79400638779a",
    "firstname": "Jimmy",
    "lastname": "Fallon",
    "dob": "1971-10-26T23:00:00.000Z",
    "country": "France",
    "books": [],
    "lastUpdateAt": "2023-01-01T14:07:58.162Z",
    "createAt": "2023-01-01T14:06:08.623Z",
    "__v": 0
}
```

***

### Delete an Author by ID
* Route: /api/v1/authors/:id
* Method: DELETE
* Response

Success
```
{
    "message": "Author successfully deleted",
    "data": {
        "_id": "63b19679f65bdef1faefd689",
        "firstname": "Jimmy",
        "lastname": "Fallon",
        "dob": "1971-10-26T23:00:00.000Z",
        "country": "France",
        "books": [],
        "lastUpdateAt": "2023-01-01T14:20:23.470Z",
        "createAt": "2023-01-01T14:19:37.069Z",
        "__v": 0
    }
}
```

***

### Get all authors
* Route: /api/v1/authors
* Method: GET
* Responses

Success
```
[
    {
        "_id": "63a1c3bf096b712bef66e5bf",
        "firstname": "Heidi",
        "lastname": "Murkoff",
        "dob": "1999-10-26T23:00:00.000Z",
        "country": "Germany",
        "books": [],
        "lastUpdateAt": "2022-12-20T14:16:31.507Z",
        "createAt": "2022-12-20T14:16:31.508Z",
        "__v": 0
    },
    {
        "_id": "63b19907f65bdef1faefd68f",
        "firstname": "Michelle",
        "lastname": "Obama",
        "dob": "1964-01-16T23:00:00.000Z",
        "country": "USA",
        "books": [],
        "lastUpdateAt": "2023-01-01T14:30:31.129Z",
        "createAt": "2023-01-01T14:30:31.129Z",
        "__v": 0
    }
]
```

run the app

bin/dev

```Module 3

Planning the application architecture

Models

- orm -> object relational mapping
- create a modal, create a table in the database
- singular word for the model name (User)
- table makes it plural (Users table)

- User - focused on the user ✅

- Submission - the user authors this. Has different media (text, image/video, link)
    -rails generate scaffold Submission title:string body:text url:string media:attachment user:references
    -scaffold creates a controller, model, views, and migration file
Q- user:references the same as a user.id?

- Community - category based on submission

- Comments - response given to the submission from another user to a given user

- Subscriptions - user can subscribe/unsubscribe to a community



~~~~~~~~~~~~~~~~~~~~~~~~~Module 4

SVGS & HELPERS
```

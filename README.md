# Build_Week_Node_API

| Request  | Endpoint                        | Description                                                                                     |
| -------- | ------------------------------- | ----------------------------------------------------------------------------------------------- |
| `post`   | /api/quantities                 | create new quantity. `amount` required                                                          |
| `post`   | /api/units                      | create new unit. `unit` required                                                                |
| `post`   | /api/ingredients                | create new ingredient. `name` required                                                          |
| `post`   | /api/instructions               | create new ingredient. `recipe_id`, `order`, `quantity_id`, `unit_id`, `ingredient_id` required |
| `post`   | /api/auth/register              | register new user. `username`, `password` required                                              |
| `post`   | /api/auth/login                 | login with existing user. `username`, `password` required                                       |
| `get`    | /api/users/                     | fetch all users. `Authorized token` required                                                    |
| `get`    | /api/users/recipes              | fetch all recipes of logged in user. `Authorized token` required                                |
| `post`   | /api/users/recipes              | create new recipe. `user_id`, `title`, `category`, `source` required                            |
| `put`    | /api/users/recipes/:id          | update existing recipe. `user_id`, `title`, `category`, `source` required                       |
| `delete` | /api/users/recipes/:id          | delete recipe with `id`                                                                         |
| `post`   | /api/users/recipes/search/:term | search the database for recipe including the `term`                                             |

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/ping', async () => {
  return { ping: 'pong' }
})

Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
Route.get('/user', 'AuthController.getUser').middleware('auth')
Route.post('/post', 'PostsController.create').middleware('auth')
Route.get('/posts', 'PostsController.index').middleware('auth')
Route.patch('/post', 'PostsController.edit').middleware('auth')
Route.delete('/post', 'PostsController.del').middleware('auth')

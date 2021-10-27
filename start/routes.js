"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
  Route.post("auth/register", "UserController.register");
  Route.post("auth/login", "UserController.login");

  Route.get("reminders", "ReminderController.index").middleware("auth");
  Route.post("reminders", "ReminderController.create").middleware("auth");
  Route.patch("reminders/:id", "ReminderController.update").middleware("auth");
}).prefix("api");

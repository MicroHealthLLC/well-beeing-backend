"use strict";

const Reminder = use("App/Models/Reminder");
const AuthorizationService = use("App/Services/AuthorizationService");

class ReminderController {
  async index({ auth }) {
    const user = await auth.getUser();
    return await user.reminders().fetch();
  }
  async show({ auth, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const reminder = await Reminder.find(id);

    AuthorizationService.verifyPermission(reminder, user);
    return reminder;
  }
  async store({ auth, request }) {
    const user = await auth.getUser();
    const reminder = new Reminder();

    reminder.fill(request.body);
    await user.reminders().save(reminder);

    return reminder;
  }
  async update({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const reminder = await Reminder.find(id);

    AuthorizationService.verifyPermission(reminder, user);
    reminder.merge(request.body);
    await reminder.save();

    return reminder;
  }
  async destroy({ auth, request, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const reminder = await Reminder.find(id);

    AuthorizationService.verifyPermission(reminder, user);
    await reminder.delete();
  }
}

module.exports = ReminderController;

"use strict";

const Reminder = use("App/Models/Reminder");

class ReminderController {
  async index({ auth }) {
    const user = await auth.getUser();
    return await user.reminders().fetch();
  }
  async create({ auth, request }) {
    const user = await auth.getUser();
    const reminder = new Reminder();

    reminder.fill(request.body);
    await user.reminders().save(reminder);

    return reminder;
  }
  async update({ auth, request, params }) {
    const { id } = params;
    const reminder = await Reminder.find(id);

    reminder.merge(request.body);
    await reminder.save();

    return reminder;
  }
}

module.exports = ReminderController;

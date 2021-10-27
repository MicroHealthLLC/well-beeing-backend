"use strict";

const Reminder = require("../../Models/Reminder");

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
}

module.exports = ReminderController;

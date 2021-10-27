"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ReminderSchema extends Schema {
  up() {
    this.create("reminders", (table) => {
      table.increments();
      table.integer("user_id").unsigned().references("id").inTable("users");
      table.string("category");
      table.string("level");
      table.string("frequency");
      table.string("time");
      table.string("content_type");
      table.timestamps();
    });
  }

  down() {
    this.drop("reminders");
  }
}

module.exports = ReminderSchema;

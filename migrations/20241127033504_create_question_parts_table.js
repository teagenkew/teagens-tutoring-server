/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("question_parts", (table) => {
      table.increments("id").primary(); // Primary key
      table
        .integer("question_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("questions")
        .onDelete("CASCADE"); // Foreign key with cascade on delete
      table.string("part_label", 1).notNullable(); // Label for the part
      table.string("part_text").notNullable(); // Text of the question part
      table.timestamp("created_at").defaultTo(knex.fn.now()); // Created timestamp
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable("question_parts");
  }
  
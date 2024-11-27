/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("answers", (table) => {
    table.increments("id").primary();
    table
      .integer("question_part_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("question_parts")
      .onDelete("CASCADE");
    table.string("answer").notNullable();
    table.integer("is_correct").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("answers");
}

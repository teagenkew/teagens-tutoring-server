/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("questions", (table) => {
    table.increments("id").primary();
    table.string("subject").notNullable();
    table.string("unit").notNullable();
    table.string("question_type").notNullable();
    table.string("question").notNullable();
    table.string("image_url").nullable();
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
  return knex.schema
    .alterTable("question_keywords", (table) => {
      table.dropForeign("question_id");
    })
    .then(() => knex.schema.dropTableIfExists("question_keywords"))
    .then(() => knex.schema.dropTableIfExists("questions"));
}


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema
    .createTable("keywords", (table) => {
      table.increments("id").primary();
      table.string("keyword").notNullable();
    })
    .createTable("question_keywords", (table) => {
      table.increments("id").primary();
      table
        .integer("question_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("questions")
        .onDelete("CASCADE");
      table
        .integer("keyword_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("keywords")
        .onDelete("CASCADE");
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("keywords").dropTable("question_keywords");
}

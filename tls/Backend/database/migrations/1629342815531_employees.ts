import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Employees extends BaseSchema {
  protected tableName = 'employees'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('cpf').primary().unique().notNullable()
      table
        .integer('office_id')
        .unsigned()
        .references('offices.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name')
      table.string('last_name')
      table.string('role')
      table.string('birthday')
      table.string('salary')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

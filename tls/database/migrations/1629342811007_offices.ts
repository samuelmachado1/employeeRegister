import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Offices extends BaseSchema {
  protected tableName = 'offices'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().unsigned()
      table.string('description')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

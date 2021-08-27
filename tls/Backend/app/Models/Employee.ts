import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public office_id: number

  @column()
  public cpf: string

  @column()
  public name: string

  @column()
  public last_name: string

  @column()
  public role: string

  @column()
  public birthday: string

  @column()
  public salary: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

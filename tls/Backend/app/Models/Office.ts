import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Employee from './Employee'

export default class Office extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Employee)
  public employee: HasMany<typeof Employee>
}

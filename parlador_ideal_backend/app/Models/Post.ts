import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne,
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public content: String

  @column()
  public user_id: number

  @belongsTo(() => User, {foreignKey: 'user_id'})
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

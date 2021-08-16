import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from '../../app/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'virk@adonisjs.com',
        password: 'secret',
        name: 'Virk'
      },
      {
        email: 'romain@adonisjs.com',
        password: 'supersecret',
        name: 'romain'
      }
    ])
  }
}

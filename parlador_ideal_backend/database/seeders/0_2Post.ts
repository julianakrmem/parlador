import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from '../../app/Models/Post'

export default class PostSeeder extends BaseSeeder {
public async run () {
    await Post.createMany([
      {
        content: "Estou muito feliz em poder compartilhar esse post",
        user_id: 1,
      },
      {
        content: "Realemente é muito bom usar esse sistema",
        user_id: 2,
      },
      {
        content: "Estou muito feliz",
        user_id: 1,
      },
      {
        content: "Whats?",
        user_id: 2,
      },
    ])
  }
}

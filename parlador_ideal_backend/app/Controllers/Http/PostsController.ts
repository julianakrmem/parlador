import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Posts from '../../Models/Post'
import User from '../../Models/User'

export default class PostsController {

    public async create({ request, auth, response }: HttpContextContract) {
        const content = request.input("content");
        const { user: {id} } = auth



        let currentUser = await User.find(id)
        if(currentUser){
            let post = await Posts.create({
                content,
                user_id: id
            })
            return response.json(post)
        }
    }

    public async index({ response }: HttpContextContract) {
        const posts = await Posts.query()
        .preload('user')

        return response.json(posts)
    }

    public async edit({ response, request }: HttpContextContract) {
        const post_id = request.input("id");
        const content = request.input("content");
        const post = await Posts.find(post_id)
        if(post){
            post.content = content;
            post.save();
            return response.json(post)
        }else{
            return response.status(400).json({
                "error":"Post não encontrado"
            })
        }
    }

    public async del({ response, request }: HttpContextContract) {
        const post_id = request.input("id");
        const post = await Posts.find(post_id)
        if(post){
            post.delete();
            return response.json({delete: 'ok'})
        }else{
            return response.status(400).json({
                "error":"Post não encontrado"
            })
        }
    }
}

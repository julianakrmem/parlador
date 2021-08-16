import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class AuthController {
    
    public async login({ request, auth }: HttpContextContract) {
        const email = request.input("email");
        const password = request.input("password");
        const token = await auth.attempt(email,password);
        return token.toJSON();
    }
    
    public async register({ request, auth }: HttpContextContract) {
        const email = request.input("email");
        const password = request.input("password");
        const name = request.input("name");
        const newUser = new User();
        newUser.email = email;
        newUser.password = password;
        newUser.name = name;
        await newUser.save();
        const token = await auth.use("api").login(newUser, {
            expiresIn: "10 days",
        });
        return token.toJSON();
    }

    public async getUser({ auth, response }: HttpContextContract) {
        console.log(auth)
        return response.json(auth.user);
    }
}

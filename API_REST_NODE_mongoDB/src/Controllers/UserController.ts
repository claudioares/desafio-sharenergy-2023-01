import UserListing from '../Users/UserListing';
import {Request, Response} from 'express';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import { userToken } from '../Users/token';

class UserController {
    async create (req:Request, res:Response){
        try {
            const {name, email, password} = req.body;
            const userAlreadyExists = await UserListing.findOne({email:email});

            
            if(userAlreadyExists) return res.status(400).json({message: "This email already exists!"});
            if(!name || !email || !password) return res.status(400).json({message: "All parameters required"})

            const cryptPassword = await bcrypt.hash(password, 10)


            const createdUser = await UserListing.create({
                name,
                email,
                password:cryptPassword
            })
            
            return res.status(201).json({
                name, 
                email
            })

        } catch (error) {
                return res.status(404).json({message: "Failed to create user!"});
        }
    }
    async login (req:Request, res:Response) {
        try {
            const { email, password } = req.body;


            if(!email || !password) return res.status(400).json({message: "All parameters required"});

            const user = await UserListing.findOne({email})
            if(user === null) return res.status(400).json({ message: "User not foud!"})

            const { _id, name, email:emailUser } = user;

            const toCompare = await bcrypt.compare(password, user.password);
            if(!toCompare) return res.status(400).json({ messagem: 'Failed validetion!'})

            const token = jwt.sign({id: user._id}, userToken, { expiresIn: '8h' })

            return res.status(200).json({
                _id,
                name,
                emailUser,
                token
            })

        } catch (error) {
            return res.status(404).json({message: "Failed to login users!"});
        }
    }

    async listing (req:Request, res:Response) {
        try {
            const listingUser = await UserListing.find();

            return res.status(200).json(listingUser)

        } catch (error) {
            return res.status(404).json({message: "Failed to list users!"});
        }
    }

    async listingUser (req:Request, res:Response) {
        try {
            const { id } = req.params;
            const listingUserId = await UserListing.findById(id);
            if(!listingUserId) return res.status(404).json({message: "User not foud!"});
    
            return res.status(200).json(listingUserId);

        } catch (error) {
            return res.status(404).json({message: "Failed to list user!"});
        }
    }

    async update (req:Request, res:Response) {
        try {
            const { id } = req.params;
            const {email, password} = req.body;

            const userAlreadyExists = await UserListing.findOne({email:email});

            if(userAlreadyExists) return res.status(400).json({message: "This email already exists!"});

            await UserListing.findByIdAndUpdate(id, req.body)
            if(!id) return res.status(404).json({message: "Verify user all params"});
            if(!password) return res.status(404).json({message: "Verify all params"})

            return res.status(200).json({message: "User updated"});

        } catch (error) {
            return res.status(404).json({message: "Failed to update user!"});
        }
    }

    async delete (req:Request, res:Response) {
      try {
        const { id  } = req.params;
        if(!id) return res.status(404).json({message: "Verify user all params"});

        const deleteUser = await UserListing.findByIdAndDelete(id)
        if(!deleteUser) return res.status(404).json({message: "User does not exists"})

        return res.status(200).json({message: "User deleted"});

      } catch (error) {
        return res.status(404).json({message: "Failed to delete user!"});
      }
    }
}

export default new UserController;
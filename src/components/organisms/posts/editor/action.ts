"use server"

import { validateRequest } from "@/auth"
import prisma from "@/lib/prisma"
import { createPostSchema } from "@/lib/validation"

export const submitPost=async (input:string)=>{
    
    const {user} = await validateRequest()

    if(!user) throw new Error('Unauhthorized action')
        try {
            const {content} = createPostSchema.parse({content:input});
            await prisma.post.create({
                data:{
                    content,
                    userId:user.id
                }
            });
        } catch (error) {
            console.error('Error creating post:', error);
            throw new Error('Failed to create post');
        }
}
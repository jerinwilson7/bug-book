"use client"

import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import { submitPost } from './action'
import { UserAvatar } from '@/components/atoms'
import { useSession } from '@/providers'
import { Button } from '@/components/ui/button'
import './styles.css'

export const PostEditor = () => {

    const {user} = useSession()

    const editor = useEditor({
        extensions:[
            StarterKit.configure({
                bold:false,
                italic:false
            }),
            Placeholder.configure({
                placeholder:"What's crack-a-lackin"
            })
        ]
    })

    const input = editor?.getText({
        blockSeparator:"\n",
    }) || "";

    async function onSubmit() {
        console.log(" in ",input)
        await submitPost(input)
        editor?.commands.clearContent()
    }
  return (
    <div className='flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm'>
        <div className='flex gap-5'>
            <UserAvatar avatarUrl={user.avatarUrl} className='hidden sm:inline'/>
            <EditorContent
            editor={editor}
            className="w-full max-h-80 overflow-y-auto bg-background rounded-2xl px-5 py-3"/>
        </div>
        <div className='flex justify-end'>
            <Button
            onClick={onSubmit}
            disabled={!input.trim()}
            className='min-w-20'>
                Post
            </Button>
        </div>
    </div>
  )
}

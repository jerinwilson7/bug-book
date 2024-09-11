"use server"

import {lucia,validateRequest} from '@/auth'
import { redirect } from 'next/navigation';

export async function logout() {
    const {session} = await validateRequest();

    if(!session) {
        throw new Error('Unauthorized')
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie()

    return redirect("/login")
}
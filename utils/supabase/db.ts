import { createClient } from '@/utils/supabase/server'

export async function login(email: string, password: string){
    const supabase = await createClient()
    const {data, error} = await supabase.auth.signInWithPassword({email, password,}) 
            if (error){
                console.log("aslkdfjsaljkdf")
                return error
            }

    return data
}
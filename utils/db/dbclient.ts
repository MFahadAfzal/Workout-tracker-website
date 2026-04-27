import { createClient } from '@/utils/supabase/client'

export async function login(email: string, password: string){
    const supabase = createClient()
    const {data, error} = await supabase.auth.signInWithPassword({email, password,}) 
            if (error){
                console.log("aslkdfjsaljkdf")
                return error
            }

    return data
}
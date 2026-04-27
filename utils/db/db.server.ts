import { createClient } from "../supabase/server";

export async function getWorkouts(){
    const supabase = await createClient()
    const {data:{user}} = await supabase.auth.getUser()
}
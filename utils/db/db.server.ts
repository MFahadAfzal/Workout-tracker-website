import { createClient } from "../supabase/server";

export async function getWorkouts(){
    const supabase = await createClient()
    const {data:{user}} = await supabase.auth.getUser()
    const { data } = await supabase.from('workouts').select().eq('user_id', user!.id)
}
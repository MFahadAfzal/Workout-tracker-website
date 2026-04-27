import { createClient } from "../supabase/server";

export async function getWorkouts(){
    const supabase = await createClient()
}
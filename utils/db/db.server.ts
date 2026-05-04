import { createClient } from "../supabase/server";

export async function getWorkouts(){
    const supabase = await createClient()
    const {data:{user}} = await supabase.auth.getUser()
    const { data } = await supabase.from('workouts').select().eq('user_id', user!.id)
    return data
}

export async function getExercises(id: string){
    const supabase = await createClient()
    const {data:{user}} = await supabase.auth.getUser()
    const { data } = await supabase.from('exercises').select().eq('workout_id', id)
    return data
}

export async function getSets(id: string){
    const supabase = await createClient()
    console.log(id)
    const { data: setData } = await supabase.from('sets').select().eq('exercise_id', id)

    const { data: logData } = await supabase.from('logs').select().eq('exercise_id', id)

    return {setData, logData}
}
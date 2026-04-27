import { createClient } from '@/utils/supabase/server'

export async function getWorkouts(userId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('workouts')
    .select()
    .eq('user_id', userId)
  return data
}

export async function insertWorkout(name: string, userId: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('workouts')
    .insert({ name, user_id: userId })
  return data
}
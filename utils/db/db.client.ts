import { createClient } from '@/utils/supabase/client'
import { create } from 'domain'

export async function login(email: string, password: string){
    const supabase = createClient()
    const {data, error} = await supabase.auth.signInWithPassword({email, password,}) 
            if (error){
                console.log("aslkdfjsaljkdf")
                return error
            }

    return data
}

  export async function createAccount(userEmail: string, userPassword: string, userFirstName: string, userLastName: string){
    const supabase = createClient()
    const { data, error} = await supabase.auth.signUp({
        email: userEmail,
        password: userPassword
    })
    if (!data.user){
        return {data, error}
    }
    
    const { error: profileError } = await supabase.from('profile').insert({ 
    user_id: data.user.id,
    firstName: userFirstName, 
    lastName: userLastName 
    })

    if (profileError) {
        console.error('Profile insert failed:', profileError.message)
    }
    return {data, error}
  }


export async function addWorkout(name: string){
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    const { data, error } = await supabase.from('workouts').insert({ exercise: name, user_id: user!.id  }).select()

    return data ? data[0] : null
    
  }

export async function deleteWorkout(workoutId: string){
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    const { data, error } = await supabase.from('workouts').delete().eq('id', workoutId).eq('user_id', user!.id)
    return error
}

export async function addExercise(exerciseName: string, id: string){
    const supabase = createClient()

    const { data, error } = await supabase.from('exercises').insert({ name: exerciseName, workout_id: id}).select()

    

    return data ? data[0] : null
    
  }

export async function deleteExercise(exerciseId: string){
    const supabase = createClient()

    const { data, error } = await supabase.from('exercises').delete().eq('id', exerciseId)
   
    return error
}


export async function addSet(exerciseId: string, reps: Number, weight: Number){
    const supabase = createClient()

    const {count} = await supabase.from('sets').select('*', { count: 'exact', head: true }).eq('exercise_id', exerciseId)

    const { data, error } = await supabase.from('sets').insert({ set_number: count! +1, weight: weight, reps: reps, exercise_id: exerciseId}).select()
    await supabase.from('logs').insert({ set_number: count! +1, weight: weight, reps: reps, exercise_id: exerciseId})

    return data ? data[0] : null
    
  }

  export async function updateSet(exerciseId: string, id: string, reps: Number, weight: Number){
    const supabase = createClient()

    const {count} = await supabase.from('sets').select('*', { count: 'exact', head: true }).eq('exercise_id', exerciseId)

    const{ data, error} = await supabase.from('sets').update({reps:reps, weight: weight}).eq('id', id)
    await supabase.from('logs').insert({ set_number: count!, weight: weight, reps: reps, exercise_id: exerciseId})

    console.log(error)

    return data ? data[0] : null
    
  }


  export async function getExerciseInfo(exerciseId: string){
      const supabase = createClient()
      const {data:{user}} = await supabase.auth.getUser()
      const { data } = await supabase.from('sets').select().eq('exercise_id', exerciseId)

      return data
  }

  



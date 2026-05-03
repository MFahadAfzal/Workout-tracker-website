
import { getExercises } from "@/utils/db/db.server"
import ClientPart from './clientPart'


export default async function ExercisePage({ params }: { params: Promise<{ workoutId: string }> }) {
  const { workoutId } = await params;
  const exercises = await getExercises(workoutId)
  return <ClientPart id={workoutId} data={exercises} />
}

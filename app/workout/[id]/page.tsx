
import { getExercises } from "@/utils/db/db.server"
import ClientPart from './clientPart'


export default async function ExercisePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const exercises = await getExercises(id)
  return <ClientPart id={id} data={exercises} />
}

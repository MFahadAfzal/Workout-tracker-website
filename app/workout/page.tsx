
import { getWorkouts } from "@/utils/db/db.server"
import ClientPart from './clientPart'


export default async function WorkoutsPage() {
  const workouts = await getWorkouts()
  return <ClientPart data={workouts} />
}

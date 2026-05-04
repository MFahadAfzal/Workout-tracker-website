
import { getSets} from "@/utils/db/db.server"
import ClientPart from './clientPart'


export default async function ExercisePage({ params }: { params: Promise<{ exerciseId: string }> }) {
  const { exerciseId } = await params;
  console.log(exerciseId)
  const {setData, logData} = await getSets(exerciseId)
  return <ClientPart id={exerciseId} setData={setData} logData={logData} />
}

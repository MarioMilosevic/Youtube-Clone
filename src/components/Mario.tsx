import { useParams } from "react-router"


const Mario = () => {
  const { videoId } = useParams()
  console.log(videoId)
  // uzmem ovaj id i onda fecujem video koji mi treba
  // onamo gore stavim vazda onaj Header da je
  return (
    <div>
      Mario
    </div>
  )
}

export default Mario

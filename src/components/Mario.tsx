import { useParams } from "react-router"


const Mario = () => {
  const id = useParams()
  console.log(id)
  // uzmem ovaj id i onda fecujem video koji mi treba
  // onamo gore stavim vazda onaj Header da je
  return (
    <div>
      Mario
    </div>
  )
}

export default Mario

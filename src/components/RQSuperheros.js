import axios from "axios"
import { useQuery } from "react-query"

const RQSuperheros = () => {
  const { isLoading, data, isError, error } = useQuery(
    "get-superheros", () => {
      return axios.get("http://localhost:4000/superheros")
    })
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <>
      <h2>RQSuperheros</h2>
      {data?.data.map(superhero => {
        return <div key={superhero.id}>
          <p>name is : {superhero.name}</p>
          <p>real name is : {superhero.realName}</p>
        </div>
      })}
    </>
  )
}

export default RQSuperheros

import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"


const fetchSuperheros = () => {
  return axios.get("http://localhost:4000/superheros")
}

const RQSuperheros = () => {
  // const [intervalTime, setIntervalTime] = useState(3000)
  const onSuccess = (data) => {
    console.log("success", data)
  }
  const onError = (error) => {
    console.log("error", error)
  }

  const { isLoading, data, isError, error, refetch, isFetching } = useQuery(
    "get-superheros",
    fetchSuperheros, {
    enabled: false,
    onSuccess: onSuccess,
    onError: onError
  }
  )

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>{error}</h1>
  }
  return (
    <>
      <h2>RQSuperheros</h2>
      <button onClick={refetch}>fetch data</button>
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

import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"


const fetchSuperheros = () => {
  return axios.get("http://localhost:4000/superheros")
}

const RQSuperheros = () => {
  const onSuccess = (data) => {
    console.log("success", data.data)
  }
  const onError = (error) => {
    console.log("error", error)
  }

  const { isLoading, data, isError, error } = useQuery(
    "get-superheros",
    fetchSuperheros, {
    onSuccess: onSuccess,
    onError: onError,
    select: (data) => data.data.map(hero => hero)
  }
  )

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>{error}</h1>
  }
  return (
    <>
      <h2>RQSuperheros</h2>
      {/* <button onClick={refetch}>fetch data</button> */}
      {/* {data?.data.map(superhero => {
        return <div key={superhero.id}>
          <p>name is : {superhero.name}</p>
          <p>real name is : {superhero.realName}</p>
        </div>
      })} */}

      <div>
        {data.map(hero => {
          return <div key={hero.id}>
            <p>{hero.name}</p>

          </div>
        })}
      </div>
    </>
  )
}

export default RQSuperheros

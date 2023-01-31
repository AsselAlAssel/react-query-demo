import axios from "axios"
import { useState, useEffect } from "react"

const Superheros = () => {
  const [superheros, setSuperheros] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:4000/superheros")
      .then(res => {
        setSuperheros(res.data)
        setIsLoading(false)
      }).catch(err => {
        setIsLoading(false)
        setIsError(true)
        console.log(err)
      })
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>Error</h1>
  }
  return (
    <>
      <h1>Superheros</h1>
      {superheros.map(superhero => {
        return <div key={superhero.id}>
          <p>name is : {superhero.name}</p>
          <p>real name is : {superhero.realName}</p>
        </div>
      })}
    </>
  )
}

export default Superheros
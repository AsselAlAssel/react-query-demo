import { useState } from "react"
import { Link } from "react-router-dom"
import { useCreateSuperHero, useSuperHeroData } from "../hooks/useSuperHerOData"

const RQSuperheros = () => {
  const { isLoading, data, isError, error } = useSuperHeroData()
  const [name, setName] = useState("")
  const [realName, setRealName] = useState("")
  const { mutate: addHero } = useCreateSuperHero()


  const handelSubmitCreateSuperHeroForm = (e) => {
    e.preventDefault()
    console.log(name, realName)
    const heroData = { name, realName }
    addHero(heroData)
    setName("")
    setRealName("")
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>{error}</h1>
  }
  return (
    <>
      <form onSubmit={handelSubmitCreateSuperHeroForm}>
        <input type="text" value={name} placeholder="name"
          onChange={(e) => setName(e.target.value)} />
        <input type="text" value={realName} placeholder="realName"
          onChange={(e) => setRealName(e.target.value)} />
        <br />

        <button>submit</button>
      </form>
      <h2>RQSuperheros</h2>
      <div>
        {data?.map(hero => {
          return <div key={hero.id}>
            <Link to={`/RQSuperHero/${hero.id}`}>{hero.name}</Link>
          </div>
        })}
      </div>
    </>
  )
}

export default RQSuperheros

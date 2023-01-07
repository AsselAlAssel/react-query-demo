import { Link } from "react-router-dom"
import { useSuperHeroData } from "../hooks/useSuperHerOData"

const RQSuperheros = () => {
  const { isLoading, data, isError, error } = useSuperHeroData()

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>{error}</h1>
  }
  return (
    <>
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

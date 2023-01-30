import { useParams } from "react-router-dom"
import { useSuperHeroInformation } from "../hooks/useSuperHeroInformation"

const RQSuperHero = () => {
    const { id } = useParams()

    const { isError, error, isLoading, data } = useSuperHeroInformation(id)

    // if (isError)
    //     return <h1>{error}</h1>

    // if (isLoading)
    //     return <h1>loading.....</h1>

    console.log(data)
    return (
        <div>
            <h1>RQSuperHero data {id}</h1>
            <p>{data?.name}</p>
            <p>{data?.realName}</p>
        </div>
    )
}

export default RQSuperHero
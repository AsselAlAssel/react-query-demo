import axios from "axios"
import { useQueries } from "react-query"

const fetchHeroInfo = (heroId) => {
    return axios.get(`http://localhost:4000/superheros/${heroId}`)
}
const DynamicParallelQueries = ({ heroIds }) => {

    const herosData = useQueries(
        heroIds.map(heroId => {
            return {
                queryKey: ["get info ", heroId],
                queryFn: () => fetchHeroInfo(heroId)

            }
        })
    )

    console.log({ herosData })
    return (
        <div>DynamicParallelQueries</div>
    )
}

export default DynamicParallelQueries
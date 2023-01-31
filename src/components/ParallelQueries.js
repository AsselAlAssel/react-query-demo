import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeros = () => {
    return axios.get("http://localhost:4000/superheros")
}
const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends")
}

const ParallelQueries = () => {
    const { data: superHero } = useQuery("get/superHeros", fetchSuperHeros)
    const { data: friends } = useQuery("get/superHeros2", fetchFriends)
    return (
        <div>
            <h1>ParallelQueries</h1>
        </div>
    )
}

export default ParallelQueries
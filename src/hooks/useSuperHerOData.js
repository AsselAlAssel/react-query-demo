import axios from "axios"
import { useQuery } from "react-query"


const fetchSuperheros = () => {
    return axios.get("http://localhost:4000/superheros")
}
export const useSuperHeroData = () => {
    return useQuery(
        "get-superheros",
        fetchSuperheros, {
        select: (data) => data.data.map(hero => hero)
    }
    )
}
import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroData = (id) => {
    return axios.get(`http://localhost:4000/superheros/${id}`)
}

export const useSuperHeroInformation = (id) => {
    return useQuery(["get-superHero", id], () => fetchSuperHeroData(id), {
        select: (data) => data.data
    })
}


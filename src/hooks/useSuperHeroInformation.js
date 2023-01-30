import axios from "axios"
import { useQuery, useQueryClient } from "react-query"

const fetchSuperHeroData = (id) => {
    return axios.get(`http://localhost:4000/superheros/${id}`)
}

export const useSuperHeroInformation = (id) => {
    const queryClient = useQueryClient() // to give the data from the cache and put it in the interface
    return useQuery(["get-superHero", id], () => fetchSuperHeroData(id), {
        select: (data) => data.data,
        initialData: () => {
            const heroData = queryClient.getQueriesData("get-superheros")?.find(hero => hero.id === +id)
            if (heroData) {
                return {
                    data: heroData
                }
            }
            return undefined;
        }
    })
}


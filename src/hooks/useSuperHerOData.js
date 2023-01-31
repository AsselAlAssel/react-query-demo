import axios from "axios"
import { useQuery, useMutation, useQueryClient } from "react-query"


const fetchSuperheros = () => {
    return axios.get("http://localhost:4000/superheros")
}

const addSuperHero = (newSuperHeroData) => {
    return axios.post("http://localhost:4000/superheros", newSuperHeroData)
}

export const useSuperHeroData = () => {
    return useQuery(
        "get-superheros",
        fetchSuperheros, {
        select: (data) => data.data.map(hero => hero)
    }
    )
}

export const useCreateSuperHero = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperHero, {
        onSuccess: (data) => {
            queryClient.setQueriesData("get-superheros", (oldData) => {
                return {
                    ...oldData,
                    data: [...oldData.data, data.data]
                }
            })
        }
    })
}


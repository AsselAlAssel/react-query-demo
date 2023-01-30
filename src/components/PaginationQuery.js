import axios from "axios"
import { useState } from "react";
import { useQuery } from "react-query"

const fetchColors = (page) => {
    return axios.get(`http://localhost:4000/colors/?_limit=2&_page=${page}`);
}

const PaginationQuery = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { data: dataColor, isError, isLoading } = useQuery(["colors", pageNumber], () => fetchColors(pageNumber), {
        keepPreviousData: true,
        // select: (data) => data?.data
    })
    console.log(dataColor)
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Something went wrong</div>
    return (
        <div>
            {dataColor.data.map((color) => <p key={color.id}>{color.name}</p>)}
            <button onClick={() => setPageNumber(pageNumber => pageNumber - 1)}
                disabled={pageNumber === 1}
            >Prev</button>
            <button onClick={() => setPageNumber(pageNumber => pageNumber + 1)}>next</button>
        </div >
    )
}

export default PaginationQuery
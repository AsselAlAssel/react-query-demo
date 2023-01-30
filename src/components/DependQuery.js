import axios from "axios"
import { useQuery } from "react-query"

const fetchUserData = (id) => {
    return axios.get(`http://localhost:4000/user/${id}`)
}
const fetchUserCourses = (id) => {
    return axios.get(`http://localhost:4000/courses/${id}`)
}
const DependQuery = () => {
    const { data: userData } = useQuery(["get-user", 1], () => fetchUserData(1))
    const userKey = userData?.data.userKey;
    console.log(userKey)
    const { data: userCourses } = useQuery(["get-courses", userKey], () => fetchUserCourses(userKey), {
        enabled: !!userKey
    })
    console.log(userCourses)

    return (
        <div>
            hello
        </div>
    )
}

export default DependQuery
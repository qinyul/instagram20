import { useEffect, useState } from "react"
import faker from '@faker-js/faker'
import Story from "./Story"
import { useSession } from "next-auth/react"

const Stories = () => {

    const [suggestions,setSuggestions]:any = useState([])
    const {data:session}:any = useSession()

    useEffect(() => {
        const suggestions = [...Array(20)].map((_,i) => ({
            ...faker.helpers.userCard(),
            avatar:faker.image.avatar(),
            id:i
        }))     

        setSuggestions(suggestions)
    },[])

    return(
        <div className="flex space-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {
                session && (
                    <Story img={session.user.image} username={session.user.username} />
                )
            }
            {
                suggestions.map((profile:any) => (
                    <Story 
                        key={profile.id}
                        img={profile.avatar}
                        username={profile.username}
                    />
                ))
            }
        </div>
    )
}

export default Stories
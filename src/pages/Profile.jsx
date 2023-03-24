import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { authContext } from "../context/authContext"

function Profile() {
    const { tokenDetails } = useContext(authContext)

    const [allMyPosts, setAllMyPosts] = useState([])

    async function getAllMyPosts() {
        const res = await axios.get(`http://1to21.com/api/posts?email=${tokenDetails.email}`)
        setAllMyPosts(res.data);
    }

    console.log(typeof tokenDetails);

    useEffect(() => {
            getAllMyPosts()
    }, [tokenDetails])

    return (
        <>
            <div className="flex mt-24 p-8">
                <div style={{maxHeight:'150px',minWidth:'300px'}} className="max-w-sm p-6 pr-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            My Profile
                        </h5>
                    </a>
                    <h5 className="mb-2 text-medium font-semibold tracking-tight text-gray-900 dark:text-white">
                        {tokenDetails.name}
                    </h5>
                    <h5 className="mb-2 text-medium font-semibold tracking-tight text-gray-900 dark:text-white">
                        {tokenDetails.email}
                    </h5>
                </div>
                <div className="p-6">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        My Posts
                    </h5>
                    <div className="flex flex-col items-center mt-8">
                <div style={{ display: 'grid', gridTemplateColumns: '350px 350px 350px', gap: '20px' }}>
                    {allMyPosts.map((post) => (
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={post.photo} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {post.title}
                                    </h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {post.desc.slice(0, 50)}
                                </p>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                </div>
            </div>
        </>
    )
}

export default Profile
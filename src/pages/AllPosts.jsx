import { useSelector } from 'react-redux'
import appwriteService from '../appwrite/conf.js'
import { Container, PostCard } from '../components' 
import { useEffect, useState } from 'react'

function AllPosts() {
    const userId = useSelector((state) => state.auth.userData?.$id)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts(userId).then((res) => {
            if(res){
                console.log('res', res);
                setPosts(res?.documents)
            }
        })

    }, [])
  return (
    <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
  )
}

export default AllPosts
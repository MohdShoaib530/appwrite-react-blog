import appwriteService from '../appwrite/conf.js'
import { Container, PostCard } from '../components' 
import { useEffect, useState } from 'react'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((res) => {
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
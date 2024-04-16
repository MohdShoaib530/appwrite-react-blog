import appwriteService from '../appwrite/conf.js'
import { Container, PostCard } from '../components' 
import { useEffect, useState } from 'react'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((res) => {
            if(res){
                setPosts(res)
            }
        })

    }, [])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
               {posts.map((post, index) => {
               return <PostCard key={index} post={post} />
               })}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts
import { Container, Postform } from '../components'
import appwriteService from '../appwrite/conf'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [posts, setPosts] = useState(null)
    const {slug} = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if(post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

  return (
    posts ? (
        <div className='py-8'>
            <Container>
                <Postform post={posts}/>
            </Container>
        </div>
    ) : null
  )
}

export default EditPost
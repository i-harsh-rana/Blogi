import React, {useState, useEffect} from 'react'
import Container from '../container/Container'
import service from '../../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
import PostForm from '../postform/PostForm'


function EditPost() {
    const [post, setPosts] = useState([])
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      if(slug){
        service.getPost(slug)
        .then((post)=>{
            if(post){
                setPosts(post)
            }
        })
      }else{
        navigate('/')
      }
    }, [slug, navigate])
    
  return post ? (
    <div className="py-8">
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
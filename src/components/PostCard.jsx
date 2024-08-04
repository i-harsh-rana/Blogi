import React from 'react'
import service from '../appwrite/config'
import { BrowserRouter as Link } from 'react-router-dom'

function PostCard({
    $id,
    title,
    fearuredImage
}) {
  return (
    <Link to={`/post/${id}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4">
            <div className="w-full justify-center mb-4">
                <img src={service.filePreview(fearuredImage)} alt="titile" className='rounded-xl' />

            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard
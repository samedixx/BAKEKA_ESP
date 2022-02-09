import React, { useEffect } from 'react'
import { getPosts } from '../api/post'

let pageNo = 0
const POST_LIMIT = 9
export const Home = () => {

  const fetchPosts = async () => {

    const {error, posts} = await getPosts(pageNo, POST_LIMIT);

    if ( error ) return console.log(error);

    console.log(posts);
  }

  useEffect(( ) => {
    fetchPosts()
  }, [])

  return (
    <div>Home</div>
  )
}

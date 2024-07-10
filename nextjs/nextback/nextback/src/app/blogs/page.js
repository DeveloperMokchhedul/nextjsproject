"use client"
import Link from 'next/link';
import React, { useState } from 'react'



const initialBlog = {
  title:"", 
  description:""
};
function Blogs() {
  const [input, setInput] = useState(initialBlog)

  const handleBlog = (e) => {

    const name = e.target.name
    const value = e.target.value
    setInput({
      ...input,
      [name]: value
    })

  }

  const  handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch('/api/add-blog', {
        method:"POST",
        body:JSON.stringify(input)
      })
      console.log(input);

      
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <>
      <h1>add blog page</h1>
      <div className='w-8/12 bg-gray-500 mx-auto'>
        <input
          type='text'
          name='title'
          placeholder='Enter your blog'
          onChange={handleBlog}
        />
      </div>
      <div className='w-8/12 bg-gray-500 mx-auto'>
        <input
          type='text'
          name='description'
          placeholder='Enter your blog'
          onChange={handleBlog}
        />
      </div>
      <button onClick={handleSubmit} className='bg-green-800'>add Blog</button>

      <br />

<Link href={"/home"} >show blog</Link>
    </>
  )
} 

export default Blogs

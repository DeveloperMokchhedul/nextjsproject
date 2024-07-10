

import Link from 'next/link';
import React from 'react'

async function fetchData(){
    try {

        const apiResponse = await fetch("http://localhost:3000/api/show-blog/", {
            method:"GET",
            cache: "no-store"
        });
        const result = await apiResponse.json();
        return result.data;


    } catch (error) {
        
    }

}

async function Blogs() {
    const blogList = await fetchData()



  
    
  return (
    <div>
        <ul flex gap-10>
            {
                blogList.map((item)=>(
                    <div key={item._id} className='w-[120px] bg-white p-10 flex gap-5 border-2 border-red-300 '>
                        <li>{item.title}</li>
                        <li>{item.name}</li>
                    </div>
                ))

            }
        </ul>
        <Link href={"/blogs"}>Add Blog</Link>
      
    </div>
  )
}

export default Blogs

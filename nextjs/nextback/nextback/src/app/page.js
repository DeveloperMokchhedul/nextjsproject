import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>

      browse our blog collection <br />
      <Link href={"/blogs"}>explore blogs</Link>
      
    </div>
  )
}

export default page

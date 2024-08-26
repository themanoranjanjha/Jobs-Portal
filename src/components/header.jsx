import React from 'react'
import { Link } from "react-router-dom";
import { Button } from './ui/button'
const header = () => {
  return (
    <>
        <nav className='py-4 flex justify-between items-center'>
           <Link>
           <img src="/logo.png" className='h-20' alt="" />
           </Link>
           <Button variant = "outline">Login</Button>
        </nav>
    </>
  )
}
// LcVgM6YxfkWuD1lq
export default header
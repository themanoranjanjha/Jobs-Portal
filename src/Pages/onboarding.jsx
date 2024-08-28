import { useUser } from '@clerk/clerk-react'
import React from 'react'
import {BarLoader} from 'react-spinners'
import { Button } from '@/components/ui/button'

const onboarding = () => {
  const { user, isLoaded } = useUser();
  if (!isLoaded){
    return <BarLoader className='mb-4' width={"100%"} color='#36d7b7' />
  }
  console.log(user);
  
  return (
    <div>
      <h2 className='gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter'>I am a...</h2>
      <div className='mt-16 grid-cols-2 gap-4 w-full md:px-40'>
        <Button variant='blue' className="h-36 text-2xl">
          Candidate</Button>
      </div>
    </div>
  )
}

export default onboarding
import { ArticlesCardsGrid }  from '@/components/card'
import { BackgroundBeam } from '@/components/guidehero'
import React from 'react'


const page = () => {
  return (
    <div className='w-full h-full'>
      <BackgroundBeam />
      <ArticlesCardsGrid guides={[]} /> 
    </div>
  )
}

export default page

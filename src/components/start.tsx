'use client'
import React from 'react'
import FeaturesSection5 from './features-5'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'



const Start = () => {
     const router = useRouter()
   
     const handleClick = () => {
      router.push('/guides');
  }
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">How to Start</h2>
                    <p className="mt-4">Use our hand-picked tools and guides to skip guesswork and grow your channel with confidence.</p>
                </div>
                
               <FeaturesSection5 />

                <div className='flex justify-center mt-8 md:mt-12'>
                        <Button 
                            variant='secondary' 
                            className="flex items-center gap-2 px-6 py-2 text-sm sm:text-base"
                            onClick={handleClick}
                        >
                            Learn More 
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>

    </div>
    </section>
  )
}

export default Start

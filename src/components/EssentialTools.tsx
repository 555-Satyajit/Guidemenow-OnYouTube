'use client'
import React from 'react'
import { CarouselDemo } from './toolcorousel'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const EssentialTools = () => {
    const router = useRouter()
 
   const handleClick = () => {
    router.push('/tools');
}


  return (
      <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Essential Tools</h2>
                    <p className="mt-4">Save hours, level up your content quality, and grow your channel faster with these must-have tools.</p>
                </div>
                
                <CarouselDemo />

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

export default EssentialTools

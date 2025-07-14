import React from 'react'
import { AccordionDemo } from './accord'

const FAQ = () => {
  return (
   
      <section className="bg-zinc-50 py-10 md:py-6 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">FAQs</h2>
                    <p className="mt-4">Frequently Asked Questions</p>
                </div>
                
               < AccordionDemo />
    </div>
    </section>
  
  )
}

export default FAQ

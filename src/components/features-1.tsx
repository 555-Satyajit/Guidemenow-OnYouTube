import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ArrowRight} from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const items = [
    {
        id: 1,
        name: "Microphones",
        desc: "Find the best mics for vlogs, podcasts, voice-overs & more.",
        url: "https://assets-global.website-files.com/634e7aa49f5b025e1fd9e87b/634e7aa49f5b02805ad9ef99_61392af8580c8f7aebbd4d29_Podcast-Microphone-Neil-Godding-for-Unsplash.jpeg"
    },
    {
        id: 2,
        name: "Lighting & Studio Setup",
        desc: "Affordable ring lights to full softbox kits to make your videos pop.",
        url: "https://mimolive.com/wp-content/uploads/2020/12/studio-lights-1024x522.jpeg"
    },
    {
        id: 3,
        name: "Cameras & Lenses",
        desc: "From beginner-friendly cameras to pro DSLR & mirrorless setups.",
        url: "https://petapixel.com/assets/uploads/2023/01/camera-lenses-with-a-lens-cap.jpg"
    },
    {
        id: 4,
        name: "Editing Software & Tools",
        desc: "The top picks for editing your videos, thumbnails & shorts.",
        url: "https://beebom.com/wp-content/uploads/2020/02/Filmora-.jpg?quality=75&strip=all"
    },
    {
        id: 5,
        name: "Music & Effects",
        desc: "Royalty-free music, sound effects, and editing assets.",
        url: "https://th.bing.com/th/id/OIP._PCwKP3TDY-aoUjqOf2-yQHaC1?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 6,
        name: "Grow Your Channel",
        desc: "Tools for SEO, analytics & marketing to get more subscribers.",
        url: "https://www.brandsmartini.com/blog/wp-content/uploads/2022/09/1-1.jpg"
    }
]

export default function Features() {
       const router = useRouter()
     
       const handleClick = () => {
        router.push('/guides');
    }
    return (
        <section className="bg-zinc-50 py-12 md:py-16 lg:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-balance text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
                        Featured Categories
                    </h2>
                    <p className="mt-3 text-sm sm:text-base md:mt-4 text-zinc-600 dark:text-zinc-400">
                        Discover the best content across our most popular topics. Dive in and find what inspires you.
                    </p>
                </div>
                
                <div className="mt-8 md:mt-12 lg:mt-16">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
                        {items.map(item => (
                            <Card key={item.id} className="group shadow-zinc-950/5 hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-3">
                                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                                        <img 
                                            src={item.url} 
                                            alt={item.name}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-center font-medium text-base sm:text-lg">
                                        {item.name}
                                    </h3>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        {item.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    
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
            </div>
        </section>
    )
}


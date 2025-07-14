'use client'
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { supabase } from '@/lib/supabaseClient';
import { Spinner } from './ui/spinner';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

 type Item = {
  id: string; // uuid
  name: string;
  description: string;
  category: string;
  price: string;
  affiliate_link: string;
  image_url: string;
  is_featured: boolean;
  created_at: string; // ISO timestamp
};

const EngagementToolsCard = () => {
    const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);


useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .eq('category', 'Engagement Tools');

      if (error) {
        console.error("Error fetching items:", error);
      } else {
        setItems(data || []);
      }
      setLoading(false);
    };

    fetchItems();
  }, []);
 
  return (
    <div className="bg-black py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Engagement Tools</h1>
        <div className="w-24 h-1 bg-white mx-auto"></div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {loading && <p> <Spinner /> </p>}
        {items.map(item => (
          <Card key={item.id} className="w-80 bg-gray-950 border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <CardHeader className="p-0">
              <div className="h-48 w-full overflow-hidden rounded-t-lg">
                <img 
                  src={item.image_url} 
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300" 
                  alt={item.name} 
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg font-semibold mb-2 text-white">{item.name}</CardTitle>
              <CardDescription className="text-gray-300 text-sm">
                {item.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <span className="text-xl font-bold text-green-400">{item.price}</span>
              <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors font-medium" onClick={() => window.open(item.affiliate_link, '_blank')}>
                View
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
       <HoverCard>
          <HoverCardTrigger asChild>
        <button className="bg-gray-900 border border-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 font-medium" >
          View More Products
        </button>
        </HoverCardTrigger>
         <HoverCardContent>
   We’re just getting started. Stay tuned — we’re working hard behind the scenes to bring you even more amazing products. Check back often to discover what’s new!
  </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  )
}

export default EngagementToolsCard
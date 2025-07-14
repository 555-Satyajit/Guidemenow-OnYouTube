'use client'
import { AspectRatio, Card, Container, SimpleGrid, Text } from '@mantine/core';
import classes from '@/components/ArticlesCardsGrid.module.css';
import { supabase } from '@/lib/supabaseClient';
import { Spinner } from './ui/spinner';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Guide } from '@/app/guides/[slug]/page';

type Item = {
  id: number;
  title: string;
  slug: string;
  content: string;
  category: string;
  image_url: string;
  created_at: string;
};

export function ArticlesCardsGrid({ }: { guides: Guide[] }) {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('guides')
        .select('*')
       
      if (error) {
        console.error("Error fetching items:", error);
      } else {
        console.log("Fetched items:", data);
        setItems(data || []);
      }
      setLoading(false);
    };
    
    fetchItems();
  }, []);

  return (
    <>
      {loading ? (
        <p><Spinner /></p>
      ) : (
        <Container py="xl">
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 0, sm: 'md' }}>
            {items.map((article) => {
              console.log("Article slug:", article.slug);
              return (
                <Link
                  key={article.id}
                  href={`/guides/${article.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Card p="md" radius="md" className={classes.card}>
                    <AspectRatio ratio={1920 / 1080}>
                      <img 
                        src={article.image_url} 
                        alt={article.title}
                        style={{ borderRadius: '8px', width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </AspectRatio>
                    <Text className={classes.date}>{article.created_at}</Text>
                    <Text className={classes.title}>{article.title}</Text>
                  </Card>
                </Link>
              );
            })}
          </SimpleGrid>
        </Container>
      )}
    </>
  );
}
// app/guides/[slug]/page.tsx
'use client'
import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Spinner } from '@/components/ui/spinner';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export type Guide = {
  id: number;
  title: string;
  slug: string;
  content: string;
  category: string;
  image_url: string;
  created_at: string;
};

export default function GuidePage() {
  const params = useParams();
  const [guide, setGuide] = useState<Guide | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuide = async () => {
      if (!params.slug) return;

      setLoading(true);
      const { data, error } = await supabase
        .from('guides')
        .select('*')
        .eq('slug', params.slug)
        .single();

      if (error || !data) {
        console.error('Guide not found:', params.slug, error);
        setError('Guide not found');
      } else {
        setGuide(data);
      }
      setLoading(false);
    };

    fetchGuide();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (error || !guide) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Guide Not Found</h1>
          <p className="text-gray-600">The guide you&aposre looking for doesn&apost exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl py-20 ml-30">
      <h1 className="text-4xl font-bold mb-6 text-left">{guide.title}</h1>
      
      <div className="mb-8">
        <img
          src={guide.image_url} 
          alt={guide.title} 
          width={800}
          height={450}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="mb-8 text-left">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold mb-6 text-white text-left">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-semibold mb-4 text-white mt-8 text-left">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl font-medium mb-3 text-white mt-6 text-left">{children}</h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-xl font-medium mb-2 text-white mt-4 text-left">{children}</h4>
            ),
            h5: ({ children }) => (
              <h5 className="text-lg font-medium mb-2 text-white mt-3 text-left">{children}</h5>
            ),
            h6: ({ children }) => (
              <h6 className="text-base font-medium mb-2 text-white mt-2 text-left">{children}</h6>
            ),
            p: ({ children }) => (
              <p className="text-gray-300 text-lg mb-4 leading-relaxed text-left">{children}</p>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-white">{children}</strong>
            ),
            a: ({ children, href }) => (
              <a href={href} className="text-blue-400 hover:text-blue-300 underline">{children}</a>
            ),
            ul: ({ children }) => (
              <ul className="list-disc ml-6 mb-4 space-y-2 text-left">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal ml-6 mb-4 space-y-2 text-left">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="text-gray-300 text-left">{children}</li>
            ),
            hr: () => (
              <hr className="border-gray-600 my-6" />
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4 text-left">{children}</blockquote>
            ),
            code: ({ children }) => (
              <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-200">{children}</code>
            ),
            pre: ({ children }) => (
              <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4 text-left">{children}</pre>
            ),
            table: ({ children }) => (
              <div className="overflow-x-auto my-6">
                <table className="min-w-full divide-y divide-gray-600 border border-gray-600 rounded-lg">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-gray-800">
                {children}
              </thead>
            ),
            th: ({ children }) => (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-600">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 border-b border-gray-600 text-left">
                {children}
              </td>
            ),
            tr: ({ children }) => (
              <tr className="hover:bg-gray-800 transition-colors">
                {children}
              </tr>
            ),
          }}
        >
          {guide.content}
        </ReactMarkdown>
      </div>

      <div className="border-t border-gray-600 pt-6 mt-8">
        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-800">
            Category: {guide.category}
          </span>
          <span>
            Published on: {new Date(guide.created_at).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
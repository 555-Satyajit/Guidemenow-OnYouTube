"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSearchStore } from '@/stores/useSearchStore';
import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

// Type definitions
interface Guide {
  id: string | number;
  title: string;
  slug: string;
  description?: string;
  category?: string;
}

interface Tool {
  id: string | number;
  name: string;
  slug?: string;
  description?: string;
  category?: string;
  affiliate_link?: string; // Added affiliate_link property
  image_url?: string; // Added image_url property
}

export default function SearchBar() {
  const { search, setSearch } = useSearchStore();
  const router = useRouter();
  const [inputValue, setInputValue] = useState(search || '');
  const [guides, setGuides] = useState<Guide[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Debounce search to avoid too many API calls
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearch(inputValue);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [inputValue, setSearch]);

  useEffect(() => {
    const fetchData = async () => {
      if (!search || search.trim().length < 2) {
        setGuides([]);
        setTools([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const guideQuery = supabase
          .from('guides')
          .select('id, title, slug, category')
          .ilike('title', `%${search}%`);

        console.log('Executing search queries for:', search);

        // Execute guides query first
        const guidesRes = await guideQuery;
        console.log('Guides response:', guidesRes);

        if (guidesRes.error) {
          console.error('Guides query error:', guidesRes.error);
          throw new Error(`Guides query failed: ${guidesRes.error.message || 'Unknown error'}`);
        }

        setGuides(guidesRes.data || []);

        // Try tools query with error handling - now including affiliate_link
        try {
          const toolQuery = supabase
            .from('tools')
            .select('id, name, description, category, affiliate_link, image_url')
            .or(`name.ilike.%${search}%,category.ilike.%${search}%`);

          const toolsRes = await toolQuery;
          console.log('Tools response:', toolsRes);

          if (toolsRes.error) {
            console.error('Tools query error:', toolsRes.error);
            // Don't throw for tools - just log and continue
            console.warn('Tools query failed, continuing with guides only');
            setTools([]);
          } else {
            setTools(toolsRes.data || []);
          }
        } catch (toolErr) {
          console.error('Tools table might not exist:', toolErr);
          setTools([]);
        }

      } catch (err: unknown) {
        console.error('Full error object:', err);
        console.error('Error type:', typeof err);
        console.error('Error constructor:', err?.constructor?.name);
        
        let errorMessage = 'An unknown error occurred';
        
        if (err instanceof Error) {
          errorMessage = err.message;
        } else if (typeof err === 'string') {
          errorMessage = err;
        } else if (err && typeof err === 'object') {
          errorMessage = JSON.stringify(err);
        }
        
        setError(errorMessage);
        console.error('Search error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearch(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setInputValue('');
    setSearch('');
  };

  const handleGuideClick = (guide: Guide) => {
    console.log('Navigating to guide:', guide); // Debug log
    if (guide.slug) {
      router.push(`/guides/${guide.slug}`);
    } else {
      console.error('Guide slug is missing:', guide);
      // Fallback to ID if slug is not available
      router.push(`/guides/${guide.id}`);
    }
  };

  const handleToolClick = (tool: Tool) => {
    console.log('Opening tool affiliate link:', tool); // Debug log
    if (tool.affiliate_link) {
      // Open affiliate link in new tab
      window.open(tool.affiliate_link, '_blank', 'noopener,noreferrer');
    } else {
      console.error('Tool affiliate_link is missing:', tool);
      // Optional: Show an error message to user
      alert('Sorry, this tool link is not available at the moment.');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Input */}
      <div className="flex items-center space-x-2 mb-6">
        <div className="relative flex-1">
          <Input 
            type="text" 
            className="px-3 py-2 pr-10" 
            placeholder="Search guides and tools..." 
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          {inputValue && (
            <button
              onClick={clearSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
        <Button 
          className="px-4 py-2" 
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? (
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          )}
        </Button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          Error: {error}
        </div>
      )}

      {/* Search Results */}
      {search && search.trim().length >= 2 && (
        <div className="space-y-6">
          {/* Loading State */}
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Searching...</p>
            </div>
          )}

          {/* No Results */}
          {!loading && guides.length === 0 && tools.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No results found for "{search}"</p>
            </div>
          )}

          {/* Guides Results */}
          {guides.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Guides ({guides.length})</h3>
              <div className="grid gap-3">
                {guides.map((guide) => (
                  <div 
                    key={guide.id} 
                    className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => handleGuideClick(guide)}
                  >
                    <h4 className="font-medium text-blue-600 hover:text-blue-800">{guide.title}</h4>
                    {guide.description && (
                      <p className="text-sm text-gray-600 mt-1">{guide.description}</p>
                    )}
                    {guide.category && (
                      <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {guide.category}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools Results */}
          {tools.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Tools ({tools.length})</h3>
              <div className="grid gap-4">
                {tools.map((tool) => (
                  <div 
                    key={tool.id} 
                    className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group flex items-start space-x-4"
                    onClick={() => handleToolClick(tool)}
                  >
                    {/* Tool Image */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                      {tool.image_url ? (
                        <img 
                          src={tool.image_url} 
                          alt={tool.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className={`w-full h-full flex items-center justify-center ${tool.image_url ? 'hidden' : ''}`}>
                        <svg 
                          className="w-8 h-8 text-gray-400" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Tool Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-green-600 hover:text-green-800 truncate">{tool.name}</h4>
                        <svg 
                          className="w-4 h-4 text-gray-400 group-hover:text-gray-600 flex-shrink-0 ml-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      {tool.description && (
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{tool.description}</p>
                      )}
                      {tool.category && (
                        <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          {tool.category}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
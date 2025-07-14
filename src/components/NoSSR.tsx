// components/NoSSR.tsx
'use client'
import { useEffect, useState, ReactNode } from 'react';

interface NoSSRProps {
  children: ReactNode;
}

const NoSSR: React.FC<NoSSRProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};

export default NoSSR;

'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState("fadeIn")
  const [currentPath, setCurrentPath] = useState(pathname)

  useEffect(() => {
    if (pathname !== currentPath) {
      setTransitionStage("fadeOut")
    }
  }, [pathname, currentPath])

  useEffect(() => {
    if (transitionStage === "fadeOut") {
      const timeout = setTimeout(() => {
        setDisplayChildren(children)
        setTransitionStage("fadeIn")
        setCurrentPath(pathname)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [transitionStage, children, pathname])

  return (
    <div className={`fade-wrapper ${transitionStage}`}>
      {displayChildren}
    </div>
  )
}
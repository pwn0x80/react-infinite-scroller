import { useCallback, useRef, useState } from "react";

const useScrollFetch = () => {
  const [scrollFetch, setScrollFetch] = useState(true)
  let observerRef = useRef();
  const callbackRef = useCallback(node => {
    if (observerRef.current) observerRef.current.disconnect()
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0]?.isIntersecting) {
        setScrollFetch((boolVal) => !boolVal)
      }
    })
    if (node) observerRef.current.observe(node)
  }, [])

  return {
    callbackRef,
    scrollFetch,
    setScrollFetch
  }
}

export default useScrollFetch

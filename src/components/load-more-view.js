import React, { useEffect } from "react"
const LoadMore = ({ onLoadMore, wrappedId }) => {
  const isBottom = e => {
    return e.getBoundingClientRect().bottom <= window.innerHeight
  }

  const trackScrolling = () => {
    const wrappedElement = document.body
    if (isBottom(wrappedElement)) {
      onLoadMore()
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", trackScrolling)
    return () => {
      document.removeEventListener("scroll", trackScrolling)
    }
  }, [0])
  return <></>
}

export default LoadMore

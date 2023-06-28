'use client'

import { useEffect } from "react"

export default function ScrollToTop() {
  
  useEffect( () => {
  
    window.scrollTo( -10, -10 );
  
  }, [] );

  return <></>;
}
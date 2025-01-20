'use client'
import { useState, useRef } from 'react'

import CartButton from './CartButton/CartButton'
import CartSlide from './CartSlide/CartSlide'

export default function Cart() {
   const [isOpen, setIsOpen] = useState(false)
   const containerRef = useRef<HTMLDivElement>(null)

   const handleOpen = () => {
      setIsOpen((prev) => !prev)
   }

   return (
      <div ref={containerRef}>
         <CartButton handleOpen={handleOpen} />
         <CartSlide containerRef={containerRef} isOpen={isOpen} />
      </div>
   )
}

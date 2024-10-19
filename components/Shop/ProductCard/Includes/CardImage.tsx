'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function CardImage({
   imageSrc,
   typeCode,
   fallbackImage,
}: {
   imageSrc: string
   typeCode: string
   fallbackImage: string
}) {
   const [image, setImage] = useState(imageSrc || fallbackImage)
   return (
      <Image
         style={{ objectFit: 'cover' }}
         height={175}
         width={250}
         src={image}
         alt={typeCode}
         onError={() => setImage(fallbackImage)}
      />
   )
}

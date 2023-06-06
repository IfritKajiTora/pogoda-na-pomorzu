'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import {useRouter} from 'next/navigation'

export default function BackLink() {
  const router = useRouter()

  return (
    <>
    <Link className='backLink' href='/' prefetch={false} onClick={(e) => {
      e.preventDefault() 
      router.back()
    }}>
      <Image src='/arrow-wind.png' width={40} height={40} alt='arrow back to main page'/>
      Powrót
    </Link>
    </>
  )
}

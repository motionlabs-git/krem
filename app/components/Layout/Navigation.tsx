import KremLogo from '@/public/images/brand/KremLogo'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <nav className='fixed w-full left-0 top-0 bg-beige flex justify-between px-4 py-2'>
            <Link href={'/'}>
                <KremLogo
                    width={80}
                    className='text-beigeAccent2 hover:text-brown duration-200'
                />
            </Link>

            <ul className='flex gap-4 items-center font-hostGrotesk'>
                <li className='font-bold font-hostGrotesk'>
                    <Link href={'/'} className='font-hostGrotesk'>
                        Domů
                    </Link>
                </li>

                <li className='font-bold text-base'>
                    <Link href={'/'}>Kontakt</Link>
                </li>
                <li className='font-bold text-base'>
                    <Link href={'/'}>Rezervace</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation

import Link from 'next/link'

const Hero = () => {
    return (
        <section className='h-[calc(100vh-4rem)] py-4'>
            <div className='relative w-full h-full bg-beigeAccent rounded-4xl p-14 overflow-hidden'>
                <video
                    preload='none'
                    aria-label='Video player'
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={'/videos/krem_video.mp4'}
                    className='absolute inset-0 w-full h-full object-cover '
                ></video>
                <div className='absolute inset-0 w-full h-full bg-black/40'></div>

                <div className='relative w-full h-full flex flex-col justify-between'>
                    <h1 className=' text-beige'>
                        U nás si vypneš{' '}
                        <em className='text-yellow'>
                            mobil, <br /> tělo a mysl.
                        </em>
                    </h1>

                    <div className='self-end'>
                        <h1 className='text-beige'>
                            Lorem ipsum dolor sit <br />
                            <Link
                                href={'/'}
                                className='inline-flex items-center font-hostGrotesk px-10 h-[3.5em] bg-beige text-brown uppercase text-base font-light align-bottom rounded-xl'
                            >
                                Vybrat termín
                            </Link>{' '}
                            aklsdjflkasd
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

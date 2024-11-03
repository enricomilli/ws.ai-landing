import { features } from '@/constants/constants'
import Section from '../Section'

const Features = () => {
    return (
        <Section id='how-it-works'>
            <div className='z-2 relative mx-auto flex flex-col items-center justify-center gap-7 lg:px-[4rem]'>
                <h2 className='text-primary-content text-3xl font-semibold'>How it works</h2>
                <div className='mb-10 flex flex-col flex-wrap items-center justify-center gap-10 lg:gap-14 xl:gap-20'>
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className='sm:w-9/10 border-primary-content relative block rounded-xl border-2 md:max-w-[65rem]'
                        >
                            <div
                                className={`flex flex-col-reverse ${
                                    item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                                } z-10 items-center justify-around p-3 md:gap-5 md:p-3 lg:p-7`}
                            >
                                <div className='z-2 relative flex h-fit flex-col p-5 md:min-h-[22rem] md:p-[1.5rem]'>
                                    <h5 className='text-primary-content mb-4 text-xl font-semibold'>{item.title}</h5>
                                    <p className='body-2 mb-6'>{item.text}</p>
                                    <div
                                        className={`hidden items-center md:flex lg:mt-auto ${
                                            item.reverse ? 'md:self-end' : ''
                                        }`}
                                    >
                                        {<item.iconUrl size={40} />}
                                    </div>
                                </div>
                                {item.contentType !== '' && (
                                    <div className='h-full w-full shrink-0 basis-1/2 overflow-hidden rounded-2xl border border-primary-foreground'>
                                        {item.contentType === 'video' && (
                                            <video
                                                preload='metadata'
                                                playsInline
                                                className='z-10 h-full w-full cursor-pointer'
                                                src={item.content}
                                                autoPlay
                                                loop
                                                controls
                                                muted
                                            ></video>
                                        )}
                                        {item.contentType === 'image' && (
                                            <img alt={item.title} src={item.content} className='h-full w-full' />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Features

import { useEffect, useRef, useState } from 'react'
import { ScrollParallax } from 'react-just-parallax'
import Notification from './Notification'
import { HeroContent } from '@/constants/constants'
import Section from '../Section'
import { Link } from '@remix-run/react'
import { Button } from '@/components/ui/button'
import { VideoPopup } from './VideoPopup'
import GetApplicationsSubmitted from '@/api/GetApplicationsSubmitted'
import { Spinner } from '@/components/Loading'
import AnimatedCounter from './AnimatedCounter'

const Hero = () => {
    const parallaxRef = useRef(null)

    return (
        <Section id='hero' customPaddings='py-14 md:pt-28'>
            <div className='relative grid place-content-center place-items-center' ref={parallaxRef}>
                {/* titles */}
                <div className='relative mx-auto flex flex-col items-center justify-center gap-10'>
                    <div className='z-1 relative z-10 text-center'>
                        <NewHeroTitle />
                        <NewBodyText text={HeroContent.callout} />
                        {/* <AnimatedBodyText text={HeroContent.callout} /> */}
                    </div>
                    <AnimatedVideoDiv videoSrc={HeroContent.video} thumbnailSrc={HeroContent.thumbnail} />
                    <NumOfAppsSubmitted />
                    <span className='mx-auto flex flex-row items-center justify-center gap-5'>
                        <Link to='https://app.worksync.ai/purchase' className='h-full w-full'>
                            <Button size={'lg'} className=''>
                                {HeroContent.callToAction}
                            </Button>
                        </Link>
                        <VideoPopup />
                    </span>
                </div>
            </div>
        </Section>
    )
}

export default Hero

const NewHeroTitle = () => {
    return (
        <div className='text-primary-content mx-auto mb-6 max-w-[500px] px-2 text-3xl font-semibold motion-duration-[1.00s]/blur motion-duration-[1.00s]/opacity motion-translate-x-in-[0%] motion-translate-y-in-[-50%] motion-blur-in-[1px] motion-opacity-in-[60%] md:min-w-[500px] md:max-w-[650px] md:px-8 md:text-5xl'>
            {HeroContent.title2}
        </div>
    )
}

const NewBodyText = (props: { text: string }) => {
    const { text } = props

    return (
        <div className='mx-auto mb-6 max-w-[500px] px-3 text-sm motion-duration-1000 motion-delay-500 motion-translate-y-in-[50%] motion-blur-in-[1px] motion-opacity-in-0 md:max-w-[680px] md:px-0 md:text-lg lg:mb-8'>
            {text}
        </div>
    )
}

const AnimatedVideoDiv = (props: { videoSrc: string; thumbnailSrc: string }) => {
    const { videoSrc, thumbnailSrc } = props

    return (
        <div
            className='relative mx-auto flex flex-col px-4 motion-duration-[1500ms] motion-delay-[750ms] motion-ease-out-cubic motion-translate-y-in-[30%] motion-opacity-in-0 md:max-w-6xl md:px-6 lg:mt-[1.5rem]'
        >
            <div className='relative rounded-xl bg-foreground p-[2px]'>
                <div className='relative rounded-xl'>
                    <ScrollParallax isAbsolutelyPositioned>
                        <Notification
                            className='absolute bottom-[5rem] -z-10 hidden w-[18rem] lg:-right-[3rem] lg:flex xl:-right-[6rem]'
                            title='New Job Offer!'
                        />
                    </ScrollParallax>

                    <div className='z-20 overflow-hidden rounded-xl'>
                        <video
                            preload='metadata'
                            className='z-50 h-full w-full cursor-pointer overflow-hidden object-cover'
                            autoPlay
                            loop
                            src={videoSrc}
                            poster={thumbnailSrc}
                            controls={true}
                        >
                            <track kind='captions' src='empty.vtt' label='English' />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

const NumOfAppsSubmitted = () => {
    const [appsSubmitted, setAppsSubmitted] = useState(0)

    useEffect(() => {
        (async () => {
            const res = await GetApplicationsSubmitted()
            setAppsSubmitted(res)
        })()
    }, [])

    return (
        <div className='mx-auto flex flex-col items-center justify-center gap-2 text-xl'>
            <span>Number of Job Apps Submitted:</span>
            <span className='font-semibold'>
                {appsSubmitted > 0 && <AnimatedCounter from={0} to={appsSubmitted} />}
                {appsSubmitted < 1 && <Spinner size={4} />}
            </span>
        </div>
    )
}

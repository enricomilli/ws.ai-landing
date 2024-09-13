import { useEffect, useRef, useState } from "react";
import { ScrollParallax } from "react-just-parallax";
import Notification from "./Notification";
import { HeroContent } from "@/constants/constants";
import Section from "../Section";
import { Link } from "@remix-run/react";
import { Button } from "@/components/ui/button";
import { VideoPopup } from "./VideoPopup";
import { motion } from "framer-motion";
import GetApplicationsSubmitted from "@/api/GetApplicationsSubmitted";
import { Spinner } from "@/components/Loading";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
    const parallaxRef = useRef(null);

    return (
        <Section
            id="hero"
            customPaddings="py-14 md:pt-28">
            <div
                className="relative grid place-content-center place-items-center"
                ref={parallaxRef}>
                {/* titles */}
                <div className="relative flex flex-col items-center mx-auto justify-center gap-10">
                    <div className="relative z-1 text-center z-10">
                        {/* <AnimatedText
                            once
                            text={HeroContent.headline}
                            el="p"
                            className="text-h1 font-semibold mb-6 px-8 md:px-0 md:min-w-[550px] max-w-[900px] mx-auto text-primary-content"
                        /> */}
                        <AnimatedHeroTitle />
                        <AnimatedBodyText text={HeroContent.callout} />
                    </div>
                    <AnimatedVideoDiv
                        videoSrc={HeroContent.video}
                        thumbnailSrc={HeroContent.thumbnail}
                    />
                    <NumOfAppsSubmitted />
                    <span className="mx-auto flex flex-row items-center justify-center gap-5">
                        <Link
                            to="https://app.worksync.ai/purchase" className="w-full h-full">
                            <Button
                                size={"lg"}
                                className="">
                                {HeroContent.callToAction}
                            </Button>
                        </Link>
                        <VideoPopup />
                    </span>
                </div>
            </div>
        </Section>
    );
};

export default Hero;

// props: { title: string }
// const { title } = props;
const AnimatedHeroTitle = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "anticipate" }}
            className="text-3xl md:text-5xl px-2 md:px-8 font-semibold mb-6 md:min-w-[550px] max-w-[500px] md:max-w-[750px] mx-auto text-primary-content ">
            <div className="flex flex-col gap-2 items-center justify-center">
                <span className="flex flex-row gap-2 md:gap-4 items-center justify-center">Ready to find a job? 💼</span>
                <span>Meet the AI✨ solution that requires minimum effort. </span>
            </div>
        </motion.div>
    );
};
// <motion.div
//   initial={{ opacity: 0, y: 0 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 1, bounce: true, delay: 0.5 }}>
//   <SparklesIcon
//     size={40}
//     className="absolute hidden md:flex -top-12 -right-2 "
//   />
// </motion.div>
// {title}

const AnimatedBodyText = (props: { text: string }) => {
    const { text } = props;
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "anticipate", delay: 0.2 }}
            className="text-sm md:text-lg mx-auto px-3 md:px-0 mb-6 lg:mb-8 max-w-[500px] md:max-w-[680px]">
            {text}
        </motion.div>
    );
};

const AnimatedVideoDiv = (props: { videoSrc: string, thumbnailSrc: string }) => {
    const { videoSrc, thumbnailSrc } = props;

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: "anticipate", delay: 0.65 }}
            className="relative flex flex-col mx-auto md:max-w-6xl px-4 md:px-6 lg:mt-[1.5rem]">
            <div className="relative p-[2px] bg-foreground rounded-xl">
                <div className="relative rounded-xl">
                    <ScrollParallax isAbsolutelyPositioned>
                        <Notification
                            className="hidden absolute lg:-right-[3rem] xl:-right-[6rem] bottom-[5rem] w-[18rem] lg:flex -z-10"
                            title="New Job Offer!"
                        />
                    </ScrollParallax>

                    <div className="rounded-xl overflow-hidden z-20">
                        <video
                            preload="metadata"
                            className="w-full h-full object-cover cursor-pointer overflow-hidden z-50"
                            autoPlay
                            loop
                            src={videoSrc}
                            poster={thumbnailSrc}
                            controls={true}>
                            <track
                                kind="captions"
                                src="empty.vtt"
                                label="English"
                            />
                        </video>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};


const NumOfAppsSubmitted = () => {

    const [appsSubmitted, setAppsSubmitted] = useState(0)

    useEffect(() => {
        (async () => {
            const res = await GetApplicationsSubmitted()
            setAppsSubmitted(res)
        })()
    }, [])

    return (
        <div className="mx-auto flex flex-col gap-2 items-center justify-center text-xl">
            <span>
                Number of Job Apps Submitted:
            </span>
            <span className="font-semibold">
                {appsSubmitted > 0 && <AnimatedCounter from={0} to={appsSubmitted} />}
                {appsSubmitted < 1 && <Spinner size={4} />}
            </span>
        </div>
    )
}

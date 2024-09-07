import { useMotionValue, animate, motion } from "framer-motion";
import { reviews } from "@/constants/constants";
import ReviewCard from "./ReviewCard";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";

import OutGoingLinkIcon from "@/assets/svg/OutGoingLink";
import { Button } from "@/components/ui/button";
import Section from "../Section";

const Reviews = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const FAST_DURATION = 35;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls.stop;
  }, [xTranslation, width, duration, rerender, mustFinish]);

  return (
    <Section
      className="flex flex-col items-center justify-center gap-10"
      id="reviews">
      <h3 className="text-2xl font-semibold text-primary-content text-center">
        More satisfied customers:
      </h3>
      <div className="container h-fit min-h-[200px] md:min-h-[210px]">
        <motion.div
          className="absolute flex gap-4 left-0 "
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
          ref={ref}
          style={{ x: xTranslation }}>
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard
              review={review}
              key={index}
            />
          ))}
        </motion.div>
      </div>
      <a
        className="flex -mt-2"
        href="https://chromewebstore.google.com/detail/worksyncai-browser-extens/fhgalfkajbagfafnfofdkpamchjhfgce?hl=en"
        target="_blank"
        rel="noopener noreferrer">
        <Button size={"lg"} className="w-full h-full gap-2">
          <span>See all reviews</span>
          <OutGoingLinkIcon stroke="currentColor" />
        </Button>
      </a>
    </Section>
  );
};

export default Reviews;

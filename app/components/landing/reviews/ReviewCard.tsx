import { useState } from "react";
import OutGoingLinkIcon from "@/assets/svg/OutGoingLink";
import RatingStars from "./Stars";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const ReviewCard = ({ review }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="card bg-primary-foreground/40 border border-primary-foreground rounded-2xl shadow-xl w-[300px] md:w-96 md:py-1 relative overflow-hidden"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="absolute bg-primary/50 pointer-events-none opacity-50 w-full h-full" />
            <motion.a
              href="https://chromewebstore.google.com/detail/worksyncai-browser-extens/fhgalfkajbagfafnfofdkpamchjhfgce?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-content font-semibold text-sm z-10 h-fit py-3 px-4 rounded-full flex items-center gap-[0.5ch] hover:opacity-90 cursor-pointer"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}>
              <Button className="w-full h-full gap-2">
                <span className="text-secondary-content">See all reviews</span>
                <OutGoingLinkIcon stroke={"currentColor"} />
              </Button>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="card-body flex flex-col gap-2 p-5 md:px-8">
        <div className="flex flex-row justify-between items-center">
          <span className="text-xl">{review.name}</span>
          <span>
            <RatingStars stars={review.stars} />
          </span>
        </div>
        <div className="">{review.reviewText}</div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;

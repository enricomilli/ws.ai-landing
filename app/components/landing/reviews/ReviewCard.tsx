import { useState } from 'react'
import OutGoingLinkIcon from '@/assets/svg/OutGoingLink'
import RatingStars from './Stars'

import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const ReviewCard = ({ review }) => {
    const [showOverlay, setShowOverlay] = useState(false)

    return (
        <motion.div
            className='card relative w-[300px] overflow-hidden rounded-2xl border border-primary-foreground bg-primary-foreground/40 shadow-xl md:w-96 md:py-1'
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)}
        >
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        className='absolute inset-0 z-10 flex items-center justify-center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className='pointer-events-none absolute h-full w-full bg-primary/50 opacity-50' />
                        <motion.a
                            href='https://chromewebstore.google.com/detail/worksyncai-browser-extens/fhgalfkajbagfafnfofdkpamchjhfgce?hl=en'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-neutral-content z-10 flex h-fit cursor-pointer items-center gap-[0.5ch] rounded-full px-4 py-3 text-sm font-semibold hover:opacity-90'
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            exit={{ y: 10 }}
                        >
                            <Button className='h-full w-full gap-2'>
                                <span className='text-secondary-content'>See all reviews</span>
                                <OutGoingLinkIcon stroke={'currentColor'} />
                            </Button>
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className='card-body flex flex-col gap-2 p-5 md:px-8'>
                <div className='flex flex-row items-center justify-between'>
                    <span className='text-xl'>{review.name}</span>
                    <span>
                        <RatingStars stars={review.stars} />
                    </span>
                </div>
                <div className=''>{review.reviewText}</div>
            </div>
        </motion.div>
    )
}

export default ReviewCard

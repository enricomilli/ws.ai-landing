import { HeroProofContent } from '@/constants/constants'
import Section from '../Section'
import RatingStars from '../reviews/Stars'

const HeroProof = () => {
    return (
        <Section>
            <div className='not-hero flex flex-col items-center justify-center gap-10'>
                <h3 className='text-primary-content -mb-5 text-center text-3xl font-semibold md:mb-0'>
                    {HeroProofContent.caseTitle}
                </h3>
                <div className='w-full rounded-2xl border border-primary-foreground bg-primary-foreground/40 p-10 shadow-xl md:w-[35rem]'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='h-fit w-fit self-center overflow-hidden rounded-full'>
                            <img src={HeroProofContent.personImg} alt='user profile' width={140} height={140} />
                        </div>
                        <h2 className='flex flex-row flex-nowrap items-center gap-3'>
                            <span>{HeroProofContent.name}</span>
                            <div className='rating'>
                                <RatingStars stars={HeroProofContent.stars} />
                            </div>
                        </h2>
                        <p className='mx-auto'>{HeroProofContent.comment}</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default HeroProof

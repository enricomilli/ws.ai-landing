import { ScrollParallax } from 'react-just-parallax'
import { useState } from 'react'
import Section from '../Section'
import { WeeklyPriceCard, MonthlyPriceCard } from './PriceCards'
import PricingToggle from './PriceToggle'
import StarsBg from '@/assets/svg/StarsBg'

const Pricing = () => {
    const [weeklyPricing, setWeeklyPricing] = useState(true)

    const handleToggle = () => {
        setWeeklyPricing(!weeklyPricing)
    }

    return (
        <Section id='pricing'>
            <div className='z-2 relative w-full py-20'>
                <div className='pointer-events-none relative mb-[6.5rem] flex justify-center lg:flex'>
                    <ScrollParallax isAbsolutelyPositioned>
                        <div className='z-1 pointer-events-none absolute left-1/2 top-[40%] w-[60rem] -translate-x-1/2 -translate-y-1/2'>
                            <StarsBg />
                        </div>
                    </ScrollParallax>
                </div>

                <div className='relative -mt-20 flex flex-col items-center justify-center gap-10'>
                    <PricingToggle handleToggle={handleToggle} weeklyPricing={weeklyPricing} />
                    {weeklyPricing && <WeeklyPriceCard />}
                    {!weeklyPricing && <MonthlyPriceCard />}
                </div>
            </div>
        </Section>
    )
}

export default Pricing

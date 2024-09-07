import { ScrollParallax } from "react-just-parallax";
import { useState } from "react";
import Section from "../Section";
import { WeeklyPriceCard, MonthlyPriceCard } from "./PriceCards";
import PricingToggle from "./PriceToggle";
import StarsBg from "@/assets/svg/StarsBg";

const Pricing = () => {
    const [weeklyPricing, setWeeklyPricing] = useState(true);

    const handleToggle = () => {
        setWeeklyPricing(!weeklyPricing);
    };

    return (
        <Section id="pricing">
            <div className="w-full relative z-2 py-20">
                <div className="flex relative justify-center mb-[6.5rem] lg:flex pointer-events-none">
                    <ScrollParallax isAbsolutelyPositioned>
                        <div className="absolute top-[40%] z-1 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <StarsBg />
                        </div>
                    </ScrollParallax>
                </div>

                <div className="relative flex flex-col gap-10 items-center justify-center -mt-20">
                    <PricingToggle
                        handleToggle={handleToggle}
                        weeklyPricing={weeklyPricing}
                    />
                    {weeklyPricing && <WeeklyPriceCard />}
                    {!weeklyPricing && <MonthlyPriceCard />}
                </div>
            </div>
        </Section>
    );
};

export default Pricing;

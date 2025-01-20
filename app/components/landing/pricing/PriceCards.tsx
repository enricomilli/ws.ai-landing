import React from 'react'
import { Link } from '@remix-run/react'
import { Check } from 'lucide-react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { weeklyPricing, monthlyPricing } from '@/constants/constants'

interface PricingItem {
    id: string
    title: string
    description: string
    price: string | null
    priceDescription?: string
    hasPriceDesc: boolean
    buttonText: string
    url: string
    features: string[]
}

interface PriceCardProps {
    item: PricingItem
}

const PriceCard: React.FC<PriceCardProps> = ({ item }) => {
    return (
        <Card className='h-full max-w-[39rem] p-3 max-lg:w-full lg:w-auto'>
            <CardHeader>
                <CardTitle className='text-primary-content'>{item.title}</CardTitle>
                <CardDescription className='text-primary-content/90 max-w-[400px]'>
                    {item.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className='mb-3 flex h-[5.5rem] items-center'>
                    {item.price !== null && (
                        <>
                            <span className='text-3xl'>$</span>
                            <span className='text-[4.0rem] font-bold leading-none md:text-[4.5rem]'>
                                {item.price}
                            </span>
                            {item.hasPriceDesc && (
                                <span className='ml-1 text-xl md:text-2xl'>
                                    {item.priceDescription}
                                </span>
                            )}
                        </>
                    )}
                </div>

                {/* <Link to={item.url}> */}
                <Button disabled size={'lg'} className={`mb-7 w-full`}>
                    {/* {item.buttonText} */}
                    Coming Soon
                </Button>
                {/* </Link> */}

                <ul className='space-y-4'>
                    {item.features.map((feature, index) => (
                        <li
                            key={index}
                            className='border-n-6 flex items-center justify-start border-t pt-4'
                        >
                            <Check className='mr-4 mt-1' size={24} />
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

interface PricingCardsProps {
    pricingData: PricingItem
}

const PricingCards: React.FC<PricingCardsProps> = ({ pricingData }) => {
    return (
        <>
            <PriceCard key={pricingData.id} item={pricingData} />
        </>
    )
}

export const WeeklyPriceCard: React.FC = () => (
    <PricingCards pricingData={weeklyPricing} />
)

export const MonthlyPriceCard: React.FC = () => (
    <PricingCards pricingData={monthlyPricing} />
)

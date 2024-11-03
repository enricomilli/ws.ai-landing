import { FAQsContent } from '@/constants/constants'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Link } from '@remix-run/react'

const FAQs = () => {
    return (
        <div className='mx-auto mb-20 flex w-full flex-col items-center justify-center gap-5 px-6 pb-10 md:w-3/4 xl:w-1/2'>
            <h2 className='mb-2 text-center text-3xl font-semibold'>Frequently Asked Questions</h2>
            <Accordion type='single' collapsible className='w-full'>
                {FAQsContent.map((FAQ, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className='text-left text-xl'>{FAQ.question}</AccordionTrigger>
                        <AccordionContent>{FAQ.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className='mt-2 flex flex-col flex-nowrap items-center justify-center gap-1 text-center md:flex-row md:text-left'>
                Didn&apos;t find the answer you were looking for?{' '}
                <Link to='mailto:info@worksync.ai' className='underline'>
                    Contact us
                </Link>
            </div>
        </div>
    )
}

export default FAQs

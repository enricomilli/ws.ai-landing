import { FAQsContent } from "@/constants/constants";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@remix-run/react";
import { Button } from "@/components/ui/button";

const FAQs = () => {
    return (
        <div className="w-full md:w-3/4 xl:w-1/2 mx-auto px-8 flex flex-col gap-5 mb-20 justify-center items-center pb-10">
            <h2 className="text-3xl font-semibold mb-2 text-center">Frequently Asked Questions</h2>
            <Accordion
                type="single"
                collapsible
                className="w-full">
                {FAQsContent.map((FAQ, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}>
                        <AccordionTrigger className="text-xl">{FAQ.question}</AccordionTrigger>
                        <AccordionContent>{FAQ.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className="mt-2 flex flex-row flex-nowrap items-center justify-center gap-1">
                Didn&apos;t find the answer you were looking for?{" "}
                <Link
                    to="mailto:info@worksync.ai"
                    className="hover:underline">
                    <Button
                        variant={"ghost"}
                        className="flex flex-row gap-2 flex-nowrap font-medium">
                        Contact us
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default FAQs;
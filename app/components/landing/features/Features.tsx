import { features } from "@/constants/constants";
import Section from "../Section";

const Features = () => {
    return (
        <Section id="how-it-works">
            <div className="mx-auto relative z-2 lg:px-[4rem] flex flex-col justify-center items-center gap-7">
                <h2 className="text-3xl font-semibold text-primary-content">How it works</h2>
                <div className="flex flex-col items-center flex-wrap gap-10 mb-10 justify-center lg:gap-14 xl:gap-20">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="block relative sm:w-9/10 md:max-w-[65rem] border-2 border-primary-content rounded-xl">
                            <div
                                className={`flex flex-col-reverse ${
                                    item.reverse ? "md:flex-row-reverse" : "md:flex-row"
                                } items-center justify-around p-3 md:p-3 lg:p-7 z-10 md:gap-5`}>
                                <div className="relative z-2 flex flex-col md:min-h-[22rem] p-5 md:p-[1.5rem] h-fit">
                                    <h5 className="text-xl font-semibold mb-4 text-primary-content">
                                        {item.title}
                                    </h5>
                                    <p className="body-2 mb-6">{item.text}</p>
                                    <div
                                        className={`items-center hidden md:flex lg:mt-auto ${
                                            item.reverse ? "md:self-end" : ""
                                        }`}>
                                        {<item.iconUrl size={40} />}
                                    </div>
                                </div>
                                {item.contentType !== "" && (
                                    <div className="h-full w-full border-primary-foreground border overflow-hidden rounded-2xl shrink-0 basis-1/2">
                                        {item.contentType === "video" && (
                                            <video
                                                preload="metadata"
                                                playsInline
                                                className="w-full h-full cursor-pointer z-10"
                                                src={item.content}
                                                autoPlay
                                                loop
                                                controls
                                                muted></video>
                                        )}
                                        {item.contentType === "image" && (
                                            <img
                                                alt={item.title}
                                                src={item.content}
                                                className="h-full w-full"
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Features;

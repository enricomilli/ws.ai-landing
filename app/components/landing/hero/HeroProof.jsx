import { HeroProofContent } from "@/constants/constants";
import Section from "../Section";
import RatingStars from "../reviews/Stars";

const HeroProof = () => {
    return (
        <Section>
            <div className="flex flex-col justify-center items-center gap-10 ">
                <h3 className="text-3xl font-semibold text-primary-content text-center -mb-5 md:mb-0">
                    {HeroProofContent.caseTitle}
                </h3>
                <div className="w-full md:w-[35rem] border border-primary-foreground rounded-2xl shadow-xl p-10 bg-primary-foreground/40">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="h-fit w-fit rounded-full overflow-hidden self-center">
                            <img
                                src={HeroProofContent.personImg}
                                alt="user profile"
                                width={140}
                                height={140}
                            />
                        </div>
                        <h2 className="flex flex-row flex-nowrap gap-3 items-center">
                            <span>{HeroProofContent.name}</span>
                            <div className="rating">
                                <RatingStars stars={HeroProofContent.stars} />
                            </div>
                        </h2>
                        <p className="mx-auto">{HeroProofContent.comment}</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default HeroProof;

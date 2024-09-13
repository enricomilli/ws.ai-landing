import { socials } from "@/constants/constants";
import Section from "./Section";
import { Link } from "@remix-run/react";
import WSIcon from "@/assets/svg/WSIcon";

const Footer = () => {
    return (
        <Section
            crosses
            className={`px-14 md:px-24 lg:px-32 !py-10 `}>
            <div className="w-full mx-auto flex sm:justify-between justify-center items-center gap-10 max-sm:gap-6 max-sm:flex-col-reverse">
                <p className="flex flex-row flex-nowrap w-[300px] justify-start items-center gap-5">
                    <WSIcon className="h-10 w-10 fill-current" />
                    © {new Date().getFullYear()} All rights reserved.
                </p>

                <div className="flex flex-row gap-5 w-[300px] justify-center items-center">
                    <Link
                        to="/privacy-policy"
                        className="caption lg:block hover:underline">
                        Privacy Policy
                    </Link>

                    <div className="divider divider-horizontal"></div>
                    <Link
                        to="/terms-of-service"
                        className="caption lg:block hover:underline">
                        Terms Of Service
                    </Link>
                </div>

                <ul className={`flex gap-5 flex-wrap w-[300px] items-end justify-end`}>
                    {socials.map((item) => (
                        <Link
                            to={item.url}
                            key={item.id}
                            className="flex flex-row flex-nowrap gap-2 items-baseline justify-center hover:underline"
                            target="_blank"
                            rel="noreferrer">
                            Contact us
                            <item.iconUrl
                                height={16}
                                width={16}
                            />
                        </Link>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Footer;

import { socials } from "@/constants/constants";
import Section from "./Section";
import { Link, Links } from "@remix-run/react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <Section
      crosses
      className={`px-14 md:px-24 lg:px-32 !py-10 `}>
      <div className="w-full mx-auto flex sm:justify-between justify-center items-center gap-10 max-sm:gap-6 max-sm:flex-col-reverse">
        <p className="caption lg:block">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <div className="flex flex-row gap-5 ">
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

        <ul className={`flex gap-5 flex-wrap`}>
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

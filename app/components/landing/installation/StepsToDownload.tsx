import { motion } from "framer-motion";
import Section from "../Section";
import { Link } from "@remix-run/react";
import { installStep } from "@/constants/constants";
import { Button } from "@/components/ui/button";
import { Bot, Download, FolderUp, HandCoins } from "lucide-react";

const StepsToDownload = () => {
  const iconSize = 30
  return (
    <Section
      crosses={true}
      id="how-it-works"
      className="z-10">
      <div className="mx-auto flex flex-col-reverse lg:flex-row md:items-center justify-around gap-5">
        <div>
          <h1 className="text-3xl font-semibold mb-8">Its as easy as</h1>
          <ul className="w-full max-w-[900px] h-[400px] flex flex-col gap-10 justify-start place-items-start">
            <motion.li
              className="flex flex-row flex-nowrap gap-4 items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.2,
              }}
              viewport={{
                once: true,
              }}>
              <Download size={iconSize} />
              <div className="text-left">
                <h3 className="text-xl font-medium">1. Install Extension</h3>
                <p className="body-2 w-full">Download from Chrome Web Store</p>
              </div>
            </motion.li>
            <motion.li
              className="flex flex-row flex-nowrap gap-4 items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.4,
              }}
              viewport={{
                once: true,
              }}>
              <FolderUp size={iconSize} />
              <div className="text-left">
                <h3 className="text-xl font-medium">2. Upload CV</h3>
                <p className="body-2 w-full">
                  Assists A.I. in writing relevant responses
                </p>
              </div>
            </motion.li>
            <motion.li
              className="flex flex-row flex-nowrap gap-4 items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.6,
              }}
              viewport={{
                once: true,
              }}>
              <Bot size={iconSize} />
              <div>
                <h3 className="text-xl font-medium">3. Start Worksync.AI</h3>
                <p className="body-2 w-full">
                  Watch as your applications begin to be automated!
                </p>
              </div>
            </motion.li>
            <motion.li
              className="flex flex-row flex-nowrap gap-4 items-center justify-center"
              data-content="✓"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.8,
              }}
              viewport={{
                once: true,
              }}>
              <HandCoins size={iconSize} />
              <div className="text-left">
                <h3 className="text-xl font-medium">4. Job Offers Received!</h3>
                <p className="body-2 w-full">Get a nice return on your investment</p>
              </div>
            </motion.li>
            <Link to="https://www.worksync.ai/purchase" className="w-full md:w-fit">
              <Button size={"lg"}>Try it now</Button>
            </Link>
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden max-w-[700px] h-auto border border-primary-foreground">
          <video
            src={installStep.video}
            className="w-full z-10 "
            autoPlay
            playsInline
            controls
            loop>
            <track
              kind="captions"
              src="empty.vtt"
              label="English"
            />
          </video>
        </div>
      </div>
    </Section>
  );
};

export default StepsToDownload;

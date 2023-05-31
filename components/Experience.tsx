import { motion } from "framer-motion";
import {ExperienceCard} from "@/components/ExperienceCard";

export const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className="flex flex-col pt-20 overflow-hidden text-center max-w-7xl h-screen px-10 justify-evenly items-center mx-auto"
        >
            <div className="flex flex-col gap-10">
                <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
                    Experience
                </h3>

                <p className="max-w-[600px] text-base"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>


            <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory">
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
            </div>
        </motion.div>
    )
}
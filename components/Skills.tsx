import {SkillGrid} from "@/components/SkillGrid";
import { motion } from "framer-motion";

type Props = {}
export const Skills = ({}: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className="flex flex-col justify-evenly items-center md:text-left max-w-[2000px] xl:px-10 min-h-screen xl:space-y-8 mx-auto"
        >
            <div className="flex flex-col gap-5 text-center">
                <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl"> Skills </h3>
                <h3 className="uppercase tracking-[3px] text-gray-500 text-sm"> Hover over a skill for currency proficiency </h3>
            </div>


            <div className="grid grid-cols-4 gap-5">
                <SkillGrid directionLeft={true}/>
                <SkillGrid directionLeft={true}/>
                <SkillGrid directionLeft={false}/>
                <SkillGrid directionLeft={false}/>
                <SkillGrid directionLeft={true}/>
                <SkillGrid directionLeft={true}/>
                <SkillGrid directionLeft={false}/>
                <SkillGrid directionLeft={false}/>
                <SkillGrid directionLeft={true}/>
                <SkillGrid directionLeft={true}/>
                <SkillGrid directionLeft={false}/>
                <SkillGrid directionLeft={false}/>
                <SkillGrid directionLeft={true}/>
                <SkillGrid directionLeft={true}/>
                <SkillGrid directionLeft={false}/>
                <SkillGrid directionLeft={false}/>
            </div>
        </motion.div>
    )
}
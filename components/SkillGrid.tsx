import { motion } from "framer-motion";

import placeholder from "../public/placeholder.png"

type Props = {
    directionLeft?: boolean
}
export const SkillGrid = ({ directionLeft }: Props) => {
    return (
        <div className="group flex cursor-pointer relative">
            <motion.img
                initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
                transition={{ duration: Math.random() * 1.8 }}
                whileInView={{ x: 0, opacity: 1 }}

                src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg"
                className="w-24 h-24 group relative flex cursor-pointer rounded-full object-cover filter border border-gray-500 group-hover:grayscale transition duration-300 ease-in-out"
            />

            <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-in-out w-24 h-24 z-0 rounded-full">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100"> 100% </p>
                </div>
            </div>
        </div>
    )
}
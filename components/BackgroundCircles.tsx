import { motion } from "framer-motion";

export const BackgroundCircles = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                scale: [1, 1.4, 1.4, 1.6, 1.1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ['20%', '20%', '50%', '80%', '20%']
            }}
            transition={{ duration: 2.5 }}

            className="relative flex justify-center items-center">
            <div className="absolute border border-[#333333] opacity-50 rounded-full h-[350px] w-[350px] mt-96 animate-ping"/>
            <div className="absolute border border-[#333333] opacity-50 rounded-full h-[500px] w-[500px] mt-96"/>
            <div className="absolute border border-[#F7AB0A] rounded-full h-[650px] w-[650px] mt-96 opacity-100 animate-pulse"/>
            <div className="absolute border border-[#333333] opacity-50 rounded-full h-[800px] w-[800px] mt-96"/>
        </motion.div>
    )
}
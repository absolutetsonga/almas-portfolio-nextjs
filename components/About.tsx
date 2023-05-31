import { motion } from "framer-motion";
export const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className="flex flex-col justify-evenly relative h-screen text-center md:text-left max-w-7xl pt-20 px-10 md:px-20 mx-auto">
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl"> About </h3>

            <div className="flex flex-col items-center md:flex-row gap-4 md:gap-12">
                <motion.img
                    src={`https://i.guim.co.uk/img/media/59c1b14b1677cc33e27967cf6b11c8fd99a93761/0_105_1080_648/master/1080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=655a8ae5af42857c3b3b576d8e922139`}
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.2 }}
                    className="flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-96 md:w-80 xl:w-[500px] xl:h-[600px]"
                />

                <div className="space-y-10 px-0">
                    <h4 className="text-4xl font-semibold">
                        Here is a <span className="underline decoration-[#F7AB0A]/50"> little </span> background
                    </h4>
                    <p className="text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>

        </motion.div>
    )
}
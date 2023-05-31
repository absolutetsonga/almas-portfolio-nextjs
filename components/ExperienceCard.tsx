import { motion } from "framer-motion";
export const ExperienceCard = () => {
    return (
        <article
            className="flex flex-col gap-4 rounded-lg items-center flex-shrink-0 w-[300px] sm:w-[500px]
                md:w-[600px] xl:w-[900px] snap-center bg-[#292929] cursor-pointer opacity-60
                hover:opacity-100 transition-opacity duration-200 overflow-hidden p-4 sm:p-10"
        >

            
            <div className="flex flex-col gap-4 sm:gap-10 text-left">
                <div className="flex flex-col sm:flex-row gap-8">
                    <motion.img
                        initial={{ y: -100, opacity: 0}}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true}}
                        transition={{ duration: 1.2 }}

                        src={`https://whey.kz/wp-content/uploads/2020/11/placeholder.png`}
                        alt=""

                        className="w-32 h-32 rounded-full xl:min-w-[200px] xl:min-h-[200px] object-cover object-center"
                    />

                    <div className="flex flex-col justify-around gap-1 sm:gap-0">
                        <h4 className="text-2xl xl:text-4xl font-light"> CEO of Model United Nations </h4>
                        <p className="font-bold text-xl"> MUN </p>
                        <p className="uppercase text-gray-300"> Started work... - Ended... </p>
                    </div>
                </div>
                
                <ul className="space-y-4 ml-5 text-lg">
                    <li className="before:content-['✅'] before:mr-2"> Summary points Summary points Summary points </li>
                    <li className="before:content-['✅'] before:mr-2"> Summary points Summary points Summary points </li>
                    <li className="before:content-['✅'] before:mr-2"> Summary points Summary points Summary points </li>
                </ul>
            </div>
        </article>
    )
}
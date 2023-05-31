import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "@/components/BackgroundCircles";
import Image from "next/image";
import human from "../public/hero-photo.png"
import Link from "next/link";

type Props = {};
export const Hero = ({}: Props) => {
    const [text, count] = useTypewriter({
        words: ['Hi! My name\'s Almas!', 'I am NIS School student', 'I like to learn new things!', 'I support LGBTQ+!'],
        loop: true,
        delaySpeed: 1000
    });

    return (
        <div className="h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles/>
            <Image
                src={human}
                alt="Hero Photo"
                width={192}
                height={192}
                className="relative rounded-full h-48 w-48 mx-auto object-cover p-2 bg-[#333444]"
            />

            <div className="z-20">
                <h2 className="text-lg uppercase text-gray-500 font-bold py-3 tracking-[10px]"> Almas Issakov </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A"/>
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="hero-button"> About </button>
                    </Link>

                    <Link href="#experience">
                        <button className="hero-button"> Experience </button>
                    </Link>

                    <Link href="#skills">
                        <button className="hero-button"> Skills </button>
                    </Link>

                    <Link href="#projects">
                        <button className="hero-button"> Projects </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
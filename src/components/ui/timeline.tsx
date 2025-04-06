import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

const ACCENT_COLOR_FROM = "rgb(220 38 38)"; // red-600
const ACCENT_COLOR_VIA = "rgb(239 68 68)"; // red-500

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setHeight(rect.height);
            }
        };
        handleResize(); 

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [ref, data]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 15%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    const lineLeftPosition = "left-[35px]";
    const lineLeftPositionMd = "md:left-[50px]";


    return (
        <div
            className="w-full bg-black text-neutral-300 font-sans" 
            ref={containerRef}
        >
            <div ref={ref} className="relative max-w-4xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-16 md:gap-8 lg:gap-24" 
                    >
                        <div className="sticky top-40 self-start z-10 flex items-start md:items-center flex-shrink-0 w-[80px] md:w-[100px]"> 


                            <div className="relative flex-shrink-0 h-10 w-10 mr-3 md:mr-0 rounded-full bg-black border-2 border-neutral-800 flex items-center justify-center"> 
                                <div className="h-3 w-3 rounded-full bg-neutral-700 border border-neutral-600 p-1" />
                            </div>

                            <h3 className="hidden md:block text-base lg:text-lg font-semibold text-neutral-500 md:pl-4 "> 
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-4 md:pl-0 w-full">
                             <h3 className="md:hidden block text-base mb-3 text-left font-semibold text-neutral-400">
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}

                {/* Animated Line */}
                 <div
                     style={{
                         height: height ? `${height}px` : 'auto',
                     }}
                     className={`absolute top-0 ${lineLeftPosition} ${lineLeftPositionMd} w-[2px] bg-neutral-800 overflow-hidden`}
                 >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                            backgroundImage: `linear-gradient(to top, ${ACCENT_COLOR_FROM}, ${ACCENT_COLOR_VIA} 50%, transparent 100%)`,
                        }}
                        className="absolute inset-x-0 top-0 w-full rounded-full"
                    />
                 </div>
            </div>
        </div>
    );
};
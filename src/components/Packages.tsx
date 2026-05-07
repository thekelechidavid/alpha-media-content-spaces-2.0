"use client"

import Image from "next/image";
import { CircleStar, Check } from "lucide-react";
import { scrollToId } from "@/utils/ScrollToId";

const Packages = () => {
    return (
        <section className="mt-16 md:mt-22 mx-auto scroll-mt-22" id="membership">
            <div className="max-w-6xl mx-auto px-3 h-full flex flex-col gap-8 md:gap-12">
                <div className="flex flex-col gap-4 px-2">
                    <h2 className="text-my-black text-4xl md:text-6xl font-bold">Packages</h2>
                    <p className="text-lg max-w-xl">Scalable investment tiers for every stage of your creative evolution.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                    
                    {/* Starter */}
                    <div className="relative p-6 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 hover:shadow-md hover:ring-my-blue/60 transition-all duration-300">
                        <div className="p-3 rounded-2xl bg-my-gray/10 w-max">
                            <Image src="/images/start.png" alt="" width={28} height={28} />
                        </div>
                        <h3 className="font-bold text-2xl text-my-black">Starter</h3>
                        <p className="text-sm text-my-gray">For early-stage creators ready to step into a structured production space.</p>
                        <div className="flex flex-col gap-3 my-2">
                            {["One Wall Background Access", "Tripod setup", "Microphone for clear audio", "Ring light setup"].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="bg-my-green w-max p-1 rounded-full"><Check size={10} className="text-white" /></div>
                                    <p className="text-[13px]">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-4 border-t border-my-gray/10">
                            <p className="text-[10px] text-my-gray font-bold uppercase">Best For</p>
                            <p className="text-[12px] leading-tight mt-1">Simple talking videos, practice shoots, and entry-level content creation.</p>
                        </div>
                        <p className="text-my-black mt-4 text-3xl font-bold">₦25,000 <span className="text-my-gray text-xs font-normal">/ Hour</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-black ring-1 ring-my-black/10 w-full rounded-full p-3 bg-my-gray/5 hover:bg-my-black hover:text-white transition-all duration-300">Inquire Now</button>
                    </div>

                    {/* Creator */}
                    <div className="relative p-6 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 hover:shadow-md hover:ring-my-blue/60 transition-all duration-300">
                        <div className="p-3 rounded-2xl bg-orange-100 w-max">
                            <Image src="/images/medal.png" alt="" width={28} height={28} />
                        </div>
                        <h3 className="font-bold text-2xl text-my-black">Creator</h3>
                        <p className="text-sm text-my-gray">For creators ready to produce professional-looking content consistently.</p>
                        <div className="flex flex-col gap-3 my-2">
                            {["Full Room Access", "Everything in Starter", "Professional camera for high-quality visuals", "Ideal for controlled, single-environment shoots"].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="bg-my-green w-max p-1 rounded-full"><Check size={10} className="text-white" /></div>
                                    <p className="text-[13px]">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-4 border-t border-my-gray/10">
                            <p className="text-[10px] text-my-gray font-bold uppercase">Best For</p>
                            <p className="text-[12px] leading-tight mt-1">YouTube videos, brand content, and social media authority building.</p>
                        </div>
                        <p className="text-my-black mt-4 text-3xl font-bold">₦80,000 <span className="text-my-gray text-xs font-normal">/ Hour</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-black ring-1 ring-my-black/10 w-full rounded-full p-3 bg-my-gray/5 hover:bg-my-black hover:text-white transition-all duration-300">Inquire Now</button>
                    </div>

                    {/* Professional - Best Value */}
                    <div className="relative p-6 rounded-4xl ring-2 ring-my-blue flex flex-col gap-4 shadow-xl shadow-my-blue/10 scale-105 z-10 bg-white transition-all duration-300">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-my-blue text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">Best Value</div>
                        <div className="p-3 rounded-2xl bg-blue-50 w-max">
                            <Image src="/images/wand.png" alt="" width={28} height={28} />
                        </div>
                        <h3 className="font-bold text-2xl text-my-black">Professional</h3>
                        <p className="text-sm text-my-gray">For individuals building a serious brand presence with variety.</p>
                        <div className="flex flex-col gap-3 my-2">
                            {["2 Room Access", "Everything in Creator", "Content consultation", "Dynamic angles across two studio environments"].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="bg-my-green w-max p-1 rounded-full"><Check size={10} className="text-white" /></div>
                                    <p className="text-[13px]">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-4 border-t border-my-gray/10">
                            <p className="text-[10px] text-my-gray font-bold uppercase">Best For</p>
                            <p className="text-[12px] leading-tight mt-1">Thought leaders, coaches, and experts building authority-driven content.</p>
                        </div>
                        <p className="text-my-blue mt-4 text-3xl font-bold">₦100,000 <span className="text-my-gray text-xs font-normal">/ Hour</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-white w-full rounded-full p-3 bg-my-blue hover:bg-my-blue/90 transition-all duration-300 shadow-lg shadow-my-blue/30">Select Alpha</button>
                    </div>

                    {/* Enterprise */}
                    <div className="relative p-6 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 hover:shadow-md hover:ring-my-blue/60 transition-all duration-300">
                        <div className="p-3 rounded-2xl bg-purple-100 w-max">
                            <CircleStar size={28} className="text-purple-500" />
                        </div>
                        <h3 className="font-bold text-2xl text-my-black">Enterprise</h3>
                        <p className="text-sm text-my-gray">For teams and organizations requiring the ultimate studio experience.</p>
                        <div className="flex flex-col gap-3 my-2">
                            {["All Room Access (Full Studio)", "Everything in Professional", "Multiple microphones (for group recordings)", "Multi-camera setup (for multiple angles)"].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="bg-my-green w-max p-1 rounded-full"><Check size={10} className="text-white" /></div>
                                    <p className="text-[13px]">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-auto pt-4 border-t border-my-gray/10">
                            <p className="text-[10px] text-my-gray font-bold uppercase">Best For</p>
                            <p className="text-[12px] leading-tight mt-1">Panel discussions, interviews, corporate content, and large-scale production.</p>
                        </div>
                        <p className="text-my-black mt-4 text-3xl font-bold">₦150,000 <span className="text-my-gray text-xs font-normal">/ Hour</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-black ring-1 ring-my-black/10 w-full rounded-full p-3 bg-my-gray/5 hover:bg-my-black hover:text-white transition-all duration-300">Inquire Now</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Packages;

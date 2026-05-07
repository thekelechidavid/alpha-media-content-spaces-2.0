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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                    
                    {/* Starter Tier */}
                    <div className="relative p-6 md:p-10 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 md:gap-5 hover:shadow-md hover:ring-my-blue/60 hover:shadow-my-gray/20 transition-all duration-300 group">
                        <div className="p-4 rounded-3xl bg-my-green/15 w-max">
                            <Image src="/images/start.png" alt="" width={35} height={35} />
                        </div>
                        <h3 className="font-bold text-3xl text-my-black">Starter</h3>
                        <p>For early-stage creators ready to step into a structured production space.</p>
                        <div className="flex flex-col gap-3 mt-2">
                            {[
                                "Clean Wall Background",
                                "Tripod setup",
                                "Microphone for clear audio",
                                "Ring light setup"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="bg-my-green w-max p-1 rounded-2xl">
                                        <Check size={13} className="text-white" />
                                    </div>
                                    <p className="text-[15px]">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1 mt-auto">
                            <p className="text-sm text-my-gray/80 uppercase tracking-wider">Best For</p>
                            <p className="font-semibold text-sm">Simple talking videos, practice shoots, and entry-level content.</p>
                        </div>
                        <p className="text-my-black mt-4 text-4xl font-bold">₦40k<span className="text-my-gray text-base font-normal">/session</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-white hover:text-my-black hover:ring hover:ring-my-black w-full rounded-full p-3 bg-my-black hover:bg-my-white transition-colors duration-300">Inquire Now</button>
                    </div>

                    {/* Creator Tier */}
                    <div className="relative p-6 md:p-10 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 md:gap-5 hover:shadow-md hover:ring-my-blue/60 hover:shadow-my-gray/20 transition-all duration-300 group">
                        <div className="p-4 rounded-3xl bg-my-blue/10 w-max">
                            <Image src="/images/medal.png" alt="" width={35} height={35} />
                        </div>
                        <h3 className="font-bold text-3xl text-my-black">Creator</h3>
                        <p>For creators ready to produce professional-looking content consistently.</p>
                        <div className="flex flex-col gap-3 mt-2">
                            {[
                                "Everything in Starter",
                                "Professional camera for high-quality visuals",
                                "Custom Lighting setup"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="bg-my-green w-max p-1 rounded-2xl">
                                        <Check size={13} className="text-white" />
                                    </div>
                                    <p className="text-[15px]">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1 mt-auto">
                            <p className="text-sm text-my-gray/80 uppercase tracking-wider">Best For</p>
                            <p className="font-semibold text-sm">YouTube videos, brand content, and authority building.</p>
                        </div>
                        <p className="text-my-black mt-4 text-4xl font-bold">₦100k<span className="text-my-gray text-base font-normal">/session</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-white hover:text-my-black hover:ring hover:ring-my-black w-full rounded-full p-3 bg-my-black hover:bg-my-white transition-colors duration-300">Inquire Now</button>
                    </div>

                    {/* Professional Tier */}
                    <div className="relative p-6 md:p-10 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 md:gap-5 hover:shadow-md hover:ring-my-blue/60 hover:shadow-my-gray/20 transition-all duration-300 group border-2 border-my-blue/20">
                        <div className="p-4 rounded-3xl bg-yellow-100 w-max">
                            <Image src="/images/wand.png" alt="" width={35} height={35} />
                        </div>
                        <h3 className="font-bold text-3xl text-my-black">Professional</h3>
                        <p>For individuals building a high-end, serious brand presence.</p>
                        <div className="flex flex-col gap-3 mt-2">
                            {[
                                "Everything in Creator",
                                "Content consultation & direction",
                                "Advanced audio (Lavalier/Boom mics)",
                                "Basic editing (titles/cuts)"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="bg-my-green w-max p-1 rounded-2xl">
                                        <Check size={13} className="text-white" />
                                    </div>
                                    <p className="text-[15px]">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1 mt-auto">
                            <p className="text-sm text-my-gray/80 uppercase tracking-wider">Best For</p>
                            <p className="font-semibold text-sm">Thought leaders, coaches, and expert authority content.</p>
                        </div>
                        <p className="text-my-black mt-4 text-4xl font-bold">₦200k<span className="text-my-gray text-base font-normal">/session</span></p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-white hover:text-my-black hover:ring hover:ring-my-black w-full rounded-full p-3 bg-my-black hover:bg-my-white transition-colors duration-300">Inquire Now</button>
                    </div>

                    {/* Enterprise / Custom Tier */}
                    <div className="relative p-6 md:p-10 rounded-4xl ring ring-my-gray/20 flex flex-col gap-4 md:gap-5 hover:shadow-md hover:ring-my-blue/60 hover:shadow-my-gray/20 transition-all duration-300 group">
                        <div className="p-4 rounded-3xl bg-purple-100 w-max">
                            <CircleStar size={35} className="text-purple-500" />
                        </div>
                        <h3 className="font-bold text-3xl text-my-black">Enterprise</h3>
                        <p>Tailored solutions for teams, brands, and large-scale media houses.</p>
                        <div className="flex flex-col gap-3 mt-2">
                            {[
                                "Multi-camera & Multi-mic setups",
                                "Full production crew support",
                                "Premium post-production & VFX",
                                "Monthly content planning"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="bg-my-green w-max p-1 rounded-2xl">
                                        <Check size={13} className="text-white" />
                                    </div>
                                    <p className="text-[15px]">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-1 mt-auto">
                            <p className="text-sm text-my-gray/80 uppercase tracking-wider">Best For</p>
                            <p className="font-semibold text-sm">Panel discussions, corporate series, and media houses.</p>
                        </div>
                        <p className="text-my-black mt-4 text-4xl font-bold">Bespoke</p>
                        <button onClick={() => scrollToId('booking')} className="font-semibold text-my-white hover:text-my-black hover:ring hover:ring-my-black w-full rounded-full p-3 bg-my-black hover:bg-my-white transition-colors duration-300">Contact Us</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Packages;

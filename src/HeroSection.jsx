import Frame from './assets/hero-removebg-preview.png';

export default function HeroSection() {
    return (
        <section className="pt-20 pb-[114px] md:mt-[100px]">
            <div className="container lg:px-20">
                <div className="grid items-center gap-6 md:grid-cols-2">
                    <div className="flex justify-center md:order-2">
                        <img
                            className="max-md:w-full"
                            src={Frame}
                            width="400"
                            height="400"
                            alt="frame"
                        />
                    </div>
                    <div>
                        <h1 className="mb-1.5 text-[56px] leading-none font-bold text-[#00BFFF] lg:text-[73px]">
                            Task Master
                        </h1>
                        <p className="my-2 text-lg opacity-60">
                            Effortlessly Organize, Prioritize, and Conquer Tasks
                            with Tasker - Your Personal Productivity Ally for
                            Seamless Goal Achievement and Stress-Free Task
                            Management.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

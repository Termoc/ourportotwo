const image = {
    url: "https://i.pinimg.com/736x/be/a3/49/bea3491915571d34a026753f4a872000.jpg",
    alt: "profiles"
}

const Hero = () => {
    return (
        <>
            <section id="home" className="min-h-screen bg-black text-white flex items-center justify-center px-6 pt-20">
                <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Left Text */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                                Hi, I'm <span className="text-blue-400 glow-text">John Doe</span>
                                <br />
                                <span className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
                                    Full Stack Developer
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Crafting digital experiences with code and creativity
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 pt-4">
                            <a 
                                href="#contact" 
                                className="btn-primary bg-blue-600 text-white px-8 py-4 rounded-full border border-blue-600 hover:bg-black hover:text-blue-600 transition duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 font-medium text-lg"
                            >
                                Hire Me
                            </a>
                            <a 
                                href="/cv.pdf" 
                                download 
                                className="btn-primary text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 font-medium text-lg"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-2xl scale-110"></div>
                            <img
                                src={image.url}
                                alt="Profile"
                                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-600/30 shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;

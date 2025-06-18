
const image = {
    url: "https://i.pinimg.com/736x/be/a3/49/bea3491915571d34a026753f4a872000.jpg",
    alt:  "profiles"
}

const Hero = () => {
    return (
        <>
            <section id="home" className="min-h-screen bg-black text-white flex items-center justify-center px-6">
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Left Text */}
                    <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-normal mb-4">
                        Hi, I'm <span className="text-blue-400">John Doe</span> Full Stack Developer
                    </h1>
                    <p className="text-gray-400 mb-5">Crafting figital experiences with code and creativity</p>

                    <div className="flex justify-center md:justify-start gap-4">
                        <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full border border-blue-600 hover:bg-black hover:text-blue-600 transition duration-300 hover:shadow-lg hover:shadow-blue-500/70 hover:scale-105">
                        Hire Me
                        </a>
                        <a href="/cv.pdf" download className="text-blue-600 border border-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transitionn duration-300 hover:shadow-lg hover:shadow-blue-500/70 hover:scale-105">
                        Download CV
                        </a>
                    </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex justify-center">
                    <img
                        src={image.url}
                        alt="Profile"
                        className="w-85 h-85 rounded-full object-cover"
                    />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;

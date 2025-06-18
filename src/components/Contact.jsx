import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Get in <span className="text-blue-400">Touch</span>
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT: Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p>contact@johndoe.dev</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <a href="#" className="border border-blue-600 p-3 rounded-full hover:bg-blue-600 transition w-auto h-auto duration-300">
              <FaGithub className="w-7 h-7 items-center"/>
            </a>
            <a href="#" className="border border-blue-600 p-3 rounded-full hover:bg-blue-600 transition w-auto h-auto duration-300">
              <FaLinkedin className="w-7 h-7 items-center"/>
            </a>
            <a href="#" className="border border-blue-600 p-3 rounded-full hover:bg-blue-600 transition w-auto h-auto duration-300">
              <FaTwitter className="w-7 h-7 items-center"/>
            </a>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div>
          <form className="flex flex-col gap-6 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black border border-blue-700 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-black border border-blue-700 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="bg-black border border-blue-700 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

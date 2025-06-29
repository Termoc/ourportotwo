import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get in <span className="text-blue-600 glow-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Contact Info */}
          <div className="space-y-8">
            <div className="border border-blue-600/30 bg-gradient-to-br from-black/50 to-gray-900/30 rounded-2xl p-8 backdrop-blur-sm card-hover">
              <h3 className="text-2xl font-semibold text-blue-300 mb-8 flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-600/30 group-hover:bg-blue-600/30 transition-all duration-300">
                    <FaEnvelope className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:contact@johndoe.dev" className="text-lg hover:text-blue-400 transition-colors duration-300">
                      contact@johndoe.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center border border-green-600/30 group-hover:bg-green-600/30 transition-all duration-300">
                    <FaPhone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-lg hover:text-green-400 transition-colors duration-300">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center border border-purple-600/30 group-hover:bg-purple-600/30 transition-all duration-300">
                    <FaMapMarkerAlt className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-lg">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-800/50">
                <p className="text-gray-400 mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 border border-blue-600/30 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
                  >
                    <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"/>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 border border-blue-600/30 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
                  >
                    <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"/>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 border border-blue-600/30 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
                  >
                    <FaTwitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="border border-blue-600/30 bg-gradient-to-br from-black/50 to-gray-900/30 rounded-2xl p-8 backdrop-blur-sm card-hover">
            <h3 className="text-2xl font-semibold text-blue-300 mb-8 flex items-center gap-3">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Send Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-black/50 border border-gray-700/50 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 placeholder:text-gray-500"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-black/50 border border-gray-700/50 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 placeholder:text-gray-500"
                  />
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-black/50 border border-gray-700/50 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 placeholder:text-gray-500"
                />
              </div>
              
              <div className="relative">
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full bg-black/50 border border-gray-700/50 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 placeholder:text-gray-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-lg hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
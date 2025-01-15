const Footer = () => {
    return (
      <footer className="bg-primary text-supporting py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm leading-relaxed">
                Discover and enjoy a vast collection of books from different genres.
                Our platform is dedicated to book enthusiasts, offering easy access
                to your favorite reads and categories.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-supporting transition duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-supporting transition duration-200"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-supporting transition duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-supporting transition duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm">
                Email:{" "}
                <a
                  href="mailto:info@example.com"
                  className="hover:text-supporting transition duration-200"
                >
                  info@example.com
                </a>
              </p>
              <p className="text-sm">Phone: +123 456 789</p>
              <div className="flex items-center space-x-4 mt-4">
                <a
                  href="#"
                  className="bg-white text-primary p-2 rounded-full hover:bg-supporting hover:text-white transition duration-200"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="bg-white text-primary p-2 rounded-full hover:bg-supporting hover:text-white transition duration-200"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="bg-white text-primary p-2 rounded-full hover:bg-supporting hover:text-white transition duration-200"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Divider and Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} hr-shelfy. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
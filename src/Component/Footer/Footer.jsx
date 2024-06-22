import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10  bg-blue-800 bg-opacity-60 text-primary-content">
        <aside>
          <p className="font-bold">
            Asset Each Private Limited
            <br />
            Providing reliable tech since 2024.
          </p>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaTwitter className="text-3xl" />
            </a>
            <a>
              <FaGithub className="text-3xl"></FaGithub>
            </a>
            <a>
              <FaFacebook className="text-3xl" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

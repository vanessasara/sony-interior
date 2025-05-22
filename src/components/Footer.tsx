import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcDiscover,
  FaCreditCard,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primaryDark text-lightOrange py-[5vh] px-[2vw] sm:px-[4vw] lg:px-[8vw] mt-[10vh] text-[1vw] uppercase">
      <div className="flex flex-col sm:flex-row justify-between gap-[4vw]">
        {/* Left: Logo, Contact, Social */}
        <div className="w-full sm:w-1/3 flex flex-col gap-[2vh]">
          <Link href="/">
            <div className="text-[5vw] font-bold tracking-wide">
              SONY INTERIOR
            </div>
          </Link>
          <p>3252 Winding Way, Willowbrook, CA 90210</p>
          <span className="font-semibold">studio@sonyinterior.com</span>
          <span className="font-semibold">+1 234 567 890</span>
          <div className="flex gap-[1vw] text-[2vw]">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaPinterestP />
            <FaTwitter />
          </div>
        </div>

        {/* Center: Newsletter */}
        <div className="w-full sm:w-1/3 flex flex-col gap-[2vh] mt-[4vh] sm:mt-0">
          <h2 className="font-medium text-[3vw]">GET INSPIRED</h2>
          <p>Join our mailing list for design tips and updates.</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-[1vh] w-3/4 text-primaryDark text-[1vw]"
            />
            <button className="w-1/4 bg-primary text-primaryDark font-semibold text-[1vw]">
              JOIN
            </button>
          </div>
        </div>

        {/* Right: Payments */}
        <div className="w-full sm:w-1/3 flex flex-col gap-[2vh] mt-[4vh] sm:mt-0">
          <h2 className="font-medium text-[3vw]">SECURE PAYMENTS</h2>
          <div className="flex justify-between text-[2vw]">
            <FaCcDiscover />
            <FaCreditCard />
            <FaCcPaypal />
            <FaCcMastercard />
            <FaCcVisa />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-center mt-[4vh]">
        <p>© 2024 Sony Interior. All rights reserved.</p>
      </div>
    </footer>
  );
}
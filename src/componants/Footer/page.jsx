import Image from "next/image";
import Link from "next/link";
import footerImg from "@/assets/logo-xl.png";
import FbImg from "@/assets/facebook.png";
import InsImg from "@/assets/instagram.png";
import TwImg from "@/assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white px-6 py-12 md:py-16">
      {/* Main Content: Logo, Text, and Socials */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8">
        <Image
          src={footerImg}
          width={300}
          height={100}
          alt="footer logo"
          className="w-48 md:w-64 lg:w-72 object-contain"
        />

        <p className="text-base md:text-lg opacity-90 max-w-2xl leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <nav>
          <h4 className="text-lg md:text-xl font-semibold mb-4 opacity-100">
            Social Links
          </h4>
          <div className="flex items-center justify-center gap-6 md:gap-8">
            <Link
              href="#"
              className="transition-all hover:scale-110 active:scale-95"
            >
              <Image src={FbImg} width={36} height={36} alt="facebook" />
            </Link>
            <Link
              href="#"
              className="transition-all hover:scale-110 active:scale-95"
            >
              <Image src={InsImg} width={36} height={36} alt="instagram" />
            </Link>
            <Link
              href="#"
              className="transition-all hover:scale-110 active:scale-95"
            >
              <Image src={TwImg} width={36} height={36} alt="twitter" />
            </Link>
          </div>
        </nav>
      </div>

      {/* Bottom Bar: Copyright and Policy Links */}
      <div className="mt-12 border-t border-white/10 pt-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-60">
          <p>
            © {new Date().getFullYear()} - All rights reserved by Keen Keeper
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 transition-all">
            <Link href="#" className="hover:text-white hover:opacity-100">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white hover:opacity-100">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white hover:opacity-100">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

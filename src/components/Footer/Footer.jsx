import Image from "next/image";
import Link from "next/link";
import footerImg from "@/assets/logo-xl.png";
import FbImg from "@/assets/facebook.png";
import InsImg from "@/assets/instagram.png";
import TwImg from "@/assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-neutral text-white/90 px-6 py-16 md:py-24 border-t border-white/5">
      <div className="container mx-auto">
        {/* Main Content: Logo, Text, and Socials */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-10">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src={footerImg}
              width={320}
              height={100}
              alt="Keen Keeper"
              className="w-48 md:w-64 lg:w-72 object-contain brightness-0 invert"
            />
          </Link>

          <p className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed font-medium">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <nav className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/30">
              Social Links
            </h4>
            <div className="flex items-center justify-center gap-8">
              {[
                { src: FbImg, alt: "facebook" },
                { src: InsImg, alt: "instagram" },
                { src: TwImg, alt: "twitter" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-300"
                >
                  <Image src={social.src} width={24} height={24} alt={social.alt} className="opacity-70 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom Bar: Copyright and Policy Links */}
        <div className="mt-20 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold uppercase tracking-widest text-white/20">
            <p>
              © {new Date().getFullYear()} — Keen Keeper. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                <Link key={item} href="#" className="hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


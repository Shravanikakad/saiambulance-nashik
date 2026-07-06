import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-white">

      {/* Glow */}
      <div className="absolute -top-32 left-0 w-80 h-80 bg-red-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 blur-[150px]" />

      {/* Top Border */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 py-10 md:py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ================= Logo ================= */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/images/sai-ambulance-logo.png"
                alt="Sai Ambulance"
                width={78}
                height={78}
                className="w-22 h-22 md:w-26 md:h-26 object-contain"
              />

              <div>

                <h2 className="text-2xl md:text-3xl font-bold leading-none">
                  Sai Ambulance
                </h2>

                <p className="text-red-500 text-xl md:text-2xl font-bold mt-1">
                  Nashik
                </p>

              </div>

            </div>

            <p className="mt-5 text-gray-400 leading-7 text-sm md:text-base">
              10+ Years of trusted ambulance service in Nashik and across India.
            </p>

            <p className="mt-3 text-gray-300 text-sm">
              Fast <span className="text-red-500">•</span> Reliable{" "}
              <span className="text-red-500">•</span> 24×7 Service
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="https://www.instagram.com/sai_ambulance_nsk?igsh=ZXNwODczNWJmd3k="
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-zinc-900 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 flex items-center justify-center transition"
              >
                IG
              </a>

              <a
                href="https://wa.me/919766940298"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-zinc-900 hover:bg-green-600 flex items-center justify-center transition"
              >
                <MessageCircle size={20} />
              </a>

            </div>

          </div>

          {/* ================= Links ================= */}

          <div>

            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <div className="w-12 h-1 bg-red-500 rounded-full mt-2 mb-5" />

            <div className="space-y-3">

              {[
                ["Home", "#home"],
                ["Services", "#services"],
                ["About Us", "#about"],
                ["Reviews", "#reviews"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (

                <Link
                  key={name}
                  href={link}
                  className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition hover:translate-x-1"
                >
                  <ChevronRight size={16} />
                  {name}
                </Link>

              ))}

            </div>

          </div>

          {/* ================= Services ================= */}

          <div>

            <h3 className="text-xl font-bold">
              Services
            </h3>

            <div className="w-12 h-1 bg-red-500 rounded-full mt-2 mb-5" />

            <div className="space-y-3">

              {[
                "ICU Ambulance",
                "Emergency Ambulance",
                "Patient Transport",
                "Oxygen Ambulance",
                "Dead Body Transport",
              ].map((item) => (

                <p
                  key={item}
                  className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition hover:translate-x-1 cursor-pointer"
                >
                  <ChevronRight size={16} />
                  {item}
                </p>

              ))}

            </div>

          </div>

          {/* ================= Contact ================= */}

          <div>

            <h3 className="text-xl font-bold">
              Contact
            </h3>

            <div className="w-12 h-1 bg-red-500 rounded-full mt-2 mb-5" />

            <div className="space-y-4">

              <a
                href="tel:+919766940298"
                className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition"
              >
                <Phone className="text-red-500" size={18} />
                +91 97669 40298
              </a>

              <a
                href="tel:+919096455468"
                className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition"
              >
                <Phone className="text-red-500" size={18} />
                +91 90964 55468
              </a>

              <a
                href="https://wa.me/919766940298"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition"
              >
                <MessageCircle className="text-green-500" size={18} />
                WhatsApp
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-red-500" size={18} />
                Nashik, Maharashtra
              </div>

              <a
                href="mailto:saiambulance@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition break-all"
              >
                <Mail className="text-red-500" size={18} />
                saiambulance@gmail.com
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-zinc-800 mt-8 pt-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-gray-500 text-sm text-center">
              © 2026 Sai Ambulance Nashik
            </p>

            <p className="text-gray-500 text-sm text-center">
              Designed with ❤️ for Emergency Healthcare
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}
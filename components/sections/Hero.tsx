"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
} from "../animations/animations";
import {
  Phone,
  MessageCircle,
  Clock3,
  Ambulance,
  Users,
  BadgeCheck,
  MapPinned,
} from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* ============================================================
          MOBILE / TABLET HERO  (image on top, content sheet below)
          Visible only below the md breakpoint
      ============================================================= */}

      <section
        id="home"
        className="md:hidden bg-white pt-4 pb-6"
      >
        <div className="px-4">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative rounded-[28px] overflow-hidden shadow-md bg-gray-50"
          >

            {/* Image */}

            <div className="relative h-[260px] w-full">

              <Image
                src="/images/ambulance.jpeg"
                alt="Sai Ambulance Nashik"
                fill
                priority
                className="object-cover object-center"
              />

              <motion.div
                variants={fadeUp}
                className="absolute top-3 left-3"
              >
                <span className="bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md whitespace-nowrap">
                  🚑 24×7 Emergency Service
                </span>
              </motion.div>

            </div>

            {/* Content sheet — overlaps the bottom of the image */}

            <div className="relative z-10 -mt-6 rounded-t-[28px] bg-gray-50 px-5 pt-7 pb-6">

              <motion.h1
                variants={fadeUp}
                className="text-3xl font-bold leading-tight text-gray-900"
              >
                24/7 Ambulance Service
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-3 text-sm text-gray-600"
              >
                Fast, Reliable & Emergency Medical Transport
                Available Anytime Across Nashik.
              </motion.p>

              {/* Buttons */}

              <motion.div
                variants={fadeUp}
                className="mt-5 flex flex-col gap-3"
              >

                <a
                  href="tel:+919766940298"
                  className="
                  btn-premium
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  py-3.5
                  rounded-xl
                  font-semibold
                  text-sm
                  flex
                  justify-center
                  items-center
                  gap-2
                  shadow-lg
                  shadow-red-600/20
                  "
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919766940298?text=Emergency%20Ambulance%20Required"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  btn-premium
                  bg-green-500
                  hover:bg-green-600
                  text-white
                  py-3.5
                  rounded-xl
                  font-semibold
                  text-sm
                  flex
                  justify-center
                  items-center
                  gap-2
                  shadow-lg
                  shadow-green-500/20
                  "
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

              </motion.div>

              {/* Stats */}

              <motion.div
                variants={fadeUp}
                className="mt-6 pt-5 border-t border-gray-200"
              >

                <div className="grid grid-cols-3 gap-x-2 gap-y-4">

                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <Clock3 className="text-red-600" size={20} />
                    <span className="text-[11px] font-medium text-gray-700 leading-tight">24/7 Service</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <BadgeCheck className="text-red-600" size={20} />
                    <span className="text-[11px] font-medium text-gray-700 leading-tight">Trained Staff</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <Ambulance className="text-red-600" size={20} />
                    <span className="text-[11px] font-medium text-gray-700 leading-tight">20+ Ambulances</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <MapPinned className="text-red-600" size={20} />
                    <span className="text-[11px] font-medium text-gray-700 leading-tight">PAN India</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 text-center">
                    <Users className="text-red-600" size={20} />
                    <span className="text-[11px] font-medium text-gray-700 leading-tight">5000+ Families</span>
                  </div>

                </div>

              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* ============================================================
          DESKTOP HERO — unchanged, original overlay design
          Visible only at md breakpoint and up
      ============================================================= */}

      <section className="hidden md:block bg-white pt-4 pb-6">
        <div className="w-full px-4 md:px-5">

          <div className="relative h-[650px] rounded-[30px] overflow-hidden">

            {/* Background Image */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/resize ambulance.png"
                alt="Sai Ambulance Nashik"
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* ==========================
                HERO CONTENT
            =========================== */}

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="
                absolute
                inset-0
                z-10
                flex
                flex-col
                justify-center
                items-start
                text-left
                px-16
              "
            >

              {/* Badge */}

              <motion.div
                variants={fadeUp}
                className="mb-5"
              >
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🚑 24×7 Emergency Ambulance Service
                </span>
              </motion.div>

              {/* Heading */}

              <motion.h1
                variants={fadeUp}
                className="text-6xl lg:text-7xl font-bold leading-tight text-white"
              >
                24/7 Ambulance
                <br />
                Service
              </motion.h1>

              {/* Subtitle */}

              <motion.p
                variants={fadeUp}
                className="mt-5 text-2xl text-gray-100 max-w-xl"
              >
                Fast, Reliable & Emergency Medical Transport
                Available Anytime Across Nashik.
              </motion.p>

              {/* Buttons */}

              <motion.div
                variants={fadeUp}
                className="mt-8 flex gap-4"
              >

                <a
                  href="tel:+919766940298"
                  className="
                  btn-premium
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  flex
                  justify-center
                  items-center
                  gap-2
                  shadow-lg
                  shadow-red-600/20
                  hover:shadow-red-600/40
                  "
                >
                  <Phone size={20} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919766940298?text=Emergency%20Ambulance%20Required"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  btn-premium
                  bg-green-500
                  hover:bg-green-600
                  text-white
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  flex
                  justify-center
                  items-center
                  gap-2
                  shadow-lg
                  shadow-green-500/20
                  hover:shadow-green-500/40
                  "
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>

              </motion.div>

            </motion.div>

            {/* ==========================
                STATS BAR
            =========================== */}

            <div className="absolute bottom-6 left-6 right-6 z-10">

              <div className="bg-black/70 backdrop-blur-md rounded-3xl p-6 border border-white/10">

                <div className="grid grid-cols-5 gap-6 text-white text-base">

                  <div className="flex items-center gap-2">
                    <Clock3 className="text-red-500" size={18} />
                    <span>24/7 Service</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <BadgeCheck className="text-red-500" size={18} />
                    <span>Trained Staff</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Ambulance className="text-red-500" size={18} />
                    <span>20+ Ambulances</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPinned className="text-red-500" size={18} />
                    <span>PAN India</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="text-red-500" size={18} />
                    <span>5000+ Families</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
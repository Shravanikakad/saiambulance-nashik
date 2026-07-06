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
    <section
      id="home"
      className="bg-white pt-4 pb-6"
    >
      <div className="w-full px-4 md:px-5">

        <div className="relative h-[560px] md:h-[650px] rounded-[30px] overflow-hidden">

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
              items-center
              md:items-start
              text-center
              md:text-left
              px-6
              md:px-16
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
              className="
                text-4xl
                sm:text-5xl
                md:text-7xl
                font-bold
                leading-tight
                text-white
              "
            >
              24/7 Ambulance
              <br />
              Service
            </motion.h1>

            {/* Subtitle */}

            <motion.p
              variants={fadeUp}
              className="
                mt-5
                text-base
                sm:text-lg
                md:text-2xl
                text-gray-100
                max-w-xl
              "
            >
              Fast, Reliable & Emergency Medical Transport
              Available Anytime Across Nashik.
            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              className="
                mt-8
                flex
                flex-col
                sm:flex-row
                gap-4
                w-full
                sm:w-auto
              "
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

          <div
            className="
              absolute
              bottom-4
              left-4
              right-4
              md:bottom-6
              md:left-6
              md:right-6
              z-10
            "
          >

            <div
              className="
                bg-black/70
                backdrop-blur-md
                rounded-2xl
                md:rounded-3xl
                p-4
                md:p-6
                border
                border-white/10
              "
            >

              <div
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-5
                  gap-4
                  md:gap-6
                  text-white
                  text-sm
                  md:text-base
                "
              >

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
  );
}
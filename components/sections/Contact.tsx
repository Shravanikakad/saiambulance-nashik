"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
} from "../animations/animations";

import {
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-white pt-14 md:pt-20 pb-10 md:pb-14 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-red-100 blur-3xl opacity-40" />
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-red-50 blur-3xl opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        {/* ================= Heading ================= */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3"
          >
            <span className="w-10 h-[2px] bg-red-600" />

            <p className="uppercase tracking-wider text-sm md:text-base font-semibold text-red-600">
              Contact Us
            </p>

            <span className="w-10 h-[2px] bg-red-600" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl md:text-5xl font-bold text-black"
          >
            Need Ambulance{" "}
            <span className="text-red-600">
              Assistance?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Our emergency response team is available 24 hours a day,
            7 days a week to provide immediate medical transport whenever
            you need us.
          </motion.p>
        </motion.div>

        {/* ================= Contact Cards ================= */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8"
        >

          {/* CALL */}

          <motion.div
            variants={fadeUp}
            className="text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 md:border-0 md:shadow-none md:px-6 md:border-r md:border-gray-200"
          >
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto shadow-md transition-transform duration-300 hover:scale-110">
              <Phone
                className="text-red-600"
                size={28}
              />
            </div>

            <h3 className="mt-4 text-lg md:text-xl font-bold text-black">
              Call Us
            </h3>

            <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
              Speak directly with our
              <br />
              emergency team
            </p>

            <div className="mt-5 space-y-3">

              <a
                href="tel:+919766940298"
                className="flex justify-center items-center gap-2 text-sm md:text-base font-semibold text-gray-900 hover:text-red-600 transition"
              >
                <Phone
                  size={17}
                  className="text-red-600"
                />
                +91 97669 40298
              </a>

              <a
                href="tel:+918888264450"
                className="flex justify-center items-center gap-2 text-sm md:text-base font-semibold text-gray-900 hover:text-red-600 transition"
              >
                <Phone
                  size={17}
                  className="text-red-600"
                />
                +91 8888264450
              </a>

            </div>
          </motion.div>

          {/* WHATSAPP */}

          <motion.div
            variants={fadeUp}
            className="text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 md:border-0 md:shadow-none md:px-6 md:border-r md:border-gray-200"
          >
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto shadow-md transition-transform duration-300 hover:scale-110">
              <MessageCircle
                className="text-green-600"
                size={28}
              />
            </div>

            <h3 className="mt-4 text-lg md:text-xl font-bold text-black">
              WhatsApp
            </h3>

            <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
              Chat instantly with our
              <br />
              ambulance team
            </p>

            <div className="mt-5 space-y-3">

              <a
                href="https://wa.me/919766940298"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 text-sm md:text-base font-semibold text-gray-900 hover:text-green-600 transition"
              >
                <MessageCircle
                  size={17}
                  className="text-green-600"
                />
                Chat on 97669 40298
              </a>

              <a
                href="https://wa.me/918888264450"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 text-sm md:text-base font-semibold text-gray-900 hover:text-green-600 transition"
              >
                <MessageCircle
                  size={17}
                  className="text-green-600"
                />
                Chat on 8888264450
              </a>

            </div>
          </motion.div>

          {/* LOCATION */}

          <motion.div
            variants={fadeUp}
            className="text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 md:border-0 md:shadow-none md:px-6 md:border-r md:border-gray-200"
          >
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto shadow-md transition-transform duration-300 hover:scale-110">
              <MapPin
                className="text-red-600"
                size={28}
              />
            </div>

            <h3 className="mt-4 text-lg md:text-xl font-bold text-black">
              Service Area
            </h3>

            <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
              We proudly serve
              <br />
              Nashik and across India
            </p>

            <div className="mt-5">
              <p className="flex justify-center items-center gap-2 text-sm md:text-base font-semibold text-gray-900">
                <MapPin
                  size={17}
                  className="text-red-600"
                />
                Nashik, Maharashtra
              </p>

              <p className="mt-3 text-sm md:text-base text-gray-600">
                PAN India Patient
                <br />
                Transport Available
              </p>
            </div>
          </motion.div>

          {/* AVAILABILITY */}

          <motion.div
            variants={fadeUp}
            className="text-center p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 md:border-0 md:shadow-none md:px-6"
          >
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto shadow-md transition-transform duration-300 hover:scale-110">
              <ShieldCheck
                className="text-red-600"
                size={28}
              />
            </div>

            <h3 className="mt-4 text-lg md:text-xl font-bold text-black">
              Availability
            </h3>

            <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
              Always ready to help
              <br />
              you anytime
            </p>

            <div className="mt-5 inline-flex items-center gap-3 bg-red-50 rounded-xl px-4 py-3">
              <ShieldCheck
                size={18}
                className="text-red-600"
              />

              <div className="text-left">
                <p className="font-semibold text-red-600 text-sm md:text-base">
                  24 Hours • 365 Days
                </p>

                <p className="text-xs text-gray-600">
                  Emergency Response
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
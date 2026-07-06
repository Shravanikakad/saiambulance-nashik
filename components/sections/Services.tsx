"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
} from "../animations/animations";

const services = [
  {
    title: "ICU Ambulance",
    image: "/images/services/ICU.jpg",
    description:
      "Fully equipped ICU ambulance with ventilator and advanced medical support.",
  },
  {
    title: "Oxygen Ambulance",
    image: "/images/services/oxygen.png",
    description:
      "24/7 oxygen-supported ambulance for critical and emergency patients.",
  },
  {
    title: "Dead Body Transport",
    image: "/images/services/body.png",
    description:
      "Safe and respectful dead body transportation service across PAN India.",
  },
  {
    title: "Patient Transport",
    image: "/images/services/patient.png",
    description:
      "Comfortable transfer between hospitals, homes and healthcare centers.",
  },
  {
    title: "Emergency Ambulance",
    image: "/images/services/emergency.png",
    description:
      "Quick response ambulance service available day and night.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="pt-14 md:pt-20 pb-10 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10 md:mb-14"
        >

          <motion.p
            variants={fadeUp}
            className="text-red-600 font-semibold uppercase tracking-wider text-sm md:text-base"
          >
            Our Services
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-black mt-2"
          >
            Services We Provide
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Fast, reliable and professional ambulance services available
            24/7 for emergency and non-emergency patient transport.
          </motion.p>

        </motion.div>

        {/* Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >

          {services.map((service) => (

            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >

              {/* Image */}

              <div className="relative h-52 md:h-60 overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              {/* Content */}

              <div className="p-5 md:p-6">

                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
} from "../animations/animations";
import CountUp from "react-countup";
import {
  Clock3,
  BadgeCheck,
  Zap,
  Wallet,
  Ambulance,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "24/7 Emergency Service",
    description:
      "Our ambulances are available round-the-clock, ensuring rapid response during any medical emergency.",
  },
  {
    icon: BadgeCheck,
    title: "Trained Medical Staff",
    description:
      "Every ambulance is staffed with certified paramedics and trained attendants for immediate medical assistance.",
  },
  {
    icon: Zap,
    title: "Quick Response",
    description:
      "Fast dispatch and optimized routing so help reaches you exactly when every second counts.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description:
      "Reliable emergency transport at honest, transparent rates with no hidden charges.",
  },
  {
    icon: Ambulance,
    title: "Fully Equipped Ambulances",
    description:
      "We provide well-maintained ambulances fitted with oxygen, ventilators, and life-saving medical equipment for safe patient transport.",
  },
  {
    icon: Users,
    title: "Trusted by 5,000+ Families",
    description:
      "With verified staff and years of experience, we ensure safe, respectful, and timely ambulance service for every family.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="pt-14 md:pt-20 pb-8 md:pb-10 px-4 md:px-6 bg-white"
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
            Why Choose Us
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-black mt-2"
          >
            Why Choose Sai Ambulance
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            We provide well-maintained ambulances fitted with oxygen,
            ventilators and life-saving medical equipment for safe patient
            transport.
          </motion.p>

        </motion.div>

        {/* Mission */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >

          <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-3">
            Our Mission
          </h3>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Providing fast, safe and reliable ambulance service with trust and
            compassion — because every second saved can save a life.
          </p>

        </motion.div>

        {/* Feature Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
        >

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  p-6
                  md:p-8
                "
              >

                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-5">

                  <Icon
                    size={26}
                    className="text-red-600"
                  />

                </div>

                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>

              </motion.div>

            );
          })}

        </motion.div>

        {/* Stats */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-zinc-900 text-white rounded-3xl px-5 md:px-6 py-8 md:py-10"
        >

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">

            <div>
              <p className="text-2xl md:text-4xl font-bold text-red-500">
                <CountUp
                  end={5000}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </p>
              <p className="text-sm text-zinc-300 mt-1">
                Lives Saved
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-4xl font-bold text-red-500">
                15 – 20
              </p>
              <p className="text-sm text-zinc-300 mt-1">
                Min Avg Response
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-4xl font-bold text-red-500">
                <CountUp
                  end={20}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </p>
              <p className="text-sm text-zinc-300 mt-1">
                Ambulances
              </p>
            </div>

            <div>
              <p className="text-2xl md:text-4xl font-bold text-red-500">
                <CountUp
                  end={15}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </p>
              <p className="text-sm text-zinc-300 mt-1">
                Cities Covered
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
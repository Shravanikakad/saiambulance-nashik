"use client";

import { motion } from "framer-motion";
import { reviews } from "@/data/reviews";
import ReviewCard from "../ui/ReviewCard";

import {
  fadeUp,
  zoomIn,
  staggerContainer,
} from "../animations/animations";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="pt-14 md:pt-20 pb-10 md:pb-12 px-4 bg-white"
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
            Testimonials
          </motion.p>

          <motion.h2
            variants={fadeUp} className="text-3xl md:text-5xl font-bold text-black mt-2">
            Trust of 5,000+ Families
          </motion.h2>

          {/* Rating */}

          <motion.div
            variants={fadeUp}
            className="mt-5"
          >

            <div className="text-yellow-400 text-2xl md:text-3xl tracking-wide">
              ★★★★★
            </div>

            <p className="mt-2 text-lg md:text-xl font-semibold text-black">
              4.9 Google Rating
            </p>

            <p className="text-gray-500 mt-1 text-sm md:text-base">
              Trusted by{" "}
              <span className="font-semibold text-black">
                5,000+
              </span>{" "}
              Families
            </p>

          </motion.div>

          <motion.p
            variants={fadeUp} className="max-w-2xl mx-auto mt-5 text-gray-500 text-base md:text-lg leading-relaxed">
            Every successful patient transfer reflects our commitment to
            providing fast, reliable and compassionate ambulance services
            across Nashik and PAN India.
          </motion.p>

        </motion.div>

        {/* Review Cards */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
        >

          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={zoomIn}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}

        </motion.div>

        {/* Buttons */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10 md:mt-14"
        >

          <a
            href="#"
            className="
              w-full
              sm:w-auto
              text-center
              border-2
              border-gray-300
              text-gray-800
              rounded-full
              px-6
              py-3
              font-semibold
              hover:bg-gray-100
              transition-all
            "
          >
            View All Google Reviews →
          </a>

          <a
            href="#"
            className="
              w-full
              sm:w-auto
              text-center
              bg-red-600
              hover:bg-red-700
              text-white
              rounded-full
              px-6
              py-3
              font-semibold
              transition-all
              shadow-lg
            "
          >
            Write a Google Review
          </a>

        </motion.div>

      </div>
    </section>
  );
}
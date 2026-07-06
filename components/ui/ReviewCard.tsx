import {
  MapPin,
  User,
  Star,
} from "lucide-react";

interface ReviewCardProps {
  name: string;
  location: string;
  review: string;
  date: string;
}

export default function ReviewCard({
  name,
  location,
  review,
  date,
}: ReviewCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        p-5 md:p-6
        h-full
      "
    >
      {/* Stars */}

      <div className="flex items-center gap-1 mb-3">

        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className="
              fill-yellow-400
              text-yellow-400
            "
          />
        ))}

      </div>

      {/* Review */}
      <p
        className="
          text-gray-600
          italic
          leading-6
          text-sm
          md:text-base
          min-h-[80px]
          md:min-h-[95px]
        "
      >
        "{review}"
      </p>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* User Details */}
      <div className="space-y-1.5">

        <div className="flex items-center gap-2 font-semibold text-black text-sm md:text-base">
          <User size={16} />
          {name}
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <MapPin size={14} />
          {location}
        </div>

        <p className="text-xs text-gray-400">
          {date}
        </p>

      </div>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  const imageUrl = result.backdrop_path || result.poster_path ? (
    `https://image.tmdb.org/t/p/original/${
      result.backdrop_path || result.poster_path
    }`
  ) : (
    "../../public/images/fallback.jpg"
  );

  const getRatingColor = (rating) => {
    switch (true) {
      case rating >= 9:
        return "text-green-700"; // Dark green
      case rating >= 8:
        return "text-green-500"; // Green
      case rating >= 7:
        return "text-lime-500"; // Lime green
      case rating >= 6:
        return "text-yellow-500"; // Yellow-green
      case rating >= 5:
        return "text-amber-500"; // Yellow-orange
      case rating >= 4:
        return "text-orange-500"; // Orange
      case rating >= 3:
        return "text-orange-600"; // Dark orange
      case rating >= 2:
        return "text-red-500"; // Red-orange
      case rating >= 1:
        return "text-red-600"; // Red
      default:
        return "text-red-700"; // Dark red
    }
  };

  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/media/${result.id}`}>
        <Image
          src={imageUrl}
          alt={result.title || result.name}
          width={500}
          height={500}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 w-full sm:h-36 object-cover"
        />
        <div className="p-2">
          <p className="line-clamp-3 text-sm">{result.overview}</p>
          <h2 className="font-bold truncate my-2 text-sm">
            {result.title || result.name}
          </h2>
          <p className="flex items-center text-xs">
            {result.release_date || result.first_air_date}
            {result.vote_average > 5.0 ? (
              <FiThumbsUp className={`h-5 mr-1 ml-3 ${getRatingColor(result.vote_average)}`} />
            ) : (
              <FiThumbsDown className={`h-5 mr-1 ml-3 ${getRatingColor(result.vote_average)}`} />
            )}
            {result.vote_average.toFixed(1)}
          </p>
        </div>
      </Link>
    </div>
  );
}
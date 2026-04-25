import { useRef, useState } from "react"
import movie1 from "../assets/m1.jpg"
import movie2 from "../assets/m2.jpg"
import movie3 from "../assets/m3.jpg"
import movie4 from "../assets/m4.jpg"
import movie5 from "../assets/m5.jpg"
import movie6 from "../assets/m6.jpg"
import movie7 from "../assets/m7.jpg"
import movie8 from "../assets/m8.jpg"
import movie9 from "../assets/m9.jpg"


const trendingMovies = [
  { id: 1, image: movie1, title: "Movie 1" },
  { id: 2, image: movie2, title: "Movie 2" },
  { id: 3, image: movie3, title: "Movie 3" },
  { id: 4, image: movie4, title: "Movie 4" },
  { id: 5, image: movie5, title: "Movie 5" },
  { id: 6, image: movie6, title: "Movie 6" },
  { id: 7, image: movie7, title: "Movie 7" },
  { id: 8, image: movie8, title: "Movie 8" },
  { id: 9, image: movie9, title: "Movie 9" },
]


function Card({ title, movies=trendingMovies }) {
  const rowRef = useRef();

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -rowRef.current.offsetWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: rowRef.current.offsetWidth, behavior: "smooth" });
  };

  return (
    <div className="mt-6 px-3 sm:px-5 md:px-8 text-white relative bg-black py-6">
     <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">{title}</h2>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
       className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 px-2 py-4 z-10 rounded-md hidden md:block"
      >
        ◀
      </button>

      {/* Slider */}
      <div
        ref={rowRef}
      className="flex overflow-x-auto space-x-3 scroll-smooth snap-x px-1 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      >
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={movie.image}
            alt={movie.title}
       className="
  snap-start
  h-28 sm:h-32 md:h-40 lg:h-48
  min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px]
  object-cover rounded-md
  hover:scale-105 transition-transform duration-300
  cursor-pointer
"
          />
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 px-2 py-4 z-10 rounded-md hidden md:block"
      >
        ▶
      </button>
    </div>
  );
}

export default Card;
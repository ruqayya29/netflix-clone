import logo from "../assets/logo.svg"
import hero from "../assets/net bg.jpg"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Card from "./Card.jsx";

function Home() {

  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      navigate("/")
    }
  }, [])

  function handleLogout() {
    localStorage.removeItem("isLoggedIn")
    navigate("/")
  }

  return (
    <div className="relative min-h-screen bg-black">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />

      <div className="relative z-10">
        <nav className="flex justify-between items-center px-4 sm:px-8 md:px-16 py-4 sm:py-6">
          <img className="w-28 sm:w-36 md:w-44 h-auto" src={logo} alt="Logo"></img>
          <div className="flex gap-2 sm:gap-4">
            <div className="relative">
              <select className="appearance-none bg-black text-white border border-gray-500 rounded-md px-4 py-2 pr-8 cursor-pointer focus:outline-none">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>

              <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white">▼</span>
            </div>
            <button onClick={handleLogout} className="bg-[#E50914] px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-white rounded-md font-semibold">Sign Out</button>
          </div>
        </nav>

      </div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 py-20 sm:py-28 md:py-32">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-2xl leading-tight text-white">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-sm sm:text-base md:text-xl mt-4 text-white">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-sm sm:text-base md:text-xl mt-2 text-white max-w-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-5 w-full max-w-md">
          <input
            className="w-full bg-transparent text-white border rounded-md p-3 text-sm sm:text-base"
            type="email"
            placeholder="Email address"
          />
          <button className="bg-[#E50914] px-5 py-3 text-white text-sm sm:text-base rounded-md font-bold">
            Get Started
          </button>
        </div>

      </div>

      
      <div className="relative z-10 mt-6 sm:mt-10">
        <Card title="Trending Now" />
      </div>

      <div className="relative z-10 bg-black/80 text-gray-400 text-sm px-4 sm:px-8 md:px-16 py-10">

  <p className="mb-4 text-xs sm:text-sm">
    Questions? Call 000-800-919-1743 (Toll-Free)
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
    {["FAQ", "Help Center", "Terms of Use", "Privacy",
      "Cookie Preferences", "Corporate Information"].map((link) => (
        <a key={link} href="#" className="hover:underline text-xs sm:text-sm">
          {link}
        </a>
      ))}
  </div>

  <select className="bg-black text-white border border-gray-500 rounded px-4 py-2 text-sm">
    <option>English</option>
    <option>Hindi</option>
  </select>

  <p className="mt-4 text-xs">Netflix India</p>
</div>

</div>    
  )
}

export default Home
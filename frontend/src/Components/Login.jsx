import logo from "../assets/logo.svg"
import hero from "../assets/net bg.jpg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { FaEye, FaEyeSlash } from "react-icons/fa"

const url = "https://netflix-clone-lk7c-p03hvg2hq-ruqayya29s-projects.vercel.app"


function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  function handleEmail(evt) {
    setEmail(evt.target.value)
  }

  function handlePassword(evt) {
    setPassword(evt.target.value)
  }

  async function checkDetails() {
    if (!email || !password) {
      setError("Please fill all fields")
      return
    }

    try {
      console.log("Sending:", { email, password })
      const res = await axios.post(`${url}/login`, {
        email,
        password,
      })

      console.log("Response:", res.data)

      if (res.data === true) {
        localStorage.setItem("isLoggedIn", "true")

        navigate("/home")
      } else {
        setError("Invalid email or password")
      }
    } catch (err) {
      console.error("Error:", err.response?.data || err.message)
      setError("Server error")
    }
  }
  return (
    <div className="relative min-h-screen">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />

      <div className="relative z-10">
        <nav className="flex justify-between items-center px-16 py-6">
          <img className="w-45 h-auto" src={logo} alt="Logo"></img>

        </nav>
      </div>
      <div className="relative z-10 flex justify-center item-center py-10">
        <div className="bg-black/75 text-white rounded px-16 py-12 w-full max-w-md flex flex-col gap-4">

          <h1 className="text-3xl font-bold mb-2">Sign In</h1>
          <input onChange={handleEmail}
            type="email"
            placeholder="Email"
            className="bg-[#333] text-white px-4 pt-5 pb-2 rounded outline-none border border-transparent focus:border-gray-500 h-14"
          />

          <div className="relative">
            <input
              onChange={handlePassword}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-[#333] text-white px-4 pt-5 pb-2 rounded outline-none border border-transparent focus:border-gray-500 h-14"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}


          <button onClick={checkDetails} className="bg-[#E50914] py-3 text-white rounded font-bold text-lg mt-2 hover:bg-red-700 transition">
            Sign In
          </button>
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <span className="flex-1 h-px bg-gray-600" />
            OR
            <span className="flex-1 h-px bg-gray-600" />
          </div>

          <button className="border border-gray-500 bg-[#333]/80 py-3 text-white rounded font-medium hover:bg-[#444] transition">
            Use a Sign-In Code
          </button>

          <p className="text-center text-gray-400 text-sm">
            <a href="#" className="hover:underline">Forgot password?</a>
          </p>

          <label className="flex items-center gap-2 text-gray-400 text-sm cursor-pointer">
            <input type="checkbox" className="accent-gray-400 w-4 h-4" />
            Remember me
          </label>
          <p className="text-gray-500 mt-4">
            New to Netflix?{" "}
            <a href="/signup" className="text-white font-semibold hover:underline">
              Sign up now
            </a>
          </p>
          <div>
            <p className="text-gray-500 font-bold">  Credentials</p>
            <snap className="text-gray-500">Username: netflix@gmail.com</snap>
            <br></br>
            <snap className="text-gray-500">Password: netflix#963</snap>
          </div>

          <p className="text-gray-600 text-xs mt-2 leading-relaxed">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
            <a href="#" className="text-blue-500 hover:underline">Learn more.</a>
          </p>

        </div>
      </div>
      <div className="relative z-10 bg-black/70 text-gray-500 text-sm px-16 py-10 mt-10">
        <p className="mb-4">Questions? Call 000-800-919-1743 (Toll-Free)</p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {["FAQ", "Help Center", "Terms of Use", "Privacy",
            "Cookie Preferences", "Corporate Information"].map((link) => (
              <a key={link} href="#" className="hover:underline">{link}</a>
            ))}
        </div>


        <div className="relative inline-block">
          <select className="appearance-none bg-black text-white border border-gray-500 rounded px-4 py-2 pr-8 cursor-pointer focus:outline-none">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
          <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-white text-xs">▼</span>
        </div>
      </div>



    </div>


  )
}

export default Login


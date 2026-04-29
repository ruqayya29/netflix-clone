const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors({
  origin: "https://netflix-clone-chi-two-51.vercel.app",
  methods: ["GET", "POST"],
  credentials: true
}))

app.use(express.json())

const loginuser = "netflix@gmail.com"
const loginpass = "netflix#963"

app.use(express.urlencoded({ extended: true }))

app.post("/login", function (req, res) {
  try {
    console.log("Body received:", req.body)


    const { email, password } = req.body

    if (loginuser === req.body.email && loginpass === req.body.password) {
      res.send(true)
    }

    else {
      res.send(false)
    }

  } catch (err) {
    console.error("Login error:", err)
    res.status(500).send("Internal Server Error")

  }
})


app.listen(3000, function () {
  console.log("Server Started")
})

module.exports = app
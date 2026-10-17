require("dotenv").config()

const requiredEnvironmentVariables = [
    "MONGO_URI",
    "JWT_SECRET",
    "GOOGLE_GENAI_API_KEY"
]
const missingEnvironmentVariables = requiredEnvironmentVariables.filter(name => !process.env[name])

if (missingEnvironmentVariables.length > 0) {
    console.error(`Missing required environment variables: ${missingEnvironmentVariables.join(", ")}`)
    process.exit(1)
}

const app = require("./src/app")
const connectToDB = require("./src/config/database")

const PORT = process.env.PORT || 5055

async function startServer() {
    await connectToDB()

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

startServer().catch(error => {
    console.error("Failed to start server:", error)
    process.exitCode = 1
})

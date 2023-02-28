import express from "express"
import dotenv from "dotenv"
import axios from "axios"
dotenv.config()
const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const { prompt } = req.body
        let { data } = await axios.get(
            `https://lexica.art/api/v1/search?q=${prompt}`
        )

        if (data) {
            return res.status(200).json({ sucess: true, data })
        } else {
            return res
                .status(400)
                .json({ sucess: false, data: "An error ocurred" })
        }
    } catch (error) {
        return res
            .status(500)
            .json({
                sucess: false,
                error:
                    error?.response?.data?.error?.message ||
                    "Something went wrong",
            })
    }
})

export default router

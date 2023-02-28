import express from "express"
import Post from "../Model/UserSchema.js"

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const data = await Post.find()
        if (data !== null) {
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

import express from "express"
import Post from "../Model/UserSchema.js"

const router = express.Router()

router.post("/", async (req, res) => {
    const { name, prompt, photoUrl } = req.body

    try {
        let AlreadyIn = await Post.findOne({ photoUrl })

        if (AlreadyIn) {
            return res.status(400).json({ error:"try with different prompt" })
        }

        let user = await Post.create({ name, prompt, photoUrl })
        await user.save()

        if (user) {
            return res.status(200).json({sucess:true,data:user})
        }

        } catch (error) {
            return res.status(400).json({ error })
        }
})

export default router

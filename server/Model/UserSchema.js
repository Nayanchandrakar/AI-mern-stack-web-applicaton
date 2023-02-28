import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    prompt: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
})

const Post = mongoose.model('post',PostSchema)
export default Post
import React from "react"
import { useState } from "react"
import { preview } from "../assets"
import { FormField, Loader } from "../Components"
import { getRandomUser } from "../utiles/index"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreatePost = () => {
    const navigate = useNavigate()
    const [dataValue, setvalue] = useState({
        name: "",
        prompt: "",
        photoUrl: "",
    })

    const [image, setimage] = useState(null)
    const [SingleImage, setSingleImage] = useState(null)
    const [loading, setloading] = useState(false)
    const [buttonLoading, setButtonloading] = useState(false)

    const { name, prompt, photoUrl } = dataValue

    const GenerateImage = async () => {
        try {
            setloading(true)
            setSingleImage(null)
            const { data } = await axios.post(
                "http://localhost:8000/api/v1/image",
                { prompt }
            )
            if (data?.sucess) {
                setimage(data)
                const randomNumber = Math.floor(
                    Math.random() * data?.data?.images?.length
                )
                const randomImage = data?.data?.images?.[randomNumber]
                setSingleImage(randomImage)
                return setvalue({ ...dataValue, photoUrl: randomImage.src })
            } else {
                window.alert("An error occured")
                setloading(false)
            }
        } catch (error) {
            window.alert(error)
        } finally {
            setloading(false)
        }
    }

    const GenerateAIimage = () => {
        if (name && prompt) {
            return GenerateImage()
        } else {
            window.alert("Please fill all fields")
        }
    }

    const ShowCaseImage = async () => {
        if (prompt && photoUrl && name) {
            try {
                setButtonloading(true)
                const { data } = await axios.post(
                    "http://localhost:8000/api/v1/post",
                    { name, prompt, photoUrl }
                )
                if (data?.sucess) {
                    setButtonloading(false)
                    window.alert("Succefully shared to the community")
                    navigate("/")
                }
            } catch (error) {
                window.alert(
                    error?.response?.data?.error ||
                        "prompt alreadty y used and you can find it on community"
                )
            }finally{
                setButtonloading(false)
            }
        } else {
            window.alert("Please fill all the fields")
        }
    }

    const InputValue = e => setvalue({ ...dataValue, [e.target.name]: e.target.value })
   

    const handleSurprisme = () => {
        let randomUser = getRandomUser()
        setvalue({ ...dataValue, prompt: randomUser })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }



    return (
        <>
            <div className="">
                <h1 className="font-extrabold font-inter text-3xl">Create</h1>
                <p className="text-gray-500 mt-5 mb-8 sm:mb-14">
                    Create imaginative and visually stunning images through
                    DALL-E AI and share them with the community
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 sm:max-w-[60%]"
                >
                    <FormField
                        name="name"
                        placeholder="John Doe"
                        eventFunction={InputValue}
                        value={dataValue.name}
                        SupriseMe={false}
                        label="Your name"
                    />

                    <div className="mb-6">
                        <FormField
                            name="prompt"
                            placeholder="A plush toy robot sitting against a yellow wall"
                            eventFunction={InputValue}
                            value={dataValue.prompt}
                            SupriseMe={true}
                            label="Prompt"
                            SupriseMeFunc={handleSurprisme}
                        />
                    </div>
                </form>

                {SingleImage == null ? (
                    <div
                        className={`flex relative ${
                            loading && "bg-gray-400"
                        } justify-center rounded-md h-[16rem] items-center w-[16rem] border border-gray-400`}
                    >
                        {loading && (
                            <div className="absolute">
                                <Loader />
                            </div>
                        )}
                        <img src={preview} className="w-[12rem]" alt="" />
                    </div>
                ) : (
                    <div className="relative flex justify-center w-[16rem] h-[16rem] object-contain overflow-y-hidden">
                        <img
                            src={SingleImage.src}
                            className="w-full rounded-md"
                            alt=""
                        />
                    </div>
                )}

                <button
                    type="button"
                    onClick={GenerateAIimage}
                    className="px-5 flex justify-center bg-green-700 items-center w-full sm:w-[7rem] py-3 text-sm text-white rounded-md mt-6 mb-9"
                >
                    {!loading ? "Generate" : "Generating..."}
                </button>

                <p className="text-sm font-inter text-gray-500">
                    Once you have created the image you want, you can share it
                    with others in the community
                </p>

                <button
                    onClick={ShowCaseImage}
                    className="px-5 flex justify-center bg-indigo-500 items-center w-full sm:w-[14rem] py-3 text-sm text-white rounded-md mt-6"
                >
                   { buttonLoading ? 'Sharing Please wait....' :"Share with the community"}
                </button>
            </div>
        </>
    )
}

export default CreatePost

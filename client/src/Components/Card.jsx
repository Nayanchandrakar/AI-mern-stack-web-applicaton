import React from "react"
import { download } from "../assets/index.js"
import { downloadImage } from "../utiles/index.js"

const Card = (e) => {

    return (
        <div key={e?._id} className="relative card flex justify-center group">
            <img
                src={e?.photoUrl}
                className="relative rounded-md object-cover w-full overflow-hidden bottom-0"
                alt={e?.name}
            />
            <div className="absolute bg-gray-900 shadow shadow-black rounded-lg h-[7rem] w-[96%]  flex-col gap-2 p-2 m-[.5rem] overflow-y-hidden bottom-0 transition-all group-hover:flex cursor-pointer hidden">
                <span className="text-sm text-white">{e?.name}</span>
                <p className="text-sm overflow-y-scroll ScrollOff text-white">
                    {e?.prompt}
                </p>
                <div className="flex flex-row justify-between">
                    <span className="w-[1.5rem] h-[1.5rem] bg-green-600 text-sm justify-center items-center flex rounded-full text-white">
                        {e?.name?.[0]?.toUpperCase()}
                    </span>
                    <img
                        src={download}
                        alt=""
                        onClick={() => downloadImage(e?._id, e?.photoUrl)}
                        className="w-6 opacity-1 invert"
                    />
                </div>
            </div>
        </div>
    )
}

export default Card

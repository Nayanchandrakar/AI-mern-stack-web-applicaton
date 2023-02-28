import React from "react"

const FormField = ({name,placeholder,eventFunction,value,SupriseMe,label,SupriseMeFunc}) => {
    return (
        <div className="flex justify-start flex-col gap-2">
            <div className="flex gap-4 text-sm">
            <label className="text-sm" htmlFor={name}>{label}</label>
            {SupriseMe && (<>
            <span onClick={SupriseMeFunc} className="cursor-pointer bg-[#e9e6fa] px-1 py-[1px] rounded-md">Surprise me</span>
            </>)}
            </div>
           
            <input
            type="text" 
            name={name} 
            placeholder={placeholder} 
            onChange={eventFunction}
            className=" py-[.7rem] px-2 rounded-lg border border-gray-300 focus:outline-1 focus:outline-indigo-500 placeholder:text-sm"
            required
            value={value}
            />
        </div>
    )
}

export default FormField

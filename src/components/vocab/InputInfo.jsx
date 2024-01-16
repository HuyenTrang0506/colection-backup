import { useState } from "react";
const InputInformation = ({ Children, onInputChange }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        onInputChange(value);
    };
    return (
        <div className="relative  mb-4 w-full">
            <input
                type="text"
                id="inputField"
                value={inputValue}
                onChange={handleChange}
                placeholder={Children}
                className=" w-full border-b-2 border-gray-400 placeholder-gray-500 required:ring-red-500 focus:border-green-500 focus:outline-none"
            />
        </div>
    );
};

export default InputInformation;

import React from "react";
import InputInformation from "./InputInfo";
import { useState } from "react";
import Card from '../card'

const CreateVocab = () => {
    const [word, setWord] = useState("");
    const [mean, setMean] = useState("");
    const [example, setExample] = useState("");
    const [pronounce, setPronounce] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [type, setType] = useState("");

    const handleWordChange = (value) => {
        setWord(value);
    };

    const handleMeanChange = (value) => {
        setMean(value);
    };

    const handleExampleChange = (value) => {
        setExample(value);
    };

    const handlePronounceChange = (value) => {
        setPronounce(value);
    };

    const handleImageUrlChange = (value) => {
        setImageUrl(value);
    };

    const handleTypeChange = (event) => {
        const value = event.target.value;
        setType(value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Thực hiện xử lý dữ liệu từ các input và lưu vào các biến word, mean, example, pronounce, imageUrl, type
        console.log("Word:", word);
        console.log("Mean:", mean);
        console.log("Example:", example);
        console.log("Pronounce:", pronounce);
        console.log("Image URL:", imageUrl);
        console.log("Type:", type);

    };
    return (
        <form onSubmit={handleSubmit} className="">
            <Card extra={"w-full p-4 h-full"} >
                <div className="mx-5 mb-8 w-full">
                    <h4 className="text-xl font-bold text-navy-700 text-green-400 dark:text-white">
                        Create vocabulary
                    </h4>
                    <p className="mt-2 text-base text-gray-600">
                        This is where you can create new vocabulary to practice.
                    </p>
                </div>
                {/* Project 1 */}
                <div className="flex h-full">
                    <div className=" my-5 mx-5 w-full items-center  justify-between bg-white">
                        <label className="font-medium">
                            New word <label className="ml-2 text-red-400">*</label>
                        </label>
                        <div className="word mt-5">
                            <InputInformation
                                Children={"cuisine"}
                                onInputChange={handleWordChange}
                            />
                        </div>
                    </div>

                    <div className=" mx-5 my-5 w-full items-center  justify-between bg-white">
                        <label className="font-medium">
                            Meaning <label className="ml-2 text-red-400">*</label>
                        </label>
                        <div className="mean mt-5">
                            <InputInformation
                                Children={"a country or region's style of cooking"}
                                onInputChange={handleMeanChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex h-full">
                    <div className=" mx-5 my-5 w-full items-center  justify-between bg-white">
                        <label className="font-medium">
                            Example <label className="ml-2 text-red-400">*</label>
                        </label>
                        <div className="example mt-5">
                            <InputInformation
                                Children={"There more to Italian cuisine than pizza"}
                                onInputChange={handleExampleChange}
                            />
                        </div>
                    </div>

                    <div className=" mx-5 my-5 w-full items-center  justify-between bg-white">
                        <label className="font-medium">
                            Choose <label className="ml-2 text-red-400">*</label>
                        </label>
                        <div className="choosing mt-5">
                            <div className="relative  mb-4 w-full">
                                <select
                                    value={type}
                                    onChange={handleTypeChange}
                                    class="w-full border-b-2 border-gray-400  required:ring-red-500 focus:border-green-500 focus:outline-none"
                                >
                                    <option value="choose">-Choose type-</option>
                                    <option value="noun">Noun</option>
                                    <option value="verb">Verb</option>
                                    <option value="adjective">Adjective</option>
                                    <option value="adverb">Adverb</option>
                                    <option value="phrasal verb">Phrasal verb</option>
                                    <option value="preposition">Preposition</option>
                                    <option value="conjunction">Conjunction</option>
                                    <option value="idiom">Idiom</option>
                                    <option value="slang">Slang</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex h-full">
                    <div className=" mx-5 my-5 w-full items-center  justify-between bg-white">
                        <label className=" font-medium">Pronounce</label>
                        <div className="pronounce mt-5">
                            <InputInformation
                                Children={"/kwi'zi:n/"}
                                onInputChange={handlePronounceChange}
                            />
                        </div>
                    </div>

                    <div className=" mx-5 my-5 w-full items-center  justify-between bg-white">
                        <label className="font-medium">Image URL</label>
                        <div className="image-url mt-5">
                            <InputInformation
                                Children={"https:unsplash.com/photos/JgiIOA"}
                                onInputChange={handleImageUrlChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="text-center transition-all hover:scale-105">
                    <input
                        className="rounded-full bg-green-400 py-3 px-10 text-base font-semibold text-white"
                        type="submit"
                        value={"Create"}
                    ></input>
                </div>
            </Card>
        </form>
    );
};

export default CreateVocab;

import {useState} from "react";
import {useSearchParams} from "react-router-dom";

function About() {

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams)
    const topic = searchParams.get("topic") || "general"

    const urlParams = new URLSearchParams(window.location.search)
    const topicFromURL = urlParams.get("topic")

    console.log("useSearchParams: ", topic)
    console.log("URLSearchParams: ", topic)

    const handleTopic = (newTopic) => {
        setSearchParams({
            topic: newTopic,
        })
    };

    return (



        <div className='mt-6'>
            <h3 className='text-xl text-gray-800'>Choose a topic:</h3>
            <div className='flex space-x-4 mt-4'>
                <button onClick={() => handleTopic("Team")} className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
                    Team
                </button>
                <button onClick={() => handleTopic("Mission")} className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
                    Mission
                </button>
                <button onClick={() => handleTopic("Vision")} className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
                    Vision
                </button>
            </div>

            <div className='mt-8 text-lg text-gray-700'>
                <p>Current Topic: {topic}</p>
            </div>

        </div>



    )
}

export default About;
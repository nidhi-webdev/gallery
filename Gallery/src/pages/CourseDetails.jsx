import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const param = useParams()
    console.log(param);



    return (
        <div>
            <h1> Course Details Page </h1>
        </div>
    )
}

export default CourseDetails

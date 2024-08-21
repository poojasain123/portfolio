import React from 'react'

 const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                Hello! I'm Pooja Sain, an 18-year-old student from Bikaner, Rajasthan, currently pursuing my Civil Engineering degree at IIT Kharagpur. Ever since I can remember, I've been fascinated by the world of engineering and the endless possibilities it offers to create, innovate, and build a better future. My journey to IIT Kharagpur began with a lot of hard work and dedication, culminating in cracking the JEE Advanced exam right after my 12th grade. Now, as a second-year student, I'm fully immersed in the challenges and opportunities that come with studying at one of India's premier institutions.
                </p>

                <br />
                <p className='text-xl'>
                Being part of IIT Kharagpur has not only expanded my academic horizons but has also exposed me to a vibrant community of like-minded individuals who inspire and motivate me every day. My passion for civil engineering grows stronger as I delve deeper into my coursework and explore the various facets of the field. As I look ahead, I am determined to leverage this knowledge and experience to contribute meaningfully to the world of engineering. Alongside my academic pursuits, I also have aspirations to crack the UPSC exam and make a significant impact in the public sector. My journey has just begun, and I'm excited to see where it takes me!
                </p>
            </div>
        </div>
    )
}
export default About
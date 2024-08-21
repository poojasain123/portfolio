import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs"
import { RiBook2Fill } from "react-icons/ri"

const SocialLink = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin<FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/pooja-sain-0581962a2/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub<FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/poojasain123'
        },
        {
            id: 3,
            child: (
                <>
                    Mail<HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:sainp102006@gmail.com@gmail.com'
        },
        {
            id: 5,
            child: (
                <>
                    Resume<BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            download: true,
            style: 'rounded-br-md',
        },

    ]


    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={'flex justify-center items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + " " + style}>
                        <a
                            href={href}
                            className='flex justify-between items-center w-full text-white'
                            download={download}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {child}
                        </a>
                    </li>
                ))}

            </ul>

        </div>
    )
}
export default SocialLink
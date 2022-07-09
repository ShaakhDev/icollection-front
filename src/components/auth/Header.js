import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="mb-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-dark dark:text-white">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-dark dark:text-white">
                {paragraph}
                <Link to={linkUrl} className="font-medium text-accent-color-1 ">
                    {linkName}
                </Link>
            </p>
        </div>
    )
}
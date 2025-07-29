'use client'

import { useState, useEffect } from 'react'

const DarkToggle = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const stored = localStorage.getItem('isDark') === 'true'
        setIsDark(stored)
        document.documentElement.setAttribute('data-theme', stored ? 'dark' : 'light')
    }, [])

    function toggleDark() {
        const newIsDark = !isDark
        setIsDark(newIsDark)
        localStorage.setItem('isDark', newIsDark.toString())
        document.documentElement.setAttribute('data-theme', newIsDark ? 'dark' : 'light')
    }


    return (
        <>
            <div onClick={toggleDark} className='fixed right-10 bottom-20 dark:bg-gray-900 dark:border-gray-700 bg-white border border-gray-300 h-fit w-fit p-2.5 flex items-center justify-center rounded-full cursor-pointer select-none dark:hover:bg-gray-800 hover:bg-gray-200'>
                <span className="material-symbols-outlined dark:text-white text-gray-700">
                    dark_mode
                </span>
            </div>
        </>
    )
}

export default DarkToggle
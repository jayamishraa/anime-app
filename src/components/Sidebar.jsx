import React from 'react'

const Sidebar = () => {
    const sidebarComponents = ["Home", "Trending", "Suggestion", "Category", "Discover", "Schedule", "Settings"]
    return (
        <>
            <div className='text-xl text-red-500'>
                Anime-App
            </div>
            {sidebarComponents.map(el => {
                return (
                    <span> {el} </span>
                )
            })}
            <div>
                Logout
            </div>
        </>
    )
}

export default Sidebar

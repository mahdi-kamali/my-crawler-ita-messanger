import React, { useState } from 'react'
import SideBar from '../../side-bar/SideBar'

const MainPage = () => {



    const [content, setContent] = useState()

    return (
        <main className='main-page'>
            <section className="content">
                {content?.component}
            </section>
            <SideBar setContent={setContent} />
        </main>
    )
}

export default MainPage
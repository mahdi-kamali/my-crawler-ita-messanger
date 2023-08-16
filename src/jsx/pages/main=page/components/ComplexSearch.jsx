import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const ComplexSearch = () => {


    const categoriesList = [
        "همه",
        "هشتگ",
        "افراد",
        "کانال",
        "گروه",
        "Bio",
        "ID",
    ]


    const [selectedCategory, setSelectedCategory] = useState(categoriesList[0])



    return (
        <div className='complex-search'>

            <form action="#" className='search-form'>
                <div className="search-box">
                    <input type="text" name='search' placeholder='جستجو کنید.....' />
                    <Icon icon="ion:search-outline" />
                </div>
                <div className="search-categories">
                    {
                        categoriesList.map((item, index) => {
                            return <div
                                className={`item ${selectedCategory === item}`}
                                key={index}
                                onClick={() => { setSelectedCategory(item) }}
                            >
                                {item}
                            </div>
                        })
                    }
                </div>
                <div className="search-filter">
                    <div className="row">
                        <div className="col">
                            <span>تا تاریخ :</span>
                            <input type="date" name='present-date' />
                        </div>
                        <div className="col">
                            <span>از تاریخ :</span>
                            <input type="date" name='last-date' />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <span>تا ساعت :</span>
                            <input type="time" name='present-time' />
                        </div>
                        <div className="col">
                            <span>از ساعت :</span>
                            <input type="time" name='last-time' />
                        </div>

                    </div>
                </div>
                <div className="form-submit">
                    <button className='submit'>
                        <span>
                            جستجو
                        </span>
                        <Icon icon="ri:search-fill" />
                    </button>
                </div>
            </form>


        </div>
    )
}

export default ComplexSearch
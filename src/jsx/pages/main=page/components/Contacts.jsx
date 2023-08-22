import { Icon } from "@iconify/react"
import { useEffect, useState, useTransition } from "react"
import User from "../../componetns/User";
import { FAKE_CONTACS } from "../../consts/consts";

const Contacts = () => {



    const categoryList = [
        "همه",
        "مخاطبین خودم",
        "گروه ها",
        "از کانال ها",
    ]


    const fakeContacts = FAKE_CONTACS







    const [selectedCategory, setSelecteCategory] = useState(categoryList[1])


    return (
        <div className="contacts-tab">
            <div className="search-box">
                <input type="text" name="search" placeholder="جستجو کنید...." />
                <Icon icon="iconamoon:search-light" />
            </div>
            <div className="search-categories">
                {
                    categoryList.map((item, index) => {
                        return <div
                            className={`item ${item === selectedCategory}`}
                            key={index}
                            onClick={() => { setSelecteCategory(item) }}>
                            {item}
                        </div>
                    })
                }

            </div>
            <div className="search-results">
                {fakeContacts.map((item, index) => {
                    return <User
                        item={item}
                        submit={
                            {
                                title: "مشاهده",
                                submitFunction: () => { }
                            }
                        } />
                })}

            </div>
        </div>
    )
}

export default Contacts
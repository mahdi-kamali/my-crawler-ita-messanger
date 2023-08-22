import { Icon } from "@iconify/react"
import { useState } from "react";
import Channel from "../../componetns/Channel";
import { FAKE_CHANNELS } from "../../consts/consts";

const Channels = () => {


    const fakeChannels = FAKE_CHANNELS

    const categoryList = [
        "همه",
        "کانال های خصوصی",
        "کانال های عمومی",
    ]
    const [selectedCategory, setSelecteCategory] = useState(categoryList[0])


    return (
        <div className="channels-tab">

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
                {fakeChannels.map((item, index) => {
                    return <Channel
                        item={item}
                        key={index}
                        submit={{
                            title: "مشاهده",
                            submitFunction: () => { alert("Clicked") }
                        }} />
                })}
            </div>
        </div>
    )
}

export default Channels
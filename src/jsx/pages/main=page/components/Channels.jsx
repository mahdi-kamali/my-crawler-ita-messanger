import { Icon } from "@iconify/react"
import { useState } from "react";
import Channel from "../../componetns/Channel";

const Channels = () => {


    const fakeChannels = [
        {
            name: "کانال تکنولوژی",
            link: "@tech_channel",
            description: "آخرین اخبار و تازه‌های دنیای تکنولوژی را در اینجا دنبال کنید.",
            membersCount: 23500,
            image: require("../../../../images/complex-search/channel/1.jpg")
        },
        {
            name: "کانال سفر و گردشگری",
            link: "@travel_lovers",
            description: "با ما به دنیای سفر بپیوندید و تجربیات جدیدی را از سراسر جهان بخواهید.",
            membersCount: 18750,
            image: require("../../../../images/complex-search/channel/2.jpg")

        },
        {
            name: "کانال طنز و شوخی",
            link: "@funny_jokes",
            description: "خنده‌دارترین شوخی‌ها و آنکدوت‌ها را در این کانال دنبال کنید.",
            membersCount: 28900,
            image: require("../../../../images/complex-search/channel/3.jpg")

        },
        {
            name: "کانال تکنولوژی",
            link: "@tech_channel",
            description: "آخرین اخبار و تازه‌های دنیای تکنولوژی را در اینجا دنبال کنید.",
            membersCount: 23500,
            image: require("../../../../images/complex-search/channel/1.jpg")
        },
        {
            name: "کانال سفر و گردشگری",
            link: "@travel_lovers",
            description: "با ما به دنیای سفر بپیوندید و تجربیات جدیدی را از سراسر جهان بخواهید.",
            membersCount: 18750,
            image: require("../../../../images/complex-search/channel/2.jpg")

        },
        {
            name: "کانال طنز و شوخی",
            link: "@funny_jokes",
            description: "خنده‌دارترین شوخی‌ها و آنکدوت‌ها را در این کانال دنبال کنید.",
            membersCount: 28900,
            image: require("../../../../images/complex-search/channel/3.jpg")

        },
        {
            name: "کانال تکنولوژی",
            link: "@tech_channel",
            description: "آخرین اخبار و تازه‌های دنیای تکنولوژی را در اینجا دنبال کنید.",
            membersCount: 23500,
            image: require("../../../../images/complex-search/channel/1.jpg")
        },
        {
            name: "کانال سفر و گردشگری",
            link: "@travel_lovers",
            description: "با ما به دنیای سفر بپیوندید و تجربیات جدیدی را از سراسر جهان بخواهید.",
            membersCount: 18750,
            image: require("../../../../images/complex-search/channel/2.jpg")

        },
        {
            name: "کانال طنز و شوخی",
            link: "@funny_jokes",
            description: "خنده‌دارترین شوخی‌ها و آنکدوت‌ها را در این کانال دنبال کنید.",
            membersCount: 28900,
            image: require("../../../../images/complex-search/channel/3.jpg")

        },
        // می‌توانید کانال‌های دیگری را ادامه دهید
    ];

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
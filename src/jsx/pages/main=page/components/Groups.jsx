import { Icon } from "@iconify/react"
import { useState } from "react";
import Group from "../../componetns/Group";

const Groups = () => {


    const fakeGroups = [
        {
            name: "گروه دوستانه",
            id: "@gb_friends",
            image: require("../../../../images/complex-search/groups/1.jpg"),
            bio: "این گروه برای دوستان و همراهان ایجاد شده است. ما در اینجا موضوعات مختلفی را بحث و گفتگو می‌کنیم و وقت خوبی داریم!",
            membersCount: 120
        },
        {
            name: "گروه فامیلی",
            id: "@family_group",
            image: require("../../../../images/complex-search/groups/2.jpg"),
            bio: "خوش آمدید به گروه فامیلی ما! اینجا فرصتی برای به اشتراک گذاشتن خاطرات، بحث در مورد خانواده و برنامه‌های آینده داریم.",
            membersCount: 85
        },
        {
            name: "گروه دانشجویان",
            id: "@uni_friends",
            image: require("../../../../images/complex-search/groups/3.jpg"),
            bio: "گروهی برای دانشجویان علاقه‌مند به یادگیری، مطالعه مشترک و تبادل اطلاعات در موضوعات تحصیلی و دانشگاهی.",
            membersCount: 230
        },
        // می‌توانید گروه‌های دیگر را ادامه دهید
    ];


    const categoryList = [
        "همه",
        "گروه های خصوصی",
        "گروه های عمومی",
    ]
    const [selectedCategory, setSelecteCategory] = useState(categoryList[0])


    return (
        <div className="groups-tab">

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
                {fakeGroups.map((item, index) => {
                    return <Group
                        item={item}
                        key={index}
                        submit={{
                            title :"مشاهده"
                        }} />
                })}
            </div>
        </div>
    )
}

export default Groups
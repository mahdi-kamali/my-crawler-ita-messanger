import { Icon } from "@iconify/react"
import { useState, useTransition } from "react"

const Contacts = () => {



    const categoryList = [
        "همه",
        "مخاطبین خودم",
        "گروه ها",
        "از کانال ها",
    ]


    const fakeContacts = [
        {
            name: "سارا احمدی",
            id: "@sara_ahmadi",
            image: require("../../../../images/complex-search/users/1.avif"),
            lastOnline: "2 ساعت پیش",
            lastChange: "دیروز",
            bio: "طراح گرافیک با علاقه به هنر و طبیعت. به اشتراک گذاری ایده‌ها و ابتکارهای خلاقانه در اینجا."
        },
        {
            name: "علی محمدی",
            id: "@ali_mohammadi",
            image: require("../../../../images/complex-search/users/2.jpg"),
            lastOnline: "4 ساعت پیش",
            lastChange: "دو روز پیش",
            bio: "عاشق کدنویسی و توسعه وب. در حال یادگیری تکنولوژی‌های جدید و به روز."
        },
        {
            name: "رامین رضایی",
            id: "@ramin_rezayi",
            image: require("../../../../images/complex-search/users/3.jpg"),
            lastOnline: "30 دقیقه پیش",
            lastChange: "امروز",
            bio: "علاقه‌مند به مسافرت و عکاسی. همیشه در جستجوی مناظر طبیعی دیدنی برای عکس‌برداری."
        },
        {
            name: "رامین رضایی",
            id: "@ramin_rezayi",
            image: require("../../../../images/complex-search/users/3.jpg"),
            lastOnline: "30 دقیقه پیش",
            lastChange: "امروز",
            bio: "علاقه‌مند به مسافرت و عکاسی. همیشه در جستجوی مناظر طبیعی دیدنی برای عکس‌برداری."
        },
        {
            name: "سارا احمدی",
            id: "@sara_ahmadi",
            image: require("../../../../images/complex-search/users/1.avif"),
            lastOnline: "2 ساعت پیش",
            lastChange: "دیروز",
            bio: "طراح گرافیک با علاقه به هنر و طبیعت. به اشتراک گذاری ایده‌ها و ابتکارهای خلاقانه در اینجا."
        },
        {
            name: "علی محمدی",
            id: "@ali_mohammadi",
            image: require("../../../../images/complex-search/users/2.jpg"),
            lastOnline: "4 ساعت پیش",
            lastChange: "دو روز پیش",
            bio: "عاشق کدنویسی و توسعه وب. در حال یادگیری تکنولوژی‌های جدید و به روز."
        },
        {
            name: "رامین رضایی",
            id: "@ramin_rezayi",
            image: require("../../../../images/complex-search/users/3.jpg"),
            lastOnline: "30 دقیقه پیش",
            lastChange: "امروز",
            bio: "علاقه‌مند به مسافرت و عکاسی. همیشه در جستجوی مناظر طبیعی دیدنی برای عکس‌برداری."
        },
        {
            name: "رامین رضایی",
            id: "@ramin_rezayi",
            image: require("../../../../images/complex-search/users/3.jpg"),
            lastOnline: "30 دقیقه پیش",
            lastChange: "امروز",
            bio: "علاقه‌مند به مسافرت و عکاسی. همیشه در جستجوی مناظر طبیعی دیدنی برای عکس‌برداری."
        },
        {
            name: "سارا احمدی",
            id: "@sara_ahmadi",
            image: require("../../../../images/complex-search/users/1.avif"),
            lastOnline: "2 ساعت پیش",
            lastChange: "دیروز",
            bio: "طراح گرافیک با علاقه به هنر و طبیعت. به اشتراک گذاری ایده‌ها و ابتکارهای خلاقانه در اینجا."
        },
        {
            name: "علی محمدی",
            id: "@ali_mohammadi",
            image: require("../../../../images/complex-search/users/2.jpg"),
            lastOnline: "4 ساعت پیش",
            lastChange: "دو روز پیش",
            bio: "عاشق کدنویسی و توسعه وب. در حال یادگیری تکنولوژی‌های جدید و به روز."
        },
        {
            name: "رامین رضایی",
            id: "@ramin_rezayi",
            image: require("../../../../images/complex-search/users/3.jpg"),
            lastOnline: "30 دقیقه پیش",
            lastChange: "امروز",
            bio: "علاقه‌مند به مسافرت و عکاسی. همیشه در جستجوی مناظر طبیعی دیدنی برای عکس‌برداری."
        },
        {
            name: "رامین رضایی",
            id: "@ramin_rezayi",
            image: require("../../../../images/complex-search/users/3.jpg"),
            lastOnline: "30 دقیقه پیش",
            lastChange: "امروز",
            bio: "علاقه‌مند به مسافرت و عکاسی. همیشه در جستجوی مناظر طبیعی دیدنی برای عکس‌برداری."
        },
    ];




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
                            className={`item ${item === selectedCategory}`} key={index}
                            onClick={() => { setSelecteCategory(item) }}>
                            {item}
                        </div>
                    })
                }

            </div>
            <div className="search-results">
                {fakeContacts.map((item, index) => {
                    return <div
                        className="item"
                        key={index}
                    >
                        <div className="item-header">
                            <img src={item.image} alt="" />
                            <div className="name property">
                                <span>{item.name}</span>
                            </div>
                        </div>
                        <div className="item-body">

                            <div className="id property">
                                <span>{item.id}</span>
                                <Icon icon="bxs:id-card" />
                            </div>
                            <div className="last-seen property">
                                <span>{item.lastOnline}     </span>
                                <Icon icon="heroicons-solid:status-online" />
                            </div>
                            <div className="change property">
                                <span>
                                    {item.lastChange}
                                </span>
                                <Icon icon="material-symbols:change-circle" />
                            </div>
                            <div className="bio property">
                                <p>
                                    {item.bio}
                                </p>
                                <Icon icon="ep:info-filled" />
                            </div>
                        </div>
                        <div className="item-buttons">

                            <button>
                                <Icon icon="ic:baseline-share" />
                            </button>
                            <button>
                                <Icon icon="icon-park-outline:like" />
                            </button>
                            <button className="success">

                                <span>
                                    مشاهده
                                </span>
                                <Icon icon="ic:round-grid-view" />
                            </button>

                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Contacts
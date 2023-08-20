import { Icon } from "@iconify/react"
import { useEffect, useState, useTransition } from "react"
import User from "../../componetns/User";

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
            name: "رضا کریمی",
            id: "@reza_karimi",
            image: require("../../../../images/complex-search/users/4.jpg"),
            lastOnline: "1 ساعت پیش",
            lastChange: "دیروز",
            bio: "متخصص IT با علاقه به حل مسائل پیچیده. عاشق ورزش و موسیقی."
        },
        {
            name: "مریم حسینی",
            id: "@maryam_hosseini",
            image: require("../../../../images/complex-search/users/5.jpg"),
            lastOnline: "5 ساعت پیش",
            lastChange: "یک هفته پیش",
            bio: "دانشجوی رشته‌ی معماری با عشق به طراحی داخلی و ایده‌پردازی."
        },
        {
            name: "محمد رحیمی",
            id: "@mohammad_rahimi",
            image: require("../../../../images/complex-search/users/6.jpg"),
            lastOnline: "20 دقیقه پیش",
            lastChange: "دیروز",
            bio: "برنامه‌نویس Python با علاقه به یادگیری الگوریتم‌ها و حل مسائل چالش‌برانگیز."
        },
        {
            name: "نازنین عبداللهی",
            id: "@nazanin_abdollahi",
            image: require("../../../../images/complex-search/users/7.jpg"),
            lastOnline: "3 ساعت پیش",
            lastChange: "امروز",
            bio: "مدرس زبان انگلیسی با علاقه به مطالعه، موسیقی و گردشگری."
        },
        {
            name: "علی اکبری",
            id: "@ali_akbari",
            image: require("../../../../images/complex-search/users/9.jpg"),
            lastOnline: "15 دقیقه پیش",
            lastChange: "دو روز پیش",
            bio: "دانشجوی مهندسی برق علاقه‌مند به الکترونیک و انجام پروژه‌های الکترونیکی."
        },
        {
            name: "فاطمه موسوی",
            id: "@fatemeh_mousavi",
            image: require("../../../../images/complex-search/users/8.jpg"),
            lastOnline: "6 ساعت پیش",
            lastChange: "یک هفته پیش",
            bio: "علاقه‌مند به نوشتن داستان کوتاه و شعر. به دنبال یافتن الهام در زندگی روزمره."
        },
        {
            name: "حسین جعفری",
            id: "@hosein_jafari",
            image: require("../../../../images/complex-search/users/10.jpg"),
            lastOnline: "10 دقیقه پیش",
            lastChange: "دیروز",
            bio: "شغوف به تاریخ و فرهنگ‌های مختلف. دوست دارم جهان را بپیمایم و تجربیات جدیدی کسب کنم."
        },
        // دیگر مخاطبان...
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
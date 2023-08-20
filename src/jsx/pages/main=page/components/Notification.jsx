import { Icon } from "@iconify/react"
import { useState } from "react"

const Notification = () => {


    const categoryList = [
        "همه",
        " اعلان برای انلاین شدن کاربر",
        " اعلان برای دریافت پیام از گروه",
        " اعلان برای دریافت پیام از کانال",
    ]



    const [selectedCategory, setSelecteCategory] = useState(categoryList[0])


    const fakeSearchResults = [
        {
            name: "مهدی رضایی",
            status: "موفق",
            id: 2500,
            image: require("../../../../images/notification/1.jpg"),
            category: "اعلان برای انلاین شدن کاربر",
            description: "کاوش اخیر شما در باره گروه (گپ دوستانه) به پایان رسیده است و برای مشاهده به دکمه ی زیر کلیک کنید"
        },
        {
            name: "گروه دوستان دانشجویی",
            status: "موفق",
            id: 2501,
            image: require("../../../../images/notification/2.jpg"),
            category: "اعلان برای دریافت پیام از گروه",
            description: "324 پیام در این گروه دریافت شده"
        },
        {
            name: "کانال رمز ارز",
            status: "موفق",
            id: 2502,
            image: require("../../../../images/notification/3.jpg"),
            category: "اعلان برای دریافت پیام از کانال",
            description: "120 پیام در این کانال دریافت شده"
        },
        {
            name: "دوره آموزشی برنامه‌نویسی",
            status: "منتشر شده",
            id: 2503,
            image: require("../../../../images/notification/4.jpg"),
            category: "اعلان برای شرکت در دوره",
            description: "یک دوره آموزشی جدید در موضوع برنامه‌نویسی به شما پیشنهاد شده است."
        },
        {
            name: "تالار گفتگوی علمی",
            status: "فعال",
            id: 2504,
            image: require("../../../../images/notification/5.jpg"),
            category: "اعلان برای عضویت در تالار",
            description: "به تالار گفتگوی علمی بپیوندید و در گفتارهای موضوعی شرکت کنید."
        },
        {
            name: "کتابخانه دیجیتال",
            status: "منتشر شده",
            id: 2505,
            image: require("../../../../images/notification/6.jpg"),
            category: "اعلان برای دسترسی به منابع",
            description: "کتاب‌ها، مقالات و منابع دیگر در کتابخانه دیجیتال در دسترس شماست."
        },
        {
            name: "پروژه تیمی تحقیقاتی",
            status: "در حال اجرا",
            id: 2506,
            image: require("../../../../images/notification/7.jpg"),
            category: "اعلان برای شرکت در پروژه",
            description: "یک پروژه تیمی تحقیقاتی در زمینه علوم اجتماعی به دنبال شرکت‌کنندگان است."
        },
        {
            name: "گالری هنر معاصر",
            status: "بازدید",
            id: 2507,
            image: require("../../../../images/notification/8.jpg"),
            category: "اعلان برای بازدید از گالری",
            description: "گالری هنر معاصر در این دوره به نمایش گذاشته شده است. منتظر حضور شما هستیم."
        },
        {
            name: "دوره آشپزی حرفه‌ای",
            status: "در حال ثبت‌نام",
            id: 2508,
            image: require("../../../../images/notification/9.jpg"),
            category: "اعلان برای ثبت‌نام در دوره",
            description: "دوره‌ای برای آشنایی با تکنیک‌ها و مهارت‌های آشپزی حرفه‌ای در دسترس شماست."
        },
        {
            name: "تور گردشگری کویر",
            status: "برنامه‌ریزی شده",
            id: 2509,
            image: require("../../../../images/notification/10.jpg"),
            category: "اعلان برای ثبت‌نام در تور",
            description: "یک تور گردشگری به کویر در تاریخ مشخص برگزار می‌شود. ثبت‌نام خود را انجام دهید."
        },
    ];



    return (
        <div className="notifications-tab">
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
            <div className="search-filter">
                <div className="filter-group">
                    <label className="right ">
                        <span>از تاریخ : </span>
                        <input type="date" />
                    </label>
                    <label className="left">
                        <span>تا تاریخ : </span>
                        <input type="date" />
                    </label>
                </div>
                <div className="filter-group">
                    <label className="right ">
                        <span>از زمان : </span>
                        <input type="time" />
                    </label>
                    <label className="left">
                        <span>تا زمان : </span>
                        <input type="time" />
                    </label>
                </div>
                <div className="filter-group">
                    <label className="right ">
                        <span>وضعیت</span>
                        <select >
                            <option value="موفق">
                                موفق
                            </option>
                            <option value="موفق">
                                ناموفق
                            </option>
                            <option value="موفق">
                                در حال پردازش
                            </option>
                            <option value="موفق">
                                تعلیق سرور
                            </option>
                        </select>
                    </label>
                    <label className="left">

                    </label>
                </div>
                <div className="filter-submit">
                    <button>
                        تنظیم کن
                    </button>
                </div>
            </div>

            <div className="search-results">
                {
                    fakeSearchResults.map((item, index) => {
                        return <div
                            className="item"
                            key={index}>
                            <div className="item-header">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="item-body">
                                <div className="name">
                                    {item.name}
                                </div>
                                <div className="status">
                                    <span>
                                        <Icon icon="fluent-mdl2:sync-status-solid" />
                                        وضعیت :
                                    </span>
                                    <span>
                                        {item.status}
                                    </span>
                                </div>
                                <div className="id">
                                    <span>
                                        <Icon icon="ooui:special-character" />                                        شناسه :
                                    </span>
                                    <span>
                                        {item.id}
                                    </span>
                                </div>
                                <div className="type">
                                    <span>
                                        <Icon icon="lucide:file-type-2" />
                                    </span>
                                    <span>
                                        {item.category}
                                    </span>
                                </div>
                                <div className="description">
                                    <span>
                                        <Icon icon="ant-design:message-filled" />
                                    </span>
                                    <span>
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                            <div className="item-buttons">
                                <button className="submit">
                                    <Icon icon="carbon:view-filled" />
                                    مشاده
                                </button>
                            </div>
                        </div>
                    })
                }

            </div>

        </div>
    )
}

export default Notification
import React, { useEffect, useState } from 'react'
import User from '../../componetns/User';
import Group from '../../componetns/Group';
import Channel from '../../componetns/Channel';

const CreateNotification = () => {





    const categoriesList = [
        "ایجاد اعلان برای انلاین شدن کاربر",
        "ایجاد اعلان برای دریافت پیام از گروه",
        "ایجاد اعلان برای دریافت پیام از کانال",
    ]
    const [selectedCategory, setSelectedCategory] = useState(categoriesList[0])


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




    const [selectedContact, setSelectedContact] = useState(fakeContacts[0])


    const [selectedGroup, setSelectedGroup] = useState(fakeGroups[0])


    const [selectedChannel, setSelectedChannel] = useState(fakeChannels[0])




    return (
        <div className="create-notification-tab">
            <div className="categories">
                {categoriesList.map((item, index) => {
                    return <div
                        className={`item ${item === selectedCategory}`}
                        key={index}
                        onClick={() => { setSelectedCategory(item) }}>
                        {item}
                    </div>
                })}
            </div>
            <div className="results">
                {
                    selectedCategory === categoriesList[0] ? <div className="contacts">
                        {fakeContacts.map((item, index) => {
                            return <User
                                item={item}
                                key={index}
                                selected={item.id === selectedContact.id}
                                submit={
                                    {
                                        title: "انتخاب",
                                        submitFunction: () => setSelectedContact(item)
                                    }
                                }
                            />
                        })}
                    </div> : ""
                }

                {
                    selectedCategory === categoriesList[1] ? <div className="groups">
                        {fakeGroups.map((item, index) => {
                            return <Group
                                item={item}
                                key={index}
                                selected={selectedGroup.id === item.id}
                                submit={{
                                    title: "انتخاب",
                                    submitFunction: () => { setSelectedGroup(item) }
                                }} />
                        })}
                    </div> : ""
                }


                {
                    selectedCategory === categoriesList[2] ? <div className="groups">
                        {fakeChannels.map((item, index) => {
                            return <Channel
                                item={item}
                                key={index}
                                selected={selectedChannel.link === item.link}
                                submit={{
                                    title: "انتخاب",
                                    submitFunction: () => {
                                        setSelectedChannel(item)
                                    }
                                }} />
                        })}
                    </div> : ""
                }

            </div>
        </div>
    )
}

export default CreateNotification
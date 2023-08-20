import { Icon } from "@iconify/react";
import { useState } from "react";

const Files = () => {



    const fakeChats = [
        {
            messageId: "msg211",
            type: "عکس ها",
            content: {
                imageUrl: "https://example.com/images/image8.jpg",
                caption: "منظره‌ی زیبای جنگل",
                downloadUrl: "https://example.com/downloads/image8.jpg"
            },
            timestamp: "2023-08-22T10:00:00Z"
        },
        {
            messageId: "msg212",
            type: "متفرقه",
            content: {
                text: "به روزرسانی جدید نرم‌افزار در دسترس است.",
            },
            timestamp: "2023-08-22T11:30:00Z"
        },
        {
            messageId: "msg213",
            type: "فیلم ها",
            content: {
                text: "برترین فیلم‌های این هفته را تماشا کنید!",
                downloadUrl: "https://example.com/downloads/film6.mp4"
            },
            timestamp: "2023-08-22T12:45:00Z"
        },
        {
            messageId: "msg214",
            type: "گیف ها",
            content: {
                imageUrl: "https://example.com/images/gif4.gif",
                caption: "یک گیف خنده‌دار",
                downloadUrl: "https://example.com/downloads/gif4.gif"
            },
            timestamp: "2023-08-22T14:15:00Z"
        },
        {
            messageId: "msg215",
            type: "متفرقه",
            content: {
                text: "تصاویر جدید از کنسرت اخیر برایتان آماده شده است.",
            },
            timestamp: "2023-08-22T15:30:00Z"
        },
        {
            messageId: "msg216",
            type: "عکس ها",
            content: {
                imageUrl: "https://example.com/images/image9.jpg",
                caption: "غروب زیبای ساحل",
                downloadUrl: "https://example.com/downloads/image9.jpg"
            },
            timestamp: "2023-08-23T09:00:00Z"
        },
        {
            messageId: "msg217",
            type: "داکیومنت ها",
            content: {
                text: "پیشنهادات جدید برای بهبود شهر",
                downloadUrl: "https://example.com/downloads/proposal.docx"
            },
            timestamp: "2023-08-23T10:45:00Z"
        },
        {
            messageId: "msg218",
            type: "فیلم ها",
            content: {
                text: "فیلم داستانی پرهیجان را تماشا کنید.",
                downloadUrl: "https://example.com/downloads/film7.mp4"
            },
            timestamp: "2023-08-23T11:30:00Z"
        },
        {
            messageId: "msg219",
            type: "متفرقه",
            content: {
                text: "آیا نظری درباره رویداد آینده دارید؟",
            },
            timestamp: "2023-08-23T12:15:00Z"
        },
        {
            messageId: "msg220",
            type: "متفرقه",
            content: {
                text: "شما را به نمایشگاه هنری دعوت می‌کنیم.",
            },
            timestamp: "2023-08-23T14:00:00Z"
        },
        // مثال‌های بیشتر...
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



    const categoryList = [
        "عکس ها",
        "داکیومنت ها",
        "فیلم ها",
        "گیف ها",
        "متفرقه",
    ]
    const [selectedCategory, setSelecteCategory] = useState(categoryList[0])


    const chats = [
        {
            "chatId": "chat123",
            "messages": [
                {
                    "messageId": "msg101",
                    "type": "image",
                    "content": {
                        "imageUrl": "https://example.com/images/image1.jpg",
                        "caption": "A sunny day at the park"
                    },
                    "timestamp": "2023-08-20T12:34:56Z"
                },
                {
                    "messageId": "msg102",
                    "type": "image",
                    "content": {
                        "imageUrl": "https://example.com/images/image2.jpg",
                        "caption": "Delicious homemade meal!"
                    },
                    "timestamp": "2023-08-20T13:45:00Z"
                },
                {
                    "messageId": "msg103",
                    "type": "text",
                    "content": {
                        "text": "How was your day?"
                    },
                    "timestamp": "2023-08-20T14:15:30Z"
                }
            ]
        },
        {
            "chatId": "chat456",
            "messages": [
                {
                    "messageId": "msg201",
                    "type": "text",
                    "content": {
                        "text": "Did you watch that movie?"
                    },
                    "timestamp": "2023-08-21T09:30:00Z"
                },
                {
                    "messageId": "msg202",
                    "type": "text",
                    "content": {
                        "text": "Yeah, it was awesome!"
                    },
                    "timestamp": "2023-08-21T09:35:00Z"
                }
            ]
        }
    ]








    return (
        <div className="files-tab">
            {/* <div className="search-box">
                <input type="text" name="search" placeholder="جستجو کنید...." />
                <Icon icon="iconamoon:search-light" />
            </div> */}
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

            </div>
        </div>
    )
}

export default Files
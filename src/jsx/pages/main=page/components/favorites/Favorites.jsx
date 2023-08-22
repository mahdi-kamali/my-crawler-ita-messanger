import { useMemo, useState } from "react"
import { FAKE_CHANNELS, FAKE_CONTACS, FAKE_DOCUEMNTS, FAKE_GROUPS } from "../../../consts/consts"
import User from "../../../componetns/User"
import Channel from "../../../componetns/Channel"
import Group from "../../../componetns/Group"

const Favorites = () => {



    const categoryList = [
        "مخاطبان",
        "کانال ها",
        "گروه ها",
        "فایل ها",
    ]
    const [selectedCategory, setSelecteCategory] = useState(categoryList[0])

    const fakeUsers = FAKE_CONTACS
    const fakeChannels = FAKE_CHANNELS
    const fakeGroups = FAKE_GROUPS
    const fakeDocuments = FAKE_DOCUEMNTS


    const sortedList = useMemo(() => {
        switch (selectedCategory) {
            case categoryList[0]: {
                return <div className="users">
                    {fakeUsers.map(((item, index) => {
                        return <User
                            item={item}
                            key={index}
                            submit={{
                                title: "مشاهده",
                                submitFunction: () => alert("ok")
                            }} />
                    }))}
                </div>
            }
            case categoryList[1]: {
                return <div className="channels">
                    {
                        fakeChannels.map((item, index) => {
                            return <Channel
                                item={item}
                                key={index}
                                submit={{
                                    title: "مشاهده",
                                    submitFunction: () => { alert("ok") }
                                }}
                            />
                        })
                    }
                </div>
            }
            case categoryList[2]: {
                return <div className="groups">
                    {fakeGroups.map((item, index) => {
                        return <Group
                            item={item}
                            key={index}
                            submit={{
                                title: "نمایش",
                                submitFunction: () => alert("ok")
                            }} />
                    })}
                </div>
            }
            case categoryList[3]: {
                return <div className="documents">
                    {fakeDocuments.map((item, index) => {

                    })}
                </div>
            }
        }

    }, [selectedCategory])


    return (
        <div className="favorites-tab">
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
                {sortedList}



            </div>
        </div>
    )
}

export default Favorites
import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";
import { FAKE_CHANNELS, FAKE_CHATS, FAKE_CONTACS, FAKE_DOCUEMNTS, FAKE_GROUPS, FAKE_IMAGES, FAKE_VIDEOS } from "../../../consts/consts";
import ImageFile from "./ImageFile";
import VideoFile from "./VideoFile";
import DocumentFile from "./DocumentFile";

const Files = () => {

    const sourceList = [
        "همه",
        "کاربران",
        "گروه ها",
        "کانال ها",
        "ربات ها",
    ]

    const categoryList = [
        "عکس ها",
        "داکیومنت ها",
        "فیلم ها",
        "گیف ها",
        "متفرقه",
    ]

    const fakeImages = FAKE_IMAGES


    const fakeVideos = FAKE_VIDEOS

    const fakeDocuments = FAKE_DOCUEMNTS


    const fakeContacts = FAKE_CONTACS


    const fakeChannels = FAKE_CHANNELS


    const fakeGroups = FAKE_GROUPS




    //  Images 
    const fakeImageChats = []



    fakeChannels.forEach((item, index) => {
        fakeImageChats.push({
            channel: "",
            receivedFrom: "",
            sender: "",
            content: "",
            type: ""
        })
        fakeImageChats[fakeImageChats.length - 1].channel = item
        fakeImageChats[fakeImageChats.length - 1].receivedFrom = sourceList[3]

        fakeImageChats[fakeImageChats.length - 1].sender = fakeContacts[index]
        fakeImageChats[fakeImageChats.length - 1].content = {
            image: fakeImages[index],
            downloadUrl: fakeImages[index]
        }
        fakeImageChats[fakeImageChats.length - 1].type = categoryList[0]
    })


    fakeGroups.forEach((item, index) => {
        fakeImageChats.push({
            channel: "",
            receivedFrom: "",
            sender: "",
            content: "",
            type: ""
        })
        fakeImageChats[fakeImageChats.length - 1].group = item
        fakeImageChats[fakeImageChats.length - 1].receivedFrom = sourceList[2]

        fakeImageChats[fakeImageChats.length - 1].sender = fakeContacts[index]
        fakeImageChats[fakeImageChats.length - 1].content = {
            image: fakeImages[index],
            downloadUrl: fakeImages[index]
        }
        fakeImageChats[fakeImageChats.length - 1].type = categoryList[0]
    })

    fakeContacts.forEach((item, index) => {
        fakeImageChats.push({
            channel: "",
            receivedFrom: "",
            sender: "",
            content: "",
            type: ""
        })
        fakeImageChats[fakeImageChats.length - 1].group = ""
        fakeImageChats[fakeImageChats.length - 1].receivedFrom = sourceList[1]

        fakeImageChats[fakeImageChats.length - 1].sender = item
        fakeImageChats[fakeImageChats.length - 1].content = {
            image: fakeImages[index],
            downloadUrl: fakeImages[index]
        }
        fakeImageChats[fakeImageChats.length - 1].type = categoryList[0]
    })

    // ENd Images





    // Videos
    const fakeVideoChats = []

    fakeChannels.forEach((item, index) => {
        fakeVideoChats.push({
            channel: "",
            receivedFrom: "",
            sender: "",
            content: "",
            type: ""
        })
        fakeVideoChats[fakeVideoChats.length - 1].channel = item
        fakeVideoChats[fakeVideoChats.length - 1].receivedFrom = sourceList[3]

        fakeVideoChats[fakeVideoChats.length - 1].sender = fakeContacts[index]
        fakeVideoChats[fakeVideoChats.length - 1].content = fakeVideos[index]
        fakeVideoChats[fakeVideoChats.length - 1].type = categoryList[2]
    })

    fakeGroups.forEach((item, index) => {
        fakeVideoChats.push({
            channel: "",
            receivedFrom: "",
            sender: "",
            content: "",
            type: ""
        })
        fakeVideoChats[fakeVideoChats.length - 1].group = item
        fakeVideoChats[fakeVideoChats.length - 1].receivedFrom = sourceList[2]

        fakeVideoChats[fakeVideoChats.length - 1].sender = fakeContacts[index]
        fakeVideoChats[fakeVideoChats.length - 1].content = fakeVideos[index]

        fakeVideoChats[fakeVideoChats.length - 1].type = categoryList[2]
    })

    fakeContacts.forEach((item, index) => {
        fakeVideoChats.push({
            channel: "",
            receivedFrom: "",
            sender: "",
            content: "",
            type: ""
        })
        fakeVideoChats[fakeVideoChats.length - 1].group = ""
        fakeVideoChats[fakeVideoChats.length - 1].receivedFrom = sourceList[1]

        fakeVideoChats[fakeVideoChats.length - 1].sender = item
        fakeVideoChats[fakeVideoChats.length - 1].content = fakeVideos[index]

        fakeVideoChats[fakeVideoChats.length - 1].type = categoryList[2]
    })

    // END Videos





    // Docuemnts

    const fakeDocuemntChats = []

    fakeChannels.forEach((item, index) => {
        fakeDocuemntChats.push({
            channel: "",
            receivedFrom: "",
            sender: "",
            content: "",
            type: ""
        })
        fakeDocuemntChats[fakeDocuemntChats.length - 1].channel = item
        fakeDocuemntChats[fakeDocuemntChats.length - 1].receivedFrom = sourceList[3]

        fakeDocuemntChats[fakeDocuemntChats.length - 1].sender = fakeContacts[index]
        fakeDocuemntChats[fakeDocuemntChats.length - 1].content = fakeDocuments[index]
        fakeDocuemntChats[fakeDocuemntChats.length - 1].type = categoryList[1]
    })


    fakeGroups.forEach((item, index) => {
        fakeDocuemntChats.push({
            channel: "",
            receivedFrom: "",
            sender: "",
            content: "",
            type: ""
        })
        fakeDocuemntChats[fakeDocuemntChats.length - 1].group = item
        fakeDocuemntChats[fakeDocuemntChats.length - 1].receivedFrom = sourceList[2]

        fakeDocuemntChats[fakeDocuemntChats.length - 1].sender = fakeContacts[index]
        fakeDocuemntChats[fakeDocuemntChats.length - 1].content = fakeDocuments[index]
        fakeDocuemntChats[fakeDocuemntChats.length - 1].type = categoryList[1]
    })

    fakeContacts.forEach((item, index) => {
        fakeDocuemntChats.push({
            channel: "",
            receivedFrom: "",
            sender: "",
            content: "",
            type: ""
        })
        fakeDocuemntChats[fakeDocuemntChats.length - 1].receivedFrom = sourceList[1]

        fakeDocuemntChats[fakeDocuemntChats.length - 1].sender = item
        fakeDocuemntChats[fakeDocuemntChats.length - 1].content = fakeDocuments[index]
        fakeDocuemntChats[fakeDocuemntChats.length - 1].type = categoryList[1]
    })




    console.log(fakeDocuemntChats);



    const [selectedCategory, setSelecteCategory] = useState(categoryList[0])

    const [selectedSource, setSelecteSource] = useState(sourceList[0])







    const sortedImageFiles = useMemo(() => {
        if (selectedSource === sourceList[0]) {
            return fakeImageChats
        } else {
            const results = fakeImageChats.filter(item => item.receivedFrom == selectedSource)
            return results
        }
    }, [selectedSource])





    const sortedVideoFiles = useMemo(() => {
        if (selectedSource === sourceList[0]) {
            return fakeVideoChats
        } else {
            const results = fakeVideoChats.filter(item => item.receivedFrom == selectedSource)
            return results
        }
    }, [selectedSource])



    const sortedDocuemts = useMemo(() => {
        if (selectedSource === sourceList[0]) {
            return fakeDocuemntChats
        } else {
            const results = fakeDocuemntChats.filter(item => item.receivedFrom == selectedSource)
            return results
        }
    }, [selectedSource])





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
            <div className="search-categories">
                {
                    sourceList.map((item, index) => {
                        return <div
                            className={`item ${item === selectedSource}`}
                            key={index}
                            onClick={() => { setSelecteSource(item) }}>
                            {item}
                        </div>
                    })
                }
            </div>
            <div className="search-results">
                {
                    selectedCategory === categoryList[0] ?
                        <div className="images">
                            {
                                sortedImageFiles.map((item, index) => {
                                    return <ImageFile
                                        item={item}
                                        key={index}
                                        sourceList={sourceList}
                                    />
                                })
                            }




                        </div> : ""
                }

                {
                    selectedCategory === categoryList[2] ?
                        <div className="videos">
                            {
                                sortedVideoFiles.map((item, index) => {
                                    return <VideoFile
                                        item={item}
                                        key={index}
                                        sourceList={sourceList}
                                    />
                                })
                            }




                        </div> : ""
                }

                {
                    selectedCategory === categoryList[1] ?
                        <div className="documents">
                            {
                                sortedDocuemts.map((item, index) => {
                                    return <DocumentFile
                                        item={item}
                                        key={index}
                                        sourceList={sourceList}
                                    />
                                })
                            }




                        </div> : ""
                }
            </div>
        </div>
    )
}

export default Files
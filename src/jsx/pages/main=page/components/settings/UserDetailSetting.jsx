import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const UserDetailSetting = () => {


    const handleOnChangeSubmit = (e) => {
        e.preventDefault()
    }


    function textInput(svg, label, inputName) {
        return <div className="form-group">
            <label>
                <span>
                    {label}
                </span>
                {svg}
            </label>
            <input type="text" name={inputName} />

        </div>
    }


    function ImageInput() {


        const [src, setSrc] = useState(require("../../../../../images/header/avatar.jpg"))
        const onImageChange = (e) => {
            const file = e.target.files[0]
            const fileReader = new FileReader()
            fileReader.onload = (e) => {
                setSrc(e.target.result)
            }
            fileReader.readAsDataURL(file)
        }

        return <div className="form-image">
            <img src={src} alt="" />
            <input type="file" name='image' onChange={onImageChange} />
        </div>
    }


    return (
        <form
            className='user-detail-tab'
            action='#'
            onSubmit={handleOnChangeSubmit}>
            <div className="form-body">

                {
                    textInput(
                        <Icon icon="solar:user-bold" />,
                        " نام و نام خانوادگی",
                        "user"
                    )
                }

                {
                    textInput(
                        <Icon icon="material-symbols:description" />,
                        "مشخصات",
                        "bio"
                    )
                }



                {
                    textInput(
                        <Icon icon="bi:phone-fill" />,
                        "شماره تلفن",
                        "phone-number"
                    )
                }

{
                    textInput(
                        <Icon icon="bxs:id-card" />,
                        "شناسه کاربری (ID)",
                        "id"
                    )
                }

                {
                    ImageInput()
                }

                <div className="form-buttons">
                    <button className='submit'>
                        <span>
                            ثبت اطلاعات
                        </span>
                        <Icon icon="formkit:submit" />
                    </button>
                </div>

            </div>



        </form>
    )
}

export default UserDetailSetting
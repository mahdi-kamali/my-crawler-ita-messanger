import { Icon } from '@iconify/react'
import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="left">
                <div className="log-out">
                    <button>
                        <span>خروج</span>
                        <Icon icon="solar:exit-bold" />
                    </button>
                </div>
            </div>
            <div className="mid"></div>
            <div className="right">
                <div className="user">
                    <div className="info">
                        <h1>نام کاربر</h1>
                        <small>کاربر عادی</small>
                    </div>
                    <div className="image">
                        <img src={require("../../images/header/avatar.jpg")} alt="" />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header
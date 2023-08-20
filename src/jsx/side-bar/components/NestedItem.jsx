import React, { useState } from 'react'
import NormalItem from './NormalItem';

const NestedItem = ({ item, selected, setSelected }) => {

    const [state, setState] = useState(false)



    return (
        <ul
            className={`nested-item`}
        >
            <div
                className="item-header"
                onClick={() => { setState(!state) }}
            >
                <span>
                    {item.title}
                </span>
                {item.svg}
            </div>


            <div className={`item-body ${state ? "expand" : ""}`}>
                <div className="childs">
                    {item.childs.map((child, index) => {
                        return <li
                            className={`child ${child.title === selected.title}`}
                            onClick={() => { setSelected(child) }}
                        >
                            <span>
                                {child.title}
                            </span>
                            {child.svg}
                        </li>
                    })}
                </div>
            </div>


        </ul>
    )
}

export default NestedItem
import { Icon } from "@iconify/react"
import { useState } from "react"

const DashboardSetting = () => {









  function onColorInputChange(e) {
    const color = e.target.value
    document.querySelector(".App").style.setProperty("--primary",color )
  }






  return (
    <div className="setting-tab">

      <div className="group">
        <div className="header">
          <h2>رنگ داشبورد</h2>
          <Icon icon="mdi:color" />
        </div>
        <div className="body">
          <input
            type="color"
            defaultValue={"black"}
            onChange={onColorInputChange}
          />
        </div>
      </div>
    </div>
  )
}

export default DashboardSetting
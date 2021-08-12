import React, { useState } from "react";


import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

const Sidebar = () => {
    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    }

    return (
        <>
            <div id="sidebar">
 
                <ProSidebar collapsed={menuCollapse}>
                <SidebarHeader>
                <div className="logotext">

                    <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
                    </div>
                    <div className="closemenu" onClick={menuIconClick}>
                    {menuCollapse ? (
                        <FiArrowRightCircle/>
                    ) : (
                        <FiArrowLeftCircle/>
                    )}
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem active={true} icon={<FiHome />}>
                            Home
                        </MenuItem>
                        <MenuItem icon={<FaList />}></MenuItem>
                        <MenuItem icon={<FaRegHeart />}>Favorites</MenuItem>
                    </Menu>
                </SidebarContent>
                </ProSidebar>
            </div>
        </>
    )
}


export default Sidebar
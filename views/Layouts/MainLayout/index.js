import React from 'react';
import {Menu} from "antd";
import useContainer from "./hook";

const MainLayout = ({children}) => {
    const {inlineCollapsed, menuItems, onMouseEnter, onMouseLeave} = useContainer();

    return (
        <>
            <div className='main-layout'>
                <div className='nav-bar' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <div className="bar-items">
                        <Menu
                            className='menu'
                            defaultSelectedKeys={['/']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={inlineCollapsed}
                            items={menuItems}
                        />
                    </div>
                </div>
                <div className='container'>
                    {children}
                </div>
            </div>
            {!inlineCollapsed && <div className='navigation-background'/>}
        </>
    );
};

export default MainLayout;

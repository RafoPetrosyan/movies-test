import React, {useState} from "react";
import Image from "next/image";
import searchIcon from "assets/icons/searchIcon.png";
import homeIcon from "assets/icons/homeIcon.png";
import videoIcon from "assets/icons/videoIcon.png";
import reelsIcon from "assets/icons/reelsIcon.png";
import actorsIcon from "assets/icons/actorsIcon.png";
import reloadIcon from "assets/icons/reloadIcon.png";

const menuItems = [
    {
        label: 'Search',
        key: '/search',
        icon: <Image src={searchIcon} alt='icon' width={30} height={30}/>
    },
    {
        label: 'Home',
        key: '/',
        icon: <Image src={homeIcon} alt='icon' width={30} height={30}/>
    },
    {
        label: 'TV Shows',
        key: 'tv-shows',
        icon: <Image src={videoIcon} alt='icon' width={30} height={30}/>
    },
    {
        label: 'Movies',
        key: 'movies',
        icon: <Image src={reelsIcon} alt='icon' width={30} height={30}/>
    },
    {
        label: 'Genres',
        key: 'genres',
        icon: <Image src={actorsIcon} alt='icon' width={30} height={30}/>
    },
    {
        label: 'Watch Later',
        key: 'watch-later',
        icon: <Image src={reloadIcon} alt='icon' width={30} height={30}/>
    },
]

function useContainer() {
    const [inlineCollapsed, setInlineCollapsed] = useState(true);

    const onMouseLeave = () => {
        setInlineCollapsed(true)
    }

    const onMouseEnter = () => {
        setInlineCollapsed(false)
    }

    return {
        inlineCollapsed,
        menuItems,
        onMouseEnter,
        onMouseLeave,
    }
}

export default useContainer;
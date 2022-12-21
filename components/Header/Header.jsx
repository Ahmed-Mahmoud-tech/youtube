import Head from "next/head";
import Image from "next/image";
import Logo from "../../public/Images/youtube.png";
import Wrapper from "./Header.styled";
import { useState, useEffect, useRef } from "react";
import PopMenu from "./PopMenu/PopMenu";
import { useSelector, useDispatch } from "react-redux";
import { changeMode, changePop } from "../../store/slices/style";

import {
  BiHome,
  BiHistory,
  BiListUl,
  BiVideo,
  BiLike,
  BiVideoPlus,
  BiDonateHeart,
  BiBell,
  BiMenu,
  BiSearchAlt,
  BiLogOutCircle,
  BiSupport,
} from "react-icons/bi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { FaHandsHelping } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useOutside } from "../../utilities/main";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const [searchPop, setSearchPop] = useState(false);
  const [profile, setProfile] = useState(false);
  const [mainMenu, setMainMenu] = useState(false);
  const [modeLink, setModeLink] = useState();
  const [modeText, setModeText] = useState();
  const [modeIcon, setModeIcon] = useState();

  const profileButton = useRef(null);
  const menuButton = useRef(null);
  const searchButton = useRef(null);

  const currentMode = useSelector((state) => state.style.mode);
  const dispatch = useDispatch();
  const changeModeFun = () => {
    dispatch(changeMode(!currentMode));
  };

  const closeProfile = () => {
    setProfile(false);
  };
  const closeMenu = () => {
    setMainMenu(false);
  };
  useEffect(() => {
    window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true);
  }, []);
  useOutside(profileButton, closeProfile);
  useOutside(menuButton, closeMenu);
  useOutside(searchButton, setSearchPop);

  useEffect(() => {
    setModeLink(currentMode ? "/" : "/"),
      setModeText(currentMode ? "Dark Mode" : "Light Mode"),
      setModeIcon(currentMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />);
  }, [currentMode]);

  const leftData = [
    {
      link: "/",
      text: "Home",
      icon: <BiHome />,
    },

    {
      link: "/",
      text: "Likes",
      icon: <BiLike />,
    },
    {
      link: "/",
      text: "Subscribe",
      icon: <MdOutlineSubscriptions />,
    },
    {
      link: "/yourlists",
      text: "Your Lists",
      icon: <BiListUl />,
    },
    {
      link: "/",
      text: "History",
      icon: <BiHistory />,
    },
    {
      link: "/yourvideos",
      text: "Your Videos",
      icon: <BiVideo />,
    },
    {
      link: "/",
      text: "Create Video",
      icon: <BiVideoPlus />,
    },
    {
      link: "/",
      text: "Setting",
      icon: <SlSettings />,
    },
    {
      link: "/",
      text: "Support Us",
      icon: <FaHandsHelping />,
    },
    {
      link: "/",
      text: "Donate",
      icon: <BiDonateHeart />,
    },
  ];

  const rightData = [
    {
      type: "link",
      link: "/",
      text: "Profile",
      icon: <CgProfile />,
    },
    {
      type: "link",
      link: "/contactus",
      text: "Help",
      icon: <BiSupport />,
    },
    {
      type: "fun",
      link: modeLink,
      text: modeText,
      icon: modeIcon,
    },
    {
      type: "link",
      link: "/",
      text: "LogOut",
      icon: <BiLogOutCircle />,
    },
  ];

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper className="header">
        <div className="leftSec">
          <span
            className="menuIcon"
            onClick={() => setMainMenu(true)}
            ref={menuButton}
          >
            <BiMenu className="menu" />
            <PopMenu status={mainMenu} data={leftData} />
          </span>
          <Image
            className="logo"
            src={Logo}
            alt="logo"
            placeholder="plur"
            width="100"
          />
        </div>
        <div
          className={`searchParent ${isMobile && "isMobile"} ${
            searchPop && "searchPop"
          }`}
        >
          <div className="searchCont" ref={searchButton}>
            <input type="text" className="searchForm" />
            <button
              type="button"
              className="mic"
              onClick={() => isMobile && setSearchPop(true)}
            >
              <BiSearchAlt />
            </button>
          </div>
        </div>
        <div className="rightSec">
          <div
            className="support"
            onClick={() => {
              dispatch(changePop("site-video"));
            }}
          >
            <FaHandsHelping />
          </div>
          <div className="create">
            <BiVideoPlus />
          </div>
          <div className="notification">
            <span className="count">+9</span>
            <BiBell />
          </div>
          <div
            className="profile"
            onClick={() => setProfile(true)}
            ref={profileButton}
          >
            A{" "}
            <PopMenu
              status={profile}
              right={"0"}
              data={rightData}
              fun={changeModeFun}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

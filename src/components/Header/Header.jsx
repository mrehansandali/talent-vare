import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./header.module.scss";
import Image from 'next/image';
import appLogo from '@/images/logo.svg';
import searchIcon from '@/images/searchIcon.svg';
import profilePic from '@/images/profileIcon.jpg';
import dynamic from "next/dynamic"
const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false
});
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { GiHamburgerMenu } from "react-icons/gi";



const Header = () => {

  const [isOpenMblSidebar, setIsOpenMblSidebar] = useState(false);

  const toggleMblSidebar = () => {
    setIsOpenMblSidebar(!isOpenMblSidebar)
  }

  return (
    <>
    {/* ///////// Mbl Header ////////// */}
      <MediaQuery maxWidth={1024}>
        <header className={styles.header}>
            <div className={styles.logoContainer}>
            <GiHamburgerMenu onClick={toggleMblSidebar} className={styles.menuIcon} />
              <Image
                src={appLogo}
                alt="Picture of the application"
                width={500}
                height={500}
                className={styles.logoIcon}
              />
            </div>
            <Drawer open={isOpenMblSidebar} onClose={toggleMblSidebar} anchor={"right"}>
              <Box className={`${styles.discussYourIdeaBox}`} role="presentation">
                <div className={styles.navContainer}>
                  <li><Link className={styles.active} href={'/'}>Find Jobs</Link></li>
                  <li><Link href={'/'}>Top Companies</Link></li>
                  <li><Link href={'/'}>Job Tracker</Link></li>
                  <li><Link href={'/'}>My Calendar</Link></li>
                  <li><Link href={'/'}>Documents</Link></li>
                  <li><Link href={'/'}>Messages</Link></li>
                  <li><Link href={'/'}>Notifications</Link></li>
                </div>
              </Box>
            </Drawer>
            <div className={styles.formAndBtnContainer}>
              <div className={styles.searchForm}>
                <input type="text" placeholder='Search'/>
                <Image
                  src={searchIcon}
                  alt="icon"
                  width={1000}
                  height={1000}
                  />
              </div>
              <button className={styles.headerBtn}>Resume Builder</button>
              <div className={styles.profileIconContainer}>
                <Image
                  src={profilePic}
                  alt="Picture of the application"
                  width={500}
                  height={500}
                  className={styles.logoIcon}
                />
              </div>
            </div>
        </header> 
      </MediaQuery>

    {/* //////// Desktop Header ///////////// */}
      <MediaQuery minWidth={1025}>
        <header className={styles.header}>
            <div className={styles.logoContainer}>
              <Image
                src={appLogo}
                alt="Picture of the application"
                width={500}
                height={500}
                className={styles.logoIcon}
              />
            </div>


            <div className={styles.navContainer}>
              <li><Link className={styles.active} href={'/'}>Find Jobs</Link></li>
              <li><Link href={'/'}>Top Companies</Link></li>
              <li><Link href={'/'}>Job Tracker</Link></li>
              <li><Link href={'/'}>My Calendar</Link></li>
              <li><Link href={'/'}>Documents</Link></li>
              <li><Link href={'/'}>Messages</Link></li>
              <li><Link href={'/'}>Notifications</Link></li>
            </div>

            


            
            <div className={styles.formAndBtnContainer}>
              <div className={styles.searchForm}>
                <input type="text" placeholder='Search'/>
                <Image
                  src={searchIcon}
                  alt="icon"
                  width={1000}
                  height={1000}
                  />
              </div>
              <button className={styles.headerBtn}>Resume Builder</button>
              <div className={styles.profileIconContainer}>
                <Image
                  src={profilePic}
                  alt="Picture of the application"
                  width={500}
                  height={500}
                  className={styles.logoIcon}
                />
              </div>
            </div>
        </header> 
      </MediaQuery>
    </>
  )
}

export default Header

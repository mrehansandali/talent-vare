import React from 'react';
import styles from "./styles.module.scss";
import Image from 'next/image';
import desktopPic from "@/images/desktopPic.jpg"
import profilePic from "@/images/userPhoto.jpg"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaAngleDown } from "react-icons/fa";


const LeftSection = () => {
  return (
    <>

        <div className={styles.container}>
            <div className={styles.userDetails}>
                <div className={styles.destopPic}>
                    <Image
                        src={desktopPic}
                        alt="desktop pic"
                        width={500}
                        height={500}
                    />
                </div>
                <div className={styles.profilePic}>
                    <Image
                        src={profilePic}
                        alt="profile pic"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className={styles.nameAndTagline}>
                    <h2>Albert Flores</h2>
                    <h3>Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...</h3>
                    <p>Clinton, Maryland</p>
                </div>
            </div>
            <div className={styles.otherDetails}>
                <li><p>Profile Visitors</p> <span>140</span></li>
                <li><p>Resume Viewers</p> <span>20</span></li>
                <li><p>My Jobs</p> <span>88</span></li>
            </div>
            <div className={styles.calendarInfo}>
                <Accordion className={styles.accordion}>
                    <AccordionSummary
                    expandIcon={<FaAngleDown className={styles.accordionIcon}/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    className={styles.accordionHeader}
                    >
                    <h3>My calendar</h3>
                    <p>Upcoming Interviews</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        Calendar Infrmation
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
      
    </>
  )
}

export default LeftSection

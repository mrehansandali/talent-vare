import React from 'react';
import styles from "./styles.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import jobIcon from "@/images/jobIcon.svg";
import saveIcon from "@/images/saveIcon.svg";
import { GrLocation } from "react-icons/gr";
import { MdOutlineWatchLater } from "react-icons/md";

const FeaturedJobs = () => {

    const featured_jobs = [
        {
            job_title: "UI/UX Designer",
            location: "Seattle, USA (Remote)",
            posted_time: "1 day ago",
            applicants_count: 22
        },
        {
            job_title: "UI/UX Designer",
            location: "Seattle, USA (Remote)",
            posted_time: "1 day ago",
            applicants_count: 22
        },
        {
            job_title: "UI/UX Designer",
            location: "Seattle, USA (Remote)",
            posted_time: "1 day ago",
            applicants_count: 22
        },
        {
            job_title: "UI/UX Designer",
            location: "Seattle, USA (Remote)",
            posted_time: "1 day ago",
            applicants_count: 22
        },
        {
            job_title: "UI/UX Designer",
            location: "Seattle, USA (Remote)",
            posted_time: "1 day ago",
            applicants_count: 22
        },
    ];
    

      
  return (
    <>

    <div className={styles.container}>
        <div className={styles.heading}>
            <h2>Featured Jobs</h2>
            <Link href={'/'}>See Featured Jobs</Link>
        </div>

        <div className={styles.jobs}>
            {featured_jobs?.map((job, index) => {
                return (
                    <div className={styles.jobPost} key={index}>
                        <p className={styles.tag}>Promoted</p>
                        <div className={styles.titleAndIcon}>
                            <div className={styles.jobIcon}>
                                <Image
                                    src={jobIcon}
                                    alt="icon"
                                    width={500}
                                    height={500}
                                />
                                </div>
                            <div className={styles.title}>
                                <h3>{job?.job_title}</h3>
                                <p>Teams</p>
                            </div>
                        </div>
                        <div className={styles.location}>
                            <p className={styles.icon}><GrLocation /></p>
                            <p>{job?.location}</p>
                        </div>
                        <div className={styles.location}>
                            <p className={styles.icon}><MdOutlineWatchLater /></p>
                            <p>{job?.posted_time} <span className={styles.applicants}>{job?.applicants_count} applicants</span></p>
                        </div>
                        <div className={styles.applyBtnAndIcon}>
                            <button>Apply Now</button>
                            <Image
                                src={saveIcon}
                                alt="icon"
                                width={500}
                                height={500}
                                className={styles.saveIcon}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
      
    </>
  )
}

export default FeaturedJobs

import React, { useState } from 'react';
import styles from "./styles.module.scss";
import searchIcon from '@/images/searchIcon.svg';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Image from 'next/image';
import FeaturedJobs from '@/containers/FeaturedJobs/FeaturedJobs';
import RecommendedJobs from '@/containers/RecommendedJobs/RecommendedJobs';

const RightSection = () => {
  const [location, setLocation] = useState('SelectLocation');
  const [jobType, setJobType] = useState('JobType');

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeJobType = (event) => {
    setJobType(event.target.value);
  };

  return (
    <>
      <div className={styles.upperBox}>
        <h1>Find your Dream Job, <span>Albert!</span></h1>  
        <p>Explore the latest job openings and apply for the best opportunities available today!</p>
      </div>

      <div className={styles.findJobSection}>
        <p className={styles.jobTitle}>Job Title, Company, or Keywords</p>
        <div className={styles.jobFilters}>
          <div style={{width: "100%"}}>
          <FormControl fullWidth className={styles.filter1}>
            {/* <InputLabel  className={styles.filter} id="demo-simple-select-label">Age</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Age"
              onChange={handleChangeLocation} className={styles.filter}
            >
              <MenuItem value={'SelectLocation'}>Select Location</MenuItem>
              <MenuItem value={'Pakistan'}>Pakistan</MenuItem>
              <MenuItem value={'India'}>India</MenuItem>
              <MenuItem value={'China'}>China</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth className={styles.filter2}>
            {/* <InputLabel  className={styles.filter} id="demo-simple-select-label">Age</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={jobType}
              label="Age"
              onChange={handleChangeJobType} className={styles.filter}
            >
              <MenuItem value={'JobType'}>Job Type</MenuItem>
              <MenuItem value={'remote'}>Remote</MenuItem>
              <MenuItem value={'onsite'}>Onsite</MenuItem>
              <MenuItem value={'hybrid'}>Hybrid</MenuItem>
            </Select>
          </FormControl>  
          </div>
          <div className={styles.search}>
            <Image
              src={searchIcon}
              alt="icon"
              width={1000}
              height={1000}
            />
            Search
          </div>
        </div>
      </div>

      <div className={styles.tags}>
        <p>Similar:</p>
        <p className={styles.tag}>Frontend</p>
        <p className={styles.tag}>Backend</p>
        <p className={styles.tag}>Graphic Designer</p>
      </div>

      <FeaturedJobs />
      <div className={styles.dvider}></div>
      <RecommendedJobs />
    </>
  )
}

export default RightSection

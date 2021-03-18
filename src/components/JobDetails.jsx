import React, { useContext, useEffect } from "react";
import parse from "html-react-parser";
import JobsContext from '../context/jobs'
import Image from './Image'

const JobDetails = () => {
  const { details, onResetPage } = useContext(JobsContext)
  const {
    type,
    title,
    description,
    location,
    company,
    company_url,
    company_logo,
    how_to_apply,
  } = details;

  let newDescription = String(description)
  let newHowToApply = String(how_to_apply)
  const output = parse(newDescription);
  const output2 = parse(newHowToApply);
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className="job-details">
      <div className="back-link">
        <a href="/#" onClick={onResetPage}>
          &lt;&lt; Back to results
        </a>
      </div>
      <div>
        {type} / {location}
      </div>
      <div className="main-section">
        <div className="left-section">
          <div className="title">{title}</div>
          <hr />
          <div
            className="job-description"
            
          >
            {output}
          </div>
        </div>
        <div className="right-section">
          <div className="company-details">
            <h3>About company</h3>
            <Image src={company_logo} alt={company} className="company-logo" />
            <div className="company-name">{company}</div>
            <a className="company-url" href={company_url}>
              {company_url}
            </a>
          </div>
          <div className="how-to-apply">
            <h3>How to apply</h3>
            <div >
              {output2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

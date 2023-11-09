import React, { useState, useEffect } from 'react';
import Button from './Button';
import Job from './Job';

const url = 'https://course-api.com/react-tabs-project';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [jobs, setJobs] = useState<JobProps[]>([]);
  const companies = [...new Set(jobs.map((job) => job.company))];
  const [currentCompany, setCurrentCompany] = useState(companies[0]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setCurrentCompany(data[0].company);
        setLoading(false);
        setError(false);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <section className='jobs-center'>
      <div className='btn-container'>
        {companies.map((company, index) => (
          <Button
            key={index}
            handleClick={() => setCurrentCompany(company)}
            isActive={currentCompany === company}
          >
            {company}
          </Button>
        ))}
      </div>
      {jobs.map(
        ({ id, company, ...rest }) =>
          company === currentCompany && (
            <Job key={id} company={company} {...rest} />
          )
      )}
    </section>
  );
}

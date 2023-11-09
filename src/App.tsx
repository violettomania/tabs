import { useState, useEffect } from 'react';
import Jobs from './components/Jobs';
import LoadingSpinner from './components/LoadingSpinner';
import Tabs from './Tabs';

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
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <>
          <Tabs {...{ companies, currentCompany, setCurrentCompany }} />
          <Jobs {...{ jobs, currentCompany }} />
        </>
      )}
    </section>
  );
}

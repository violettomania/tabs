import Job from './Job';

interface JobsProps {
  jobs: JobProps[];
  currentCompany: string;
}

export default function Jobs({ jobs, currentCompany }: JobsProps) {
  return (
    <>
      {jobs.map(
        ({ id, company, ...rest }) =>
          company === currentCompany && (
            <Job key={id} company={company} {...rest} />
          )
      )}
    </>
  );
}

import Job from './Job';

export type JobsOwnProps = Omit<DataProps, 'order'>;

interface JobsProps {
  jobs: JobsOwnProps[];
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

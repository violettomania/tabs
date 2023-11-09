import { nanoid } from 'nanoid';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { JobsOwnProps } from './Jobs';

type JobProps = Omit<JobsOwnProps, 'id'>;

export default function Job({ title, dates, duties, company }: JobProps) {
  return (
    <article className='job-info' aria-labelledby='job-title'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <section>
        {duties.map((duty) => (
          <div key={nanoid()} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        ))}
      </section>
    </article>
  );
}

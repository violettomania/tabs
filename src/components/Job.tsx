import { FaAngleDoubleRight } from 'react-icons/fa';

type OwnProps = Omit<JobProps, 'id' | 'order'>;

export default function Job({ title, dates, duties, company }: OwnProps) {
  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <div>
        {duties.map((duty, index) => (
          <div key={index} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

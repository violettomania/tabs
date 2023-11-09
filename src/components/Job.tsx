import { FaAngleDoubleRight } from 'react-icons/fa';

interface OwnProps {
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

export default function Job({
  order,
  title,
  dates,
  duties,
  company,
}: OwnProps) {
  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>December 2015 - Present</p>
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

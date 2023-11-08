import { FaAngleDoubleRight } from 'react-icons/fa';

export default function Job() {
  return (
    <article className='job-info'>
      <h3>Full Stack Web Developer</h3>
      <span className='job-company'>TOMMY</span>
      <p className='job-date'>December 2015 - Present</p>
      <div>
        <div className='job-desc'>
          <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
          <p>
            Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
            leggings offal cold-pressed brunch neutra. Hammock photo booth
            live-edge disrupt.
          </p>
        </div>
        <div className='job-desc'>
          <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
          <p>
            Post-ironic selvage chambray sartorial freegan meditation. Chambray
            chartreuse kombucha meditation, man bun four dollar toast street art
            cloud bread live-edge heirloom.
          </p>
        </div>
        <div className='job-desc'>
          <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
          <p>
            Butcher drinking vinegar franzen authentic messenger bag copper mug
            food truck taxidermy. Mumblecore lomo echo park readymade iPhone
            migas single-origin coffee franzen cloud bread tilde vegan
            flexitarian.
          </p>
        </div>
      </div>
    </article>
  );
}

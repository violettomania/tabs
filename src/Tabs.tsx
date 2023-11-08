import Button from './Button';

export default function Tabs() {
  return (
    <div className='btn-container'>
      <Button isActive>TOMMY</Button>
      <Button isActive={false}>BIGDROP</Button>
      <Button isActive={false}>CUKER</Button>
    </div>
  );
}

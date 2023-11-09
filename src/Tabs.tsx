import Button from './components/Button';

interface TabsProps {
  companies: string[];
  currentCompany: string;
  setCurrentCompany: (company: string) => void;
}

export default function Tabs({
  companies,
  currentCompany,
  setCurrentCompany,
}: TabsProps) {
  return (
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
  );
}
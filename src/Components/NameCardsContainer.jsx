import NameCard from './NameCard';
import './NameCardsContainer.css';
import { nanoid } from 'nanoid'


export default function NameCardsContainer() {

  const output = [];
  for (let i = 0; i < 20; i++) {
    const newID = nanoid();
    output.push(<NameCard id={newID} key={newID} num={i}/>);

  }



  return (
    // onClick will need to refer to an event handlder that calls prop.setRowState
    <div className='name-cards-container'>
      {output}
    </div>

  );
}
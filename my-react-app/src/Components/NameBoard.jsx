import NameCardsContainer from './NameCardsContainer.jsx';
import './NameBoard.css';
import stateArray from '../names.js';

console.log(stateArray);

export default function NameBoard(props) {
  
  return (
    // onClick will need to refer to an event handlder that calls prop.setRowState
    <div className='name-board'>
      <p>FTRI 48</p>
      <NameCardsContainer />
    </div>

  );
};
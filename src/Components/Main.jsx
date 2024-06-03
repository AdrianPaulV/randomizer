import NameCardsContainer from './NameCardsContainer.jsx';
import './Main.css';
import stateArray from '../names.js';

console.log(stateArray);

export default function NameBoard(props) {
  
  return (
    // onClick will need to refer to an event handlder that calls prop.setRowState
    <main>
      <div className="name-board">
        <h2>FTRI 48</h2>
        <NameCardsContainer />
      </div>
      <div>
        
      </div>
    </main>

  );
};
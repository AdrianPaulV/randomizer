import './NameCard.css';

export default function NameCard(props) {

  return (
    // onClick will need to refer to an event handlder that calls prop.setRowState
    <div className="name-card">
      <p>Player {props.num}</p>
      <button>zzz...</button>
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));


function Counter({ id, onDelete }) {
  const [countNum, setCountNum] = React.useState(0);

  const updateCounter = (n) => {
    if (countNum + n < 0) {
      return;
    }
    setCountNum(countNum + n);
  };
  const delCounter = () => {
  };

  return (
    <div className="counter">
      <button className="btn-inc" onClick={() => updateCounter(1)}>+</button>
      <h3 className="number">{countNum}</h3>
      <button className="btn-dec" onClick={() => updateCounter(-1)}>-</button>
      <button className="btn-clr" onClick={() => updateCounter(-countNum)}>C</button>
      <button className="btn-del" onClick={() => onDelete(id)}>X</button>
    </div>
  );
}

function App() {
  const [counters, setCounters] = React.useState([]);

  const addCounter = () => {
    setCounters([...counters, { id: counters.length }]);
  };

  const deleteCounter = (id) => {
    setCounters((prevCounters) => prevCounters.filter((counter) => counter.id !== id));
  };

  const getCounterSum = () => {
    return counters.length;
  };
//อั่นแน่~~~~~~  ส่องโค้ดหรอ?
  return (
    <>
      <div className="containner">
      <h1 className="show-sum">counter {getCounterSum()}</h1>
        <button className="btn-add" onClick={addCounter}>Add Counter</button>
        <div className="item">
          {counters.map((counter) => (
            <div key={counter.id}>
              <Counter id={counter.id} onDelete={deleteCounter} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

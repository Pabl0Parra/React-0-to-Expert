import { useState } from "react";
import PropTypes from "prop-types";

// if the function doesn´t rely on anything from inside the component, it´s better to take the reference outside, that way when the component reloads, it doesn´t automatically run this code every time.

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};

export default CounterApp;

import './calculator.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function NumButton(props) {
  const { number, type, onClick } = props;
  const classes = `${number !== '0' ? 'button' : 'button0'} ${type}`;
  return (<button type="button" className={classes} onClick={onClick}>{number}</button>);
}

function Calculator() {
  const numValues = ['AC', '+/-', '%',
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0', '.',
  ];

  const operations = ['÷', 'x', '-', '+', '='];

  const [state, setState] = useState({ total: null, next: null, operation: null });

  const changetext = (ss) => {
    setState((state) => (calculate(state, ss)));
  };

  const { next, total, operation } = state;
  return (
    <div id="Calculator">
      <input type="text" value={next || operation || total || ''} onChange={changetext} />
      <div className="numcontainer" key="Numboard">
        {numValues.map((d) => (<NumButton number={d} key={d} type="num" onClick={() => changetext(d)} />))}
      </div>
      <div className="opContainer">
        {operations.map((d) => (<NumButton number={d} key={d} type="op" onClick={() => changetext(d)} />))}
      </div>
    </div>
  );
}

NumButton.propTypes = {
  number: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Calculator;

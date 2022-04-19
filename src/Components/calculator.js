/* eslint-disable linebreak-style */
import './calculator.css';
import React from 'react';
import PropTypes from 'prop-types';

function NumButton(props) {
  const { number, type } = props;
  const classes = `${number !== '0' ? 'button' : 'button0'} ${type}`;
  return (<button type="button" className={classes}>{number}</button>);
}
NumButton.propTypes = {
  number: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

function NumBoard() {
  const numValues = ['AC', '+/-', '%',
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0', '.',
  ];
  return (
    <div className="numcontainer" key="Numboard">
      {numValues.map((d) => (<NumButton number={d} key={d} type="num" />))}
    </div>
  );
}

function OpBoard() {
  const operations = ['÷', 'x', '-', '+', '='];

  return (
    <div className="opContainer">
      {operations.map((d) => (<NumButton number={d} key={d} type="op" />))}
    </div>
  );
}

class calculator extends React.PureComponent {
  render() {
    return (
      <div id="Calculator">
        <input type="text" value="0" />
        <NumBoard />
        <OpBoard />
      </div>
    );
  }
}

export default calculator;

import './calculator.css';
import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function NumButton(props) {
  const { number, type, onClick } = props;
  const classes = `${number !== '0' ? 'button' : 'button0'} ${type}`;
  return (<button type="button" className={classes} onClick={onClick}>{number}</button>);
}

class calculator extends React.PureComponent {
  numValues = ['AC', '+/-', '%',
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0', '.',
  ];

  operations = ['÷', 'x', '-', '+', '='];

  constructor(props) {
    super(props);
    this.changetext = this.changetext.bind(this);
    this.state = { total: '0', next: null };
  }

  changetext(ss) {
    this.setState((state) => (calculate(state, ss)));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div id="Calculator">
        <input type="text" value={next || total || ''} onChange={this.changetext} />
        <div className="numcontainer" key="Numboard">
          {this.numValues.map((d) => (<NumButton number={d} key={d} type="num" onClick={() => this.changetext(d)} />))}
        </div>
        <div className="opContainer">
          {this.operations.map((d) => (<NumButton number={d} key={d} type="op" onClick={() => this.changetext(d)} />))}
        </div>
      </div>
    );
  }
}

NumButton.propTypes = {
  number: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default calculator;

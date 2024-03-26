import { Component } from 'react';
import css from './Statistics.module.css';

class Statistics extends Component {
  render() {
    return (
      <>
        <ul className={css.list}>
          <li className={css.item}>Good: {this.props.good}</li>
          <li className={css.item}>Neutral: {this.props.neutral}</li>
          <li className={css.item}>Bad: {this.props.bad}</li>
          <li className={css.item}>Total: {this.props.total()}</li>
          <li className={css.item}>
            Positive feedback: {this.props.positivePercentage().toFixed()}%
          </li>
        </ul>
      </>
    );
  }
}

export default Statistics;

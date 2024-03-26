import css from './Statistics.module.css';

const Statistics = props => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>Good: {props.good}</li>
        <li className={css.item}>Neutral: {props.neutral}</li>
        <li className={css.item}>Bad: {props.bad}</li>
        <li className={css.item}>Total: {props.total()}</li>
        <li className={css.item}>
          Positive feedback: {props.positivePercentage().toFixed()}%
        </li>
      </ul>
    </>
  );
};

export default Statistics;

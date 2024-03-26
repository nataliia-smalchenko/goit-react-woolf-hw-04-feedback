import Button from '../Button/Button';

const FeedbackOptions = props => {
  return (
    <>
      {props.options.map(option => {
        return (
          <Button
            key={option}
            type="button"
            text={option}
            handleClick={() => {
              props.onLeaveFeedback(option);
            }}
          />
        );
      })}
    </>
  );
};

export default FeedbackOptions;

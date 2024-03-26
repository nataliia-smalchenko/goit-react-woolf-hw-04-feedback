import { Component } from 'react';
import Button from '../Button/Button';

class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {this.props.options.map(option => {
          return (
            <Button
              key={option}
              type="button"
              text={option}
              handleClick={() => {
                this.props.onLeaveFeedback(option);
              }}
            />
          );
        })}
      </>
    );
  }
}

export default FeedbackOptions;

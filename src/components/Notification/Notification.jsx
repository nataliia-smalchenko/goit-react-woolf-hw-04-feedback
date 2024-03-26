import { Component } from 'react';
import css from './Notification.module.css';

class Notification extends Component {
  render() {
    return <p className={css.notification}>{this.props.message}</p>;
  }
}

export default Notification;

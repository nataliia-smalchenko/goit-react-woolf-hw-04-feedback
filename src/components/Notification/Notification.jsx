import css from './Notification.module.css';

const Notification = props => (
  <p className={css.notification}>{props.message}</p>
);

export default Notification;

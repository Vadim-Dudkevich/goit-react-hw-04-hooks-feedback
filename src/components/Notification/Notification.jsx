import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p>There is no feedback</p>;
}

Notification.propTypes = {
  message: PropTypes.string,
};

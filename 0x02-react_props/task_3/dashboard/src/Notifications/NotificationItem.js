import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  let li;

  if (value) {
    li = <li data-priority={type}>{value}</li>;
  } else if (html) {
    li = (
      <li data-priority={type} dangerouslySetInnerHTML={html}></li>
    );
  } else {
    li = <li data-priority={type}></li>;
  }

  return li;
}

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;

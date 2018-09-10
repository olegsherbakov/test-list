import React from 'react';
import styles from './style.scss';

export default class ApplicationComponent extends React.Component {
  render() {
    return (
      <div className={styles.Container}>
        Hello World!
      </div>
    );
  }
}

import styles from './Timer.module.scss';

const Timer = props => {
  const sec2time = s => {
    function pad(n, z) {
      z = z || 2;
      return ('00' + n).slice(-z);
    }
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;
  
    return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
  }
  
  return (
    <div>
      <h2 className={styles.timer}>{sec2time(props.time)}</h2>
    </div>
  );
};

export default Timer;
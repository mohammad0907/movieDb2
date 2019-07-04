import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(0),
  },
}));

export default function CircularStatic() {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(prevCompleted => (prevCompleted >= 100 ? 0 : prevCompleted + 10));
    }

    const timer = setInterval(progress, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <CircularProgress className={classes.progress} variant="static" value={80} />
      <span style = {{marginLeft: "15px", position:"relative", top: "-13px", fontSize: '18px', fontWeight: 'bold'}}>User Score : 8/10</span>
    </div>
  );
}

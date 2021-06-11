import React from 'react'
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
    title: {
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      }
}));


function Categories() {
    const classes=useStyles();
    return (
        
        <div style={{margin:"20px"}}>
            <Typography className={classes.title} variant="h4" noWrap style={{fontWeight:"bold",color:"#525054"}}>
                Categories
            </Typography>

        </div>
    )
}

export default Categories

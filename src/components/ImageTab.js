import React from 'react';
import styled from 'styled-components';
import './Shadow.css'

import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      }
}));

const imagStyled=styled.img`
    margin-right: 50px;
    box-shadow: 10px;
`
function ImageTab(props) {
    const classes=useStyles();
    return (
        <div className="box" >
            <imagStyled><img src="./images/Ellipse10.png"/></imagStyled>
            <div style={{margin:"20px"}}>
                <Typography className={classes.title} variant="h5" noWrap style={{fontWeight:"bold",color:"#525054"}}>
                {props.name}
                </Typography>
            </div>
            
        </div>
    )
}

export default ImageTab

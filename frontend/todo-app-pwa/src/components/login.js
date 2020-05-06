import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      paddingTop: '25ch',
      textAlign: 'center',
      width: '100%',
      textAlign: 'center'
      
    },
    button: {
        backgroundColor: 'lightblue'
    },
    loginFail: {
        width:'100%', 
        textAlign: 'center'
    },
    nav: {
        backgroundColor: 'lightblue'
    }
    
  }));

function Login(props) {
    const classes = useStyles();
    const history = useHistory();
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginFail, setLoginFail] = useState(false);
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (loginId === 'harsh' && password==='password'){
            setLoginFail(false);
            history.push(`/welcome/${loginId}`);
        }
        else{
            setLoginFail(true);
        }
    }
    return (
    <div className={classes.App}>
        <BottomNavigation
        showLabels
        className={classes.nav}
        >
            <BottomNavigationAction label="Todo App" icon={<FormatListBulletedIcon />} />
        </BottomNavigation>

        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>

            {loginFail && <div className={classes.loginFail}>Invalid Credentials</div>}
            <TextField 
                id="loginId" 
                label="Login ID" 
                variant="outlined"
                value={loginId}
                onChange={e => setLoginId(e.target.value)}
                /> <br/>
            <TextField 
                id="password" 
                label="Password" 
                variant="outlined" 
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                /> <br/>
            <Button type="submit" className={classes.button} variant="contained"  >
                Submit
            </Button>
        </form>
        
      
    </div>
  );
}

export default Login;

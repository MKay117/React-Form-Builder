import './index.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Visibility } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import FormBody from '../FormBody/index';

const Form = () => {
    return (
        <div className="form-container">
            <div className='navbar-container'>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Form Builder
                        </Typography>
                        <Tooltip title='Preview' placement='left' arrow>
                            <IconButton
                                size="small"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <Visibility />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
            </div>
            <div className='form-body-container'>
                <FormBody />
            </div>
        </div>
    )
};

export default Form;
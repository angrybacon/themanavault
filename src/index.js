import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Application from './components/Application';
import theme from './theme';


const application = <ThemeProvider children={<Application />} theme={theme} />;
ReactDOM.render(application, document.getElementById('root'));

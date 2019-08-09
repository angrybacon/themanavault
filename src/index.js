import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';


const application = <ThemeProvider children={<Application />} theme={theme} />;
ReactDOM.render(application, document.getElementById('root'));

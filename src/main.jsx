import React from 'react'
import {createRoot} from 'react-dom/client'
import NoteApp from './Components/NoteApp.jsx';
import './Style/Style.css';

const root = createRoot(document.getElementById('root'));
root.render(<NoteApp/>);
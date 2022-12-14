import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white'
      showAlert('Dark Mode has been Enabled', "success");

      // document.title = "TextUtils - An Amazing website" // it can be used to change the title dynamically
      // setInterval(() => {
      //   document.title = "TextUtils - install Now"
      // }, 2000);

      // setInterval(() => {
      //   document.title = "TextUtils - With new features!!"
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
      showAlert('Light Mode has been Enabled', "success");
    }
  }
  return ( // this whole code is JSX (it's html with JavaScript), it's mainly used so that we don't have to write html,css,js seperately, 95% of JSX is javasript. As this is js so we have make sure that we do't write js Reserved words while writing JSX
    <Router>
      {/* These are called "props"(properties) that we have passed inside Navbar like title and about, and these can be used in the by passing an parameter in the function we are using this Navbar. Here in this case, Navbar component is requiring 2 properties to use that are "title" and "about". We can pass anything as props either it is string or number or objects */}
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} showAlert={showAlert} />
      <div className="container my-4" >
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to Analyse!!" mode={mode} showAlert={showAlert} />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;


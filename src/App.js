import React, { Component } from 'react';
import Intro from './Intro.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Contact from './Contact.js';

// function App() {
//   return (
//     <Intro />,
//     <Projects />
//     // <Skills />,
//     // <Contact />
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
          <Intro />
          <Projects />
          <Skills />
          <Contact />
      </div>
    );
  }
}

export default App;

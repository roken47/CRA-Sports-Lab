import React from 'react';
import './App.css';
import Game from './components/game/Game';
//Team Logos
import fnaticLogo from './assets/images/Fnatic.png';
import naviLogo from './assets/images/Natus_Vincere.png';
import liquidLogo from './assets/images/Team_Liquid.png';
import cloudLogo from './assets/images/C9.png';


function App(props) {
  const fnatic = {
    name: 'Fnatic',
    logoSrc: fnaticLogo
  }

  const navi = {
    name: 'Natus Vincere',
    logoSrc: naviLogo
  }

  const liquid = {
    name: 'Team Liquid',
    logoSrc: liquidLogo
  }

  const cloudNine = {
    name: 'Cloud 9',
    logoSrc: cloudLogo
  }

  return (
    <div className="App">
      <Game
        venue="Lanxess Arena"
        homeTeam={fnatic}
        visitingTeam={navi}
      />
      <Game
        venue="Spodek Arena"
        homeTeam={liquid}
        visitingTeam={cloudNine}
      />
    </div>
  )
}

export default App;

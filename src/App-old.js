import React from 'react';

const initState = {
  level: 1,
  elements: 1,
  lives: 1,
  click: 0,
  time: 0
}

class App extends React.Component {

  state = initState;

  reset = () => {
    window.location.reload(); 
  }

  // next level
  next = () => {
    const popUp = document.getElementById('popUp');
    popUp.style.display = 'none';
    this.setState({
      elements: this.state.elements + 1,
      click: 0
    })
  }

  activeClick = (e) => {
    
    const create = document.querySelectorAll('.grid > div');

    // create first element level 1
    if (e.target.className === '' && this.state.click === 0) {
      e.target.classList.add('first');
    }
    
    // error 
    if (this.state.click > 0) {
      console.log('bbb')
      if (e.target.className !== 'third') {
        this.setState({
          level: this.state.level - 1,
        })        
        if (this.state.level === 0) {
          document.querySelector('#popUpEnd').style.display = 'flex';
        }
      }
     
    }

    // level 1
    if (this.state.level === 1 && e.target.className === 'first') {
      this.setState({
        click: this.state.click + 1,
      })
      create[Math.floor(Math.random() * 100)].classList.add('third');

    }

    // end level 1 
    if (this.state.level === 1 && e.target.className === 'third') {
      this.setState({
        lives: this.state.lives + 1,
        click: this.state.click + 1,
        level: this.state.level + 1
      })
      document.querySelector('#popUp').style.display = 'flex';
      const clear = document.querySelectorAll('.grid > div');
      clear.forEach( elements => {
        elements.className = ''
      })
    }

    // level > 1 
    
    if (this.state.level > 1 && this.state.click === 0) {
      e.target.classList.add('first');
      create[Math.floor(Math.random() * 100)].classList.add('third');
      this.setState({
        click: this.state.click + 1,
      })
      for (let i = 0; i < this.state.elements - 1; i++) {
        create[Math.floor(Math.random() * 100)].classList.add('second');
      }
    } 

    // level > 1 active
    if (this.state.level > 1 && e.target.className === 'third') {
      e.target.className = 'first';
      const second = document.querySelectorAll('.second');
      for (let i = 0; i < second.length; i++) {
        second[i].className = 'third'
      }

      if (second.length === 0) {
        this.setState({
          level: this.state.level + 1
        })
        const clear = document.querySelectorAll('.grid > div');
        clear.forEach( elements => {
          elements.className = ''
        })
        
        if (document.querySelectorAll('.third').length === 0) {
          const popUp = document.getElementById('popUp');
          popUp.style.display = 'flex';
          console.log('aaa')
        }
        
      }

    } 

    // level > 1 error
    


  }

  render() {
    return(
      <div className="app">
        <div id="popUp">
          <div>
            <div>You have completed level: {this.state.level - 1}</div>
            <div>Do you want to play next level?</div>
            <div className="noYes">
              <div>No</div>
              <div onClick={this.next}>Yes</div>
            </div>
          </div>
        </div>
        <div id="popUpEnd">
          <div>
            <div>You have no more lives.</div>
            <div>Do you want to play again?</div>
            <div className="noYes">
              <div>No</div>
              <div onClick={this.reset}>Yes</div>
            </div>
          </div>
        </div>
        <div className="grid" onClick={this.activeClick}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="stats">
          <div>Game Status</div>
          <div>Time: <span>{this.state.time} </span></div>
          <div>Clicked: <span>{this.state.click}</span></div>
          <div>Lives: <span>{this.state.lives}</span></div>
          <div>Nivo: <span>{this.state.level}</span></div>
        </div>
      </div>
    )
  }



}

export default App;

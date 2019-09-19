import React from 'react';

const initState = {
  level: 1,
  elements: 1,
  click: 0,
  time: 0,
  lives: 1,
  elementsToClick: 0
}
let time;

class App extends React.Component {
  
  state = initState;

  reset = () => {
    window.location.reload(); 
  }

  // next level
  next = () => {
    const popUpNext = document.querySelector('#popUpNext');
    const all = document.querySelectorAll('.grid > div');
    popUpNext.style.display = 'none';
    this.setState({
      click: 0,
      time: 0
    })

    all.forEach( element => {
      element.className = '';
    })

    time = clearInterval(time);
    
  }

  again = () => {
    const all = document.querySelectorAll('.grid > div');
    const popUpAgain = document.querySelector('#popUpAgain');
    popUpAgain.style.display = 'none';
    all.forEach( element => {
      element.className = '';
    })

    this.setState({
      elementsToClick: this.state.level,
      time: 0
    })

    time = clearInterval(time);
  }
  
  

  activeClick = (e) => {

    const all = document.querySelectorAll('.grid > div');
    for (let i = 0; i < all.length; i++) {
      all[i].setAttribute('value', i);
    }

    

    const popUpNext = document.querySelector('#popUpNext');
    const popUpEnd = document.querySelector('#popUpEnd');
    const popUpAgain = document.querySelector('#popUpAgain');
    
    // error 
    if (e.target.className !== 'third' && this.state.click !== 0) {
      this.setState({
        click: 0,
        time: 0,
        lives: this.state.lives - this.state.elementsToClick,
      })

      setTimeout( () => {
        if (this.state.lives <= 0) {
          popUpEnd.style.display = 'flex';
        }
        if (this.state.lives > 0) {
          popUpAgain.style.display = 'flex';
        }

      },0)

      time = clearInterval(time);
    }
    // error END

    if (this.state.click === 0) {
      time = setInterval( () => {
        this.setState({
          time: this.state.time + 1
        })
      }, 1000);
    } 

    if (e.target.className === '' && this.state.click === 0) {

      e.target.className = 'first';
      all[Math.round(Math.random() * 99 )].className = 'third';
      for (let i = 0; i < this.state.elements - 1; i++) {
        all[Math.round(Math.random() * 99 )].className = 'second';        
      }

      this.setState({
        click: this.state.click + 1,
      })
      
    }
    
    if (e.target.className === 'third') {

      const secondElements = document.querySelectorAll('.grid > .second');
      if (secondElements.length !== 0) {
        for (let i = 0; i < 1; i++) {
          const random = Math.round(Math.random() * (secondElements.length - 1));
          secondElements[random].className = 'third'
        }
      }
      
      this.setState({
        click: this.state.click + 1,
      })

      e.target.className = 'first';
      

      setTimeout( () => {
        const thirdElements = document.querySelectorAll('.grid > .third');
        if (thirdElements.length === 0) {
          popUpNext.style.display = 'flex';
          this.setState({
            level: this.state.level + 1,
            lives: this.state.lives + 1,
            elements: this.state.elements + 1,
            elementsToClick: this.state.elementsToClick + 1,
          })
        }
      },0)      
    }

    setTimeout( () => {
      const secondElements = document.querySelectorAll('.grid > .second');
      const thirdElements = document.querySelectorAll('.grid > .third');
      this.setState({
        elementsToClick: secondElements.length + thirdElements.length
      })
    },0)

    
    
  }

  render() {
    return(
      <div className="app">
        <div id="popUpNext">
          <div>
            <div>You have completed level: {this.state.level}</div>
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
        <div id="popUpAgain">
          <div>
            <div>You have lost this game.</div>
            <div>Do you want to play again?</div>
            <div className="noYes">
              <div>No</div>
              <div onClick={this.again}>Yes</div>
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

          <div>Time: <span>{this.state.time}s</span></div>

          <div>Level: <span>{this.state.level}</span></div>

          <div>Clicked: <span>{this.state.click}</span></div>

          <div>Lives: <span>{this.state.lives}</span></div>         
          
        </div>
      </div>
    )
  }



}

export default App;

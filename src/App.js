import React, { Component } from 'react';
import './App.css';
// Must import components used in the JSX
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import NewGameButton from './components/NewGameButton/NewGameButton';
import './components/ColorPicker/ColorPicker.css'
 let footerStyle={
    height:50,
    padding:10,
    margin:'15px 0',
    color:'grey',
    fontSize:18,
    textAlign:'center'
  };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.reinitialize()
  }
  

  getNewGuess() {
    return {
      code: [null, null, null, null],
      // code: [3, 2, 1, 0], // for testing purposes
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  genCode(size) {
    return new Array(size).fill().map(dummy => Math.floor(Math.random() * size));
  }

  getWinTries() {
    // if winner, return num guesses, otherwise 0 (no winner)
    let lastGuess = this.state.guesses.length - 1;
    return this.state.code.join() === this.state.guesses[lastGuess].code.join() ? lastGuess + 1 : 0;
  }

  handleColorSelection = (colorIdx) => {
    // console.log(this);
    this.setState({selColorIdx: colorIdx})
  }
  placeColorSelection = (guessIdx) => {
    var guess = Object.assign({}, this.state.guesses[this.state.guesses.length-1]);
    guess.code[guessIdx]= this.state.selColorIdx;
    var guesses = [...this.state.guesses];
    guesses[this.state.guesses.length-1] = guess;
    this.setState({guesses:guesses})
  }

  handleNewGameClick = () => {
    this.setState({})
    alert('new game button clicked!')
  }

  reinitialize() {
    let colors = ['#155765', '#57652A', '#AB9353', '#4D2C3D'];
    return {
      colors,
      code: this.genCode(colors.length),
      selColorIdx: 0,
      guesses: [this.getNewGuess()]
    }
  }

  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App">
        <header style={footerStyle}>REACT &nbsp; &nbsp; MASTERMIND
          </header>
        <div className="App-game">
          <GameBoard 
            placeColorSelection={this.placeColorSelection}
            guesses={this.state.guesses}
            colors={this.state.colors} />
          <div className ="App-controls">
            <ColorPicker
            handleColorSelection={this.handleColorSelection}
            selColorIdx={this.state.selColorIdx}
            colors={this.state.colors} /> 
            <NewGameButton 
            handleNewGameClick={this.handleNewGameClick}/>
          </div> 
        </div>
      <footer style={footerStyle}>{(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}
      </footer>
    </div>
    );
  }
}

export default App;

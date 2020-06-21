import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill("X"),
    };
  }

  render() {
  const myBox = this.state.board.map(box=> <div className="box">{box}</div>)
    return (
      <div className="container">
        <h1>Tic Tac Toe App</h1>
        <div className="board">
          {myBox}
        </div>


      </div>
    );
  }
}

export default App;

import React from 'react';

class PlayerDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      score : this.props.score
    }
    this.incrementScore = this.incrementScore.bind(this)
    //There is Two way to bind this class state
    // first like this the other is inside onClick in the Html return
  }
  incrementScore(event){
    this.setState({
      score : this.state.score +1
    })
  }
  decrementScore(event){
    this.setState({
      score : this.state.score -1
    })
  }
  render(){
    const styles ={
      player: {
        display: 'flex',
        padding: 10
      },
      name: {
        flex: '1'
      },
      playerScore: {
        width:200
      },
      score: {
        padding:20
      },
      button: {
        padding:10
      }
    }
    return(
      <div style={styles.player}>
        <div style={styles.name}>{this.props.name}</div>
        <div style={styles.playerScore}>
          <button onClick={this.decrementScore.bind(this)} style={styles.button}>-</button>
          <span style={styles.score}>{this.state.score}</span>
          <button onClick={this.incrementScore} style={styles.button}>+</button>
        </div>
      </div>
    )
  }
}

export default PlayerDetail

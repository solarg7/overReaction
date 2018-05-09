import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ friends: this.shuffleData(this.state.friends) });
  }

  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  handleOKGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      friends: this.shuffleData(newData),
      score: newScore,
      topScore: newTopScore
    });
  };
  
  handleNOKGuess = data => {
    this.setState({
      friends: this.resetData(data),
      score: 0
    });
  };

  resetData = data => {
    const resetData = data.map(item => ({ ...item, guessed: false }));
    return this.shuffleData(resetData);
  };

  removeFriend = id => {
    // console.log("hola que tal festival")
    let guessedOK = false;
    
    const newData = this.state.friends.map(item => {
      const newItem = { ...item };

      if (newItem.id === id){
        console.log("newItem.guessed 1" +newItem.guessed)
        if (!newItem.guessed){
          newItem.guessed = true;
          guessedOK = true;
                  console.log("guessedOK: " + guessedOK)
                  console.log("newItem.guessed 2" +newItem.guessed)
        }
      }
      return newItem;
    });

    guessedOK
      ? this.handleOKGuess(newData)
      : this.handleNOKGuess(newData);
  };


  clickA = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });

    // function shuffle(o) {
    //   for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    //   return o;
    // };
  
    // var random = shuffle(numbers);

  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log("paolita");
    return (
      <Wrapper>
        <Title>Friends List</Title>

        <p>Click Count: {this.state.count}</p>
        <p>Click Count: {this.state.score}</p>
        <p>Click Count: {this.state.topScore}</p>

        
        <br></br>
        
          {this.state.friends.map(friend => (
            <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            />

          ))}
        
        {/* console.log() */}
      </Wrapper>
    );
  }
}

export default App;

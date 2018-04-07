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
    count: 0
  };


  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);

    

    // Set this.state.friends equal to the new friends array
    // const clickedImage = this

    this.setState({ count: this.state.count + 1 });
    

    this.setState({ friends });
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

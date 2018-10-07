import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
	
  }

  updateCount() {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    });
  }

  render() {
    return (<div><button
              onClick={() => this.updateCount()}
            >
              Clicked {this.state.count} times
            </button>
			
            <Content myNumber = {this.state.count}></Content>
         </div>
			);
			
  }
}

class Content extends React.Component {

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log(newProps)
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log(nextProps);
   }

   componentDidUpdate(prevProps, prevState) {
      console.log(prevProps)
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
	
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default App;
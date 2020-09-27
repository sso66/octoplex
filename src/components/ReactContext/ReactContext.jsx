// File: src/components/ReactContext/ReactContext.jsx
// Desc: The concept of React context which is just global state for components
// Date: 12/5/2019
//..............................................................................
// To create global context objects that can given to any component you make.
// This allows you to share data without having to pass down all the way 
// through the DOM tree.
//
// First create a context object;
//      const MyContextObject = React.createContext({ foo: "bar" });
//
// Then set the context in a a component like so:
//      MyClass.contextType = MyContextObject;
//
// Didn't work in React 16.4.2. Instead use and HOC to consume an context in a 
// similar to what is describe below:
//..............................................................................

const initialContext = { foo: 'bar' }
const AppContext = React.createContext(initialContext);

function contextConsumerWrapper(WrappedComponent, Context) {
  return class extends React.Component {
    render() {
      return (
        <Context.Consumer>
          { context => <WrappedComponent context={context}/> }
        </Context.Consumer>
      )
    }
  }
}

function contextProviderWrapper(WrappedComponent, Context, initialContext) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = { ...initialContext }
    }
    
    // define any state changers
    changeContext = () => {
      this.setState({ foo: 'baz' })
    }

    render() {
      return (
       <Context.Provider value={{
        ...this.state,
        changeContext: this.changeContext
       }} >
          <WrappedComponent />
       </Context.Provider>
      )
    }
  }
}
 

class Child extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.context.changeContext}>Click</button>
        {this.props.context.foo}
      </div>
     )
  }
}


const ChildWithContext = contextConsumerWrapper(Child, AppContext)
const ChildWithProvide = contextProviderWrapper(ChildWithContext, AppContext, initialContext)

class App extends React.Component {
  render() {
    return (
      <ChildWithProvide />
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
)

  
//..............................................................................
// Let’s step through this.
// 
// First, we take the initial context state, the object we passed to 
// React.createContext() and set it as our wrapper component’s state. 
//
// Next we define any methods we’re going to use to change our state. 
//
// Lastly, we wrap our component in the Context.Provider component. We pass in 
// our state and function to the value prop. Now any children will get these in 
// context when wrapped with the Context.Consumer component.
//
// Now our child component has access to global context. It has the ability to 
// change the foo attribute in state to baz. 
//..............................................................................

// eof 

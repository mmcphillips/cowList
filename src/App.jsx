import CowList from './CowList.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    //invoke a get request?
  }

  render(){
    return(
      <div>
        <CowList />
      </div>
    );
  }
}

export default App;
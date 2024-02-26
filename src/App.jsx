import React, {Component} from "react";
import Lorenz from '../src/assets/developers/Lorenz.jpg';
import Francis from '../src/assets/developers/Francis.jpg'
import James from '../src/assets/developers/James.jpg'
import Nathan from '../src/assets/developers/Nathan.jpg'

class App extends Component{
  
  constructor(){
    super();
  }

  componentDidMount(){

  }
  componentWillUnmount(){

  }

  render(){
    return(
      <div>
        <h1>//Insert Corperation Name//</h1>
        <h3>Stockholders</h3>
        <ul>
          <li>
            <img src={Lorenz} alt="" height={271} width={271}/><br/>
            <p>SUICO, LORENZ GIL GELLA</p>
          </li>
          <li>
            <img src={Francis} alt="" height={271} width={271}/><br/>
            <p>ALISER, FRANCIS LOUIS COLIFLORES</p>
          </li>
          <li>
            <img src={James} alt="" height={271} width={271}/><br/>
            <p>NG, JAMES WINSTON DIOLAN</p>
          </li>
          <li>
            <img src={Nathan} alt="" height={271} width={271}/><br/>
            <p>PERNITES, NATHAN ELDRIDGE COMENDADOR </p>
          </li>
        </ul>
      </div>
    );   
  }

}

export default App;
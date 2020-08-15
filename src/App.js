import React, {Component} from 'react';



class App extends Component {
  
  constructor(){
    super()
    this.state = {
      firstName: "",
      secondName: "",
      IsFilled: false,
      gender: "",
      favColor: "red"
    }
    this.handleChange = this.handleChange.bind(this)
    
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type ==="checkbox" ?  this.setState({[name]: checked}) : this.setState({ [name]: value })
  }

  render() { 
    return (  
      <div>
        <form>
          <input 
            type="text" 
            value={this.state.firstName} 
            name="firstName" 
            placeholder="1" 
            onChange={this.handleChange}/>
        </form>
        <form>
          <input 
            type="text" 
            value={this.state.secondName} 
            name="secondName" 
            placeholder="2" 
            onChange={this.handleChange}/>
        </form>
          <h1>{this.state.firstName} {this.state.secondName}</h1>

        <form>
        <textarea
          placeholder="text area"
          onChange={this.handleChange}
          name="textArea"
          type="text"
          value={this.state.textarea}
          />
          <br/>
      
          </form>
            <h1>{this.state.textArea}</h1>
          <br/>

          <label>
        <input
            type="checkbox"
            name="isFilled"
            checked={this.state.IsFilled}    
            onChange={this.handleChange}
            />Is Filled?
          </label>
        <br/>
          <label>
        <input
            type="radio"
            name="gender"
            value="Male"
            checked={this.state.gender === "Male"}    
            onChange={this.handleChange}
            />Male
          
        <br/>
          </label>
          <label>
            <input
            type="radio"
            name="gender"
            value="Female"
            checked={this.state.gender === "Female"}    
            onChange={this.handleChange}
            />Female
          </label>
        <br/>  
          <select value={this.state.favColor}
            onChange={this.handleChange}
            name="favColor"
          >
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="pink">Pink</option>

          </select>

        
        <h1>{this.state.gender} {this.state.favColor}</h1>

      </div>

    )
  }
}
 
export default App;

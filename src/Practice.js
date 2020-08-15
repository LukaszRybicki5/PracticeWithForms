import React, {Component} from 'react';
import classes from './App.module.css'


class Practice extends Component {
  
  constructor(){
    super()
    this.state = {
        FirstName:"",
        LastName:"",
        Age:"",
        Gender:"",
        Location:"",
        Vegan:false,
        Vegetarian:false,
        Freegarian:false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type ==="checkbox" ?  this.setState({[name]: checked}) : this.setState({ [name]: value })
    console.log(event.target.value)
}

    onSubmit(){
        console.log(
         "Values: " + this.Age

        )
    }    

  render() { 
    return (  
      <div className={classes.Practice}>
        <form>
            <input
                name="FirstName"
                placeholder="FirstName"
                value={this.state.handleChange}
                onChange={this.handleChange}/>
        </form>
        <form>
            <input
                name="LastName"
                placeholder="LastName"
                value={this.state.handleChange}
                onChange={this.handleChange}/>
        </form>
        <form>
            <input  
                type="number"
                name="Age"
                placeholder="Age"
                value={this.state.handleChange}
                onChange={this.handleChange}/>
        </form>
        <br/>
          <label>
        <input
            type="radio"
            name="Gender"
            value="Male"
            checked={this.state.Gender === "Male"}    
            onChange={this.handleChange}
            />Male
        <br/>
          </label>
          <label>
            <input
            type="radio"
            name="Gender"
            value="Female"
            checked={this.state.Gender === "Female"}    
            onChange={this.handleChange}
            />Female
          </label>
        <br/>
        <label>Choose Location: </label>
          <select value={this.state.Location}
            onChange={this.handleChange}
            name="Location"
          >
            <option value="Krakow">Krakow</option>
            <option value="Madrit">Madrit</option>
            <option value="Warsaw">Warsaw</option>
            <option value="Berlin">Berlin</option>
            <option value="London">London</option>
          </select>
        <br/>
        <input
            type="checkbox"
            name="Vegan"
            checked={this.state.Vegan}    
            onChange={this.handleChange}
            />Vegan 
        <br/>
        <input
            type="checkbox"
            name="Vegetarian"
            checked={this.state.Vegetarian}    
            onChange={this.handleChange}
            />Vegetarian
        <br/>
        <input
            type="checkbox"
            name="Freegarian"
            checked={this.state.Freegarian}    
            onChange={this.handleChange}
            />Freegarian    
        <br/>
            <h3>Name: {this.state.FirstName} Last Name:{this.state.LastName}</h3>            
            <h3>Age: {this.state.Age}</h3>            
            <h3>Gender: {this.state.Gender}</h3>            
            <h3>Location: {this.state.Location}</h3>            
            <h3>Diet: {this.state.Vegan ? "Vegan, " : ""} 
            {this.state.Vegetarian ? "Vegetarian, ": ""}          
            {this.state.Freegarian ? "Freegarian, " : ""}</h3>   

        <button onClick={this.onSubmit}>Submit</button>           
      </div>

    )
  }
}
 
export default Practice;

import React from 'react';

class Input extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      fname: '',
      lname: '',
      impression: '',
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({[name]: value});
    console.log(this.state);
  }

  handleSubmit(e) {
    alert(`Please welcome ${this.state.fname} ${this.state.lname}!`);
    e.preventDefault();
    this.setState({
      text: `${this.state.fname} ${this.state.lname}'s best impression is ${this.state.impression}.`
    })
    this.setState({
      fname: '',
      lname: '',
      impression: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="First Name"
          name="fname"
          value={this.state.fname}
          onChange={this.handleChange} />
        <input type="text" placeholder="Last Name"
          name="lname"
          value={this.state.lname}
          onChange={this.handleChange} />
        <input type="text"placeholder="Best Impression"
          name="impression"
          value={this.state.impression}
          onChange={this.handleChange} />
        <button id="submit">Join Us!</button>
        <p>{this.state.text}</p>
      </form>
    )
  }


}

export default Input;

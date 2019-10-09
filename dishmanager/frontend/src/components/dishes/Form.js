import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { addDish } from '../../actions/dishes'

export class Form extends Component {
  state = {
    dish: '',
    price: '',
  }

  static propTypes = {
    addDish: PropTypes.func.isRequired
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { dish, price } = this.state;
    const myDish = { dish, price };
    this.props.addDish(myDish);
    this.setState({ dish: '', price: '' });
  }

  render() {
    const { dish, price } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Dish</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="">Dish</label>
            <input type="text" className="form-control" name="dish" onChange={this.onChange} value={dish} />
          </div>
          <div className="form-group">
            <label htmlFor="">Price</label>
            <input type="decimal" className="form-control" name="price" onChange={this.onChange} value={price} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, {addDish})(Form)

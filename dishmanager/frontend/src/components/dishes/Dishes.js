import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDishes, deleteDish } from '../../actions/Dishes';

const invertDir = {
  asc: 'desc',
  desc: 'asc'
}

export class Dishes extends Component {
  state = {
    isOrdered: false,
    menuData: '',
    sortDir: 'desc',
    search: ''
  };

  static propTypes = {
    dishes: PropTypes.array.isRequired,
    getDishes: PropTypes.func.isRequired,
    deleteDish: PropTypes.func.isRequired,
  }

  componentDidMount(){
    this.props.getDishes();
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  sortDish = () => {
    const unsortedMenu = this.props.dishes;
    const dir = this.state.sortDir;
    const sortedMenu = unsortedMenu.sort(function(a,b){
      var textA = a.dish.toUpperCase();
      var textB = b.dish.toUpperCase();
      if(dir === 'asc'){
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      }else if(dir === 'desc'){
        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
      }
    });
    this.setState(state => ({
      menuData: sortedMenu,
      sortDir: state.sortDir === 'asc' ? 'desc' : 'asc'
    }));
  }

  sortPrice = () => {
    const unsortedMenu = this.props.dishes;
    const dir = this.state.sortDir;
    const sortedMenu = unsortedMenu.sort(function(a,b){
      if(dir === 'asc'){
        return a.price - b.price;
      }else{
        return b.price - a.price;
      }
    });
    this.setState(state => ({
      menuData: sortedMenu,
      sortDir: state.sortDir === 'asc' ? 'desc' : 'asc'
    }));
  }

  render() {
    let filteredMenu = this.props.dishes.filter(
      (dish) => {
        return dish.dish.toLowerCase().includes(this.state.search.toLowerCase());
      }
    );
    return (
      <Fragment>
          <input type="text" value={this.state.search} onChange={this.onChange} name="search" placeholder="Search for an item!"/>
          <h2>Dishes</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th><div onClick={() => this.sortDish()}>Dish</div></th>
                <th><div onClick={() => this.sortPrice()}>Price</div></th>
                {/* <th></th> */}
              </tr>
            </thead>
            <tbody>
              {
                filteredMenu.map(dish => (
                  <tr key={dish.id}>
                    <td>{dish.id}</td>
                    <td>{dish.dish}</td>
                    <td>{dish.price}</td>
                    {/* <td><button onClick={this.props.deleteDish.bind(this, dish.id)} className="btn btn-danger btn-sm">Delete</button></td> */}
                  </tr>
                ))
              }
            </tbody>
          </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  dishes: state.dishes.dishes
})

export default connect(mapStateToProps, { getDishes, deleteDish })(Dishes);

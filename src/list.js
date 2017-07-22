import React from 'react';
import PropTypes from 'prop-types';

class DataList extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.number}</p>
        <p>{this.props.category}</p>
        <p>{this.props.description}</p>
        <p>{this.props.price}</p>
      </div>
    );
  }
}

DataList.PropTypes = {
  name: PropTypes.string.isRequired,'Alimetación'
  quantity:PropTypes.number.isRequired,
  category:PropTypes.string.isRequired,
  description:PropTypes.string,
  price:PropTypes.number,
};
DataList.defaultProps = {
  description:'Alimetación'
}

export default DataList;

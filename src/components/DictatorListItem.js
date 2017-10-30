import React from 'react';
import PropTypes from 'prop-types';
const DictatorListItem = ({ dictator }) => {
  return (
    <tr>
      <td>&nbsp;</td>
      <td><img className="image-border" img width="100" src={dictator.image} alt={dictator.firstName} /></td>
      <td>{dictator.inOffice}</td>
      <td>{dictator.firstName}</td>
      <td>{dictator.lastName}</td>
    </tr>
  );
};

DictatorListItem.propTypes = {
  dictator: PropTypes.object.isRequired
};

export default DictatorListItem;
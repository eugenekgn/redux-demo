import React from 'react';
import PropTypes from 'prop-types';
import DictatorListItem from "./DictatorListItem";

const DictatorsList = ({ dictators }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Portrait</th>
          <th>In Office</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {dictators.map(dictator =>
          <DictatorListItem key={dictator.id} dictator={dictator} />
        )}
      </tbody>
    </table>
  );
};

DictatorsList.propTypes = {
  dictators: PropTypes.array.isRequired
};

export default DictatorsList;
import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
const FilterController = ({ handleFilter }) => {
  return (
    <ButtonGroup className="float-left">
      <Button onClick={() => handleFilter('all')}>All</Button>
      <Button onClick={() => handleFilter('running')}>Running</Button>
      <Button onClick={() => handleFilter('complete')}>Complete</Button>
    </ButtonGroup>
  );
};

FilterController.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterController;

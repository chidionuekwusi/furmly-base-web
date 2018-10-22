import React from "react";
import PropTypes from "prop-types";


const GridLayout = props => {
  const { list, itemView, commandsView, commandViewResult, filter } = props;
  const elements = [filter, list, itemView, commandsView, commandViewResult];
  return <React.Fragment>{elements}</React.Fragment>;
};

GridLayout.propTypes = {
  filter: PropTypes.element,
  itemView: PropTypes.element,
  list: PropTypes.element,
  commandView: PropTypes.element,
  commandViewResult: PropTypes.element
};
export default GridLayout;

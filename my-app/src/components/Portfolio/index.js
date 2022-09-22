import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
  const { currentPage } = props;
  console.log(props)
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentPage)}</h1>
    </section>
  );
}
export default Portfolio;

import React from 'react';
import { PropTypes } from 'prop-types'

const Result = ({ value }) => (
    <div className='result'>
        <span defaultValue="0" > {value} </span>
    </div>
);

Result.propTypes = {
    value: PropTypes.string.isRequired
}
Result.defaultProps = {
    value: "0"
}

export default Result;

import React, { FC } from 'react';

type Prop = {
    value: string
}

const Result: FC<Prop> = ({ value }) => (
    <div className='result'>
        <span defaultValue="0" > {value} </span>
    </div>
);

Result.defaultProps = {
    value: "0"
}

export default Result;

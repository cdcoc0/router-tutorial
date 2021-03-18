import React from 'react';
import qs from 'qs';

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const showDetail = query.detail === 'true';

    return(
        <div>
            <h1>intro</h1>
            <p>the objective of this project is to practice basic skills of the react router</p>
            {showDetail && <p>set detail true</p>}
        </div>
    );
};

export default About;
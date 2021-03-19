import React from 'react';
import {Link, Route} from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return (
        <div>
            <h3>User List</h3>
            <ul>
                <li>
                    <Link to="/profiles/chopkiri">Chopkiri</Link>
                </li>
                <li>
                    <Link to="/profiles/honggildong">Honggildong</Link>
                </li>
            </ul>

            <Route
            path="/profiles"
            exact
            render={() => <div>please select a user</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
}

export default Profiles;
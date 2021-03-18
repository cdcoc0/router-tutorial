import React from 'react';

const data = {
    chopkiri: {
        name: 'kiri',
        description: 'an intelligent developer who loves React'
    },
    honggildong: {
        name: 'gildong',
        description: 'a main character of Korean fairy tale'
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];
    if(!profile) {
        return (
            <div>{username} doesn't exist on our data</div>
        );
    }
    
    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;
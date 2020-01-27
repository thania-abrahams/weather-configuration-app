import React from 'react';

const seasonConfig = {
    winter: {
        text: 'Brr...it\'s chilly!',
        icon: 'snowflake'
    },
    summer: {
        text: 'Let\'s go to the beach!',
        icon: 'sun'
    },
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
};

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // const text = season === 'winter' ? 'Brr...it\'s chilly!' : 'Let\'s go to the beach!';
    // const icon = season === 'winter' ? 'snowflake' : 'sun';

    const {text, icon } = seasonConfig[season];

    return (
        <div style={styles}>
            <i className={`${icon} icon massive`}></i>
                <h1>{text}</h1>
            <i className={`${icon} icon massive`}></i>
        </div>
    );
}

export default SeasonDisplay;
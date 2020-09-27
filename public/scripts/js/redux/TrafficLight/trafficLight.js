// TrafficLight/trafficLight.js
console.log( "Mounting TrafficLight/trafficLight.js..." );

export const types = {
    STOP: 'STOP',
    CAUTION: 'CAUTION',
    GO: 'GO'
};

const initialState = {
    currentTime: new Date().toString()
}

export const reducer = (state = initialState, action) => {
    return state;
}

export const actions = {
    updateTime: () => ({type: types.FETCH_NEW_TIME})
}

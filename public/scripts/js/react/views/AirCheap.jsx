// src/views/OctoPlex/AirCheap.jsx: 
console.log("Mounting AirCheap.jsx... <AirCheap />");

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//..............................................................................................
//  The user will interact with the applicaiton by filling to text fiels (Origin and 
//  Destination), and to make things easier to the user, auto-suggest feature is implemented.
//..............................................................................................
import Select from 'react-select';

import airportActionCreators from '../../redux/AirCheap/airportActionCreators';
import TicketItem from '../../components/AirCheap/TicketItem';
//import logo from '../../assets/images/octoplex-logo-primary-black.png';
import logo from '../../assets/images/aircheap-logo.png';


class AirCheap extends Component {
    
    componentDidMount() {
        this.props.fetchAirports;    
    }
    
    render() {
        return (
            <div className="aircheap">
                <header>
                    <div className="header-brand">
                        <img src={logo} alt='AirCheap' width="400" />
                        <p>Check discount ticket prices and pay using your AirCheap points</p>
                    </div>
                    <div className="header-route">
                        <Select
                            name="origin"
                            value={this.props.origin}
                            options={this.props.airports}
                            onChange={this.props.onChooseAirport.bind(this, 'origin')}
                        />
                        <Select
                            name="destination"
                            value={this.props.destination}
                            options={this.props.airports}
                            onChange={this.props.onChooseAirport.bind(this, 'destination')}
                        />
                    </div>
                </header>
                <div className="section">
                    <TicketItem />
                </div>                    
            </div>
        )            
    }
}

//..............................................................................................
//  Notice the code above that the Select component requires three props: A name, the complete
//  list of options to display (the airport lists) and the selected value.
//..............................................................................................
AirCheap.propTypes = {
    airports: PropTypes.array.isRequired,
    origin: PropTypes.string,
    destination: PropTypes.string,
    fetchAirports: PropTypes.func.isRequired,
    onChooseAirport: PropTypes.func.isRequired
}

const mapStateToProps = ( state ) => (
    {
        airports: state.airports
            .map( airport => ( {
                value: airport.code,
                label: `${airport.city} - ${airport.country} (${airport.code})`  
            } )
        ),
        origin: state.route.origin,
        destinations: state.route.destination
    }        
)

const mapDispatchToProps = ( dispatch ) => (
    {
        fetchAirports: () => dispatch( airportActionCreators.fetchAirports() ),
        onChooseAirport: ( target, airport ) => dispatch(
            airportActionCreators.chooseAirpot( target, airport )
        )
    }    
)

const AirCheapContainer = connect( mapStateToProps, mapDispatchToProps) (AirCheap);

export default AirCheapContainer;

// eof

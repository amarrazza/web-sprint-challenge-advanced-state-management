import React, { useEffect } from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getSmurf } from '../actions';

 const SmurfList = (props)=> {
    const { smurfs, isLoading, dispatch } = props;
    // const testSmurf = {
    //     id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    //     name:'Poppa Smurf',
    //     position:'Village Leader',
    //     nickname: 'Pops',
    //     description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    // }

    useEffect(() => {
        dispatch(getSmurf());
    }, [])

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    
    return(
    <div className="listContainer">
        {
            smurfs.map(smurf => {
            
            return <Smurf key={smurf.id} smurf={smurf}/>
            
            // return <Smurf key={smurf.id} smurf={smurf}/>
        })
        }
    </div>
    );
}

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        smurfs: state.smurfs
    };
};


export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
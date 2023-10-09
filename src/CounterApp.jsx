import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handelAdd = () => {
        // console.log(event)
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 )
    }

    const handelSubstact = () => setCounter( counter - 1 );

    const handelReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handelAdd }> +1 </button>
            <button onClick={ handelSubstact }> -1 </button>
            <button onClick={ handelReset }> Reset </button>
        </>
    );
  }


CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
import React from "react";
import { CirclesWithBar } from 'react-loader-spinner'
import spinnerLogo from '../assets/new-logo.gif'

const Spinner = () => {
    return (
        <div class="d-flex justify-content-center spinner">
            <CirclesWithBar
                height="100"
                width="100"
                color="#ffffff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            />
            {/* <img src={spinnerLogo} alt="loading..." /> */}
        </div>
    );
};

export default Spinner;
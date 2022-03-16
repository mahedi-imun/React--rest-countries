import React from 'react';

const Country = (props) => {
    console.log(props.country);
    const {name,population,capital , flags} = props.country
    return (
        <div className="country">
            <img src={flags.png} alt="" />
            <h3> country name:{name.common}</h3>
            <p>population:{population}</p>
            <h5> Capital City:{capital}</h5>

        </div>
    );
};

export default Country;

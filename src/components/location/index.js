import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.604271510314!2d-73.99142824865636!3d40.77072774185551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25859339452f7%3A0xefb0711781c769e!2sJohn%20Jay%20College%20of%20Criminal%20Justice!5e0!3m2!1sen!2sus!4v1611175596465!5m2!1sen!2sus"
                width="100%" height="500px" frameBorder="0"
                allowFullScreen title="B R U H">

            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;

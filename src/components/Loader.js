import React from 'react';
import PropTypes from 'prop-types';
import { PENDING } from '../constants';
import '../assets/scss/Loader.scss';

const Loader = (props) => props.status === PENDING ? <div className="loader" /> : null

Loader.propTypes = {
    status: PropTypes.string
}

export default Loader;
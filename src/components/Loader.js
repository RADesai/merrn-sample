import React from 'react';
import PropTypes from 'prop-types';
import { PENDING, FULFILLED } from '../constants';
import '../assets/scss/Loader.scss';

export default function Loader(props) {
    const { status } = props;

    const getLoaderStyle = () => {
        return status === PENDING
            ? { color: '1px solid #fff' }
            : status === FULFILLED ? { color: '1px solid #7AB58D' } : { color: '1px solid #A70B0B' }
    }

    return status === PENDING
        ? <div
            className="loader"
            style={ getLoaderStyle() }>Loading ...</div>
        : <div />
}

Loader.propTypes = {
    status: PropTypes.string
}
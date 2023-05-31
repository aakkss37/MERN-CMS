/* eslint-disable prettier/prettier */
import React from 'react'
import { CAlert } from '@coreui/react'
import PropTypes from 'prop-types';
import '../popup.css'

const Error = (props) => {
	return (
		<div className='slide-left'>
			<CAlert color="danger" variant="solid">{props.errorText}</CAlert>
		</div>
	)
}

Error.propTypes = {
	errorText: PropTypes.string,
};
export default Error
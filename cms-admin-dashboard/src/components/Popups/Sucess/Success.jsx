/* eslint-disable prettier/prettier */
import React from 'react'
import { CAlert } from '@coreui/react'
import PropTypes from 'prop-types';
import '../popup.css'

const Success = (props) => {
	return (
		<div className='slide-left'>
			<CAlert color="success" variant="solid">{props.successText}</CAlert>
		</div>
	)
}

Success.propTypes = {
	successText: PropTypes.string,
};
export default Success
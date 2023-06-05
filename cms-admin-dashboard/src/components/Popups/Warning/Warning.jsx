/* eslint-disable prettier/prettier */
import React from 'react'
import { CAlert } from '@coreui/react'
import PropTypes from 'prop-types';
import '../popup.css'

const Warning = (props) => {
	return (
		<div className='slide-left'>
			<CAlert color="danger" variant="solid">{props.warningText}</CAlert>
		</div>
	)
}

Warning.propTypes = {
	warningText: PropTypes.string,
};
export default Warning
/* eslint-disable prettier/prettier */
import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
	return (
		<CFooter>
			<div>
				<a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
					Agile Global Solution
				</a>
				<span className="ms-1">&copy; 2023 Software Solution.</span>
			</div>
			<div className="ms-auto">
				<span className="me-1">Powered by</span>
				<a href="https://www.agumentik.com/" target="_blank" rel="noopener noreferrer">
					Agumentik Group of company.
				</a>
			</div>
		</CFooter>
	)
}

export default React.memo(AppFooter)

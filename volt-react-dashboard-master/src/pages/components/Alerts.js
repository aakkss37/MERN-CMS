
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Alert, Button, Container } from '@themesberg/react-bootstrap';

import Documentation from "../../components/Documentation";

export default () => {
	const [customerData, setCustomerData] = useState([])

	// useEffect(() => {
	// 	const getCustomerData = async()=> {
	// 		console.log("something")
	// 	}
	// 	getCustomerData
	// }, [])



	return (
		<article style={{ minHeight: '80vh' }}>
			<Container className="px-0">
				<Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
					<Col className="d-block mb-4 mb-md-0">
						<h1 className="h2">Contect Query</h1>
						<p className="mb-0">
							Use alerts to provide contextual feedback to your users based on their input and behaviour.
						</p>
					</Col>
				</Row>
				<br /><br />
				<table style={{ width: '100%' }}>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Phone Number</th>
							<th>Subject</th>
						</tr>
					</thead>
					<tbody>
						{
							customerData?.map(item => (
								<tr>
									<td>{item.firstName}</td>
									<td>{item.lastName}</td>
									<td>{item.email}</td>
									<td>{item.phoneNumber}</td>
									<td>{item.subject}</td>
								</tr>
							))
						}

					</tbody>
				</table>


			</Container>
		</article>
	);
};

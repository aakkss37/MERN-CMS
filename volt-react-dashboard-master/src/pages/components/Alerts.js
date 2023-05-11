
import React, { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import axios from "axios"


export default () => {
	const [customerData, setCustomerData] = useState([])

	useEffect(() => {
		const getCustomerData = async () => {
			try {
				const resp = await axios.get("https://mern-cms-server.onrender.com/contact-page/add-query/get")
				console.log("responce: ", resp.data.data)
				setCustomerData(resp.data.data)
			} catch (error) {
				console.log(error)
			}
		}
		getCustomerData()
	}, [])

	const conponentPDF = useRef();
	const exportToPdf = useReactToPrint({
		content: () => conponentPDF.current,
		documentTitle: "Query-List",
	})

	return (
		<article style={{ minHeight: '80vh' }}>
			<Container className="px-0">
				<div ref={conponentPDF} style={{ width: '100%', padding: "20px"}}>
					<Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
						<Col className="d-block mb-4 mb-md-0">
							<h1 className="h2">Contect Query</h1>
							<p className="mb-0">
								Here is the list of query asked by visiters.
							</p>
						</Col>
					</Row>
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
						<br />
						<tbody>
							{
								customerData?.map(item => (
									<tr>
										<td>{item.firstName}</td>
										<td>{item.lastName}</td>
										<td>{item.email}</td>
										<td>{item.phone}</td>
										<td>{item.subject}</td>
									</tr>
								))
							}

						</tbody>
					</table>
				</div>
				<br /><br />
				<button style={{ border: 'none',marginLeft: "20px", background: 'rgb(97 218 251)', padding: '10px 30px', color: 'white', borderRadius: '5px', fontWeight: "800" }}
					onClick={exportToPdf}
				>
					Export
				</button>
			</Container>
		</article>
	);
};

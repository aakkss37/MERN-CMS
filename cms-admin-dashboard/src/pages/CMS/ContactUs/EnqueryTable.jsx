/* eslint-disable prettier/prettier */
import React, { useRef } from 'react'
import './contactUs.css'
import { useReactToPrint } from "react-to-print";
import CIcon from '@coreui/icons-react'
import { cilPrint } from '@coreui/icons'
import {
	CCol,
	CCard,
	CCardBody,
	CCardHeader,
	CButton,
	CTable,
	CTableHead,
	CTableRow,
	CTableHeaderCell,
	CTableBody,
	CTableDataCell,
} from '@coreui/react'

const EnqueryTable = () => {

	const PDFcomponent = useRef()

	const generatePDF = useReactToPrint({
		content: () => PDFcomponent.current,
		documentTitle: "Userdata",
		// onAfterPrint: () => alert("Data saved in PDF")   //==> action after print
	});

	return (
		<div>
			<div>
				<CCol xs={12}>
					<CCard className="mb-4" ref={PDFcomponent} style={{ width: '100%' }}>
						<CCardHeader>
							<strong>QUERY TABLE</strong>
							<CButton
								color='none'
								style={{ float: "right" }}
								onClick={generatePDF}
							>
								<CIcon icon={cilPrint} />
							</CButton>
						</CCardHeader>
						<CCardBody>
							<CTable striped hover>
								<CTableHead>
									<CTableRow>
										<CTableHeaderCell scope="col">S.No</CTableHeaderCell>
										<CTableHeaderCell scope="col">First Name</CTableHeaderCell>
										<CTableHeaderCell scope="col">Last Name</CTableHeaderCell>
										<CTableHeaderCell scope="col">Email</CTableHeaderCell>
										<CTableHeaderCell scope="col">Phone</CTableHeaderCell>
										<CTableHeaderCell scope="col">Subject</CTableHeaderCell>
									</CTableRow>
								</CTableHead>
								<CTableBody>
									<CTableRow>
										<CTableHeaderCell scope="row">1</CTableHeaderCell>
										<CTableDataCell>Amar</CTableDataCell>
										<CTableDataCell>Kumar</CTableDataCell>
										<CTableDataCell>amar@mdo.com</CTableDataCell>
										<CTableDataCell>1234567890</CTableDataCell>
										<CTableDataCell>Query Subject</CTableDataCell>
									</CTableRow>
									<CTableRow>
										<CTableHeaderCell scope="row">2</CTableHeaderCell>
										<CTableDataCell>Amar</CTableDataCell>
										<CTableDataCell>Kumar</CTableDataCell>
										<CTableDataCell>amar@fat.com</CTableDataCell>
										<CTableDataCell>1234567890</CTableDataCell>
										<CTableDataCell>Query Subject</CTableDataCell>
									</CTableRow>
									<CTableRow>
										<CTableHeaderCell scope="row">3</CTableHeaderCell>
										<CTableDataCell colSpan="2">Amar</CTableDataCell>
										<CTableDataCell>amar@twitter.com</CTableDataCell>
									</CTableRow>
									<CTableRow>
										<CTableHeaderCell scope="row">4</CTableHeaderCell>
										<CTableDataCell colSpan="2">Amar</CTableDataCell>
										<CTableDataCell>amar@twitter.com</CTableDataCell>
										<CTableDataCell>1234567890</CTableDataCell>
										<CTableDataCell>Query Subject</CTableDataCell>
									</CTableRow>
									<CTableRow>
										<CTableHeaderCell scope="row">5</CTableHeaderCell>
										<CTableDataCell>Amar</CTableDataCell>
										<CTableDataCell>Kumar</CTableDataCell>
										<CTableDataCell>amar@mdo.com</CTableDataCell>
										<CTableDataCell>1234567890</CTableDataCell>
										<CTableDataCell>Query Subject</CTableDataCell>
									</CTableRow>
								</CTableBody>
							</CTable>
						</CCardBody>
					</CCard>
				</CCol>
			</div>
		</div>
	)
}

export default EnqueryTable
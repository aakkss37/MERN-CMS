/* eslint-disable prettier/prettier */
import React from 'react'
import './career.css'
import {
	CCol,
	CCard,
	CCardBody,
	CCardHeader,
	CForm,
	CFormInput,
	CFormLabel,
	CButton,
	CAccordion,
	CAccordionItem,
	CAccordionHeader,
	CAccordionBody,
} from '@coreui/react'
import QuillEditor from 'src/components/quill/Quill';
import CIcon from '@coreui/icons-react';
import { cilPen, cilTrash } from '@coreui/icons';
const modules = {
	toolbar: [
		["bold", "italic", "underline", "strike",],
		[{
			color: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'magenta', 'teal', 'navy', 'olive', 'silver', 'maroon', 'lime', 'aqua', 'indigo', 'coral', 'white',]
		}],   // dropdown with defaults from theme
		[{ background: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'] }]     // dropdown with defaults from theme
		['clean']                                         // remove formatting button
	]
};

const accordionDummyData = [
	{
		id: 1,
		title: "Accordion 1",
		text: '<strong>This is the first items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',
	},
	{
		id: 2,
		title: "Accordion 2",
		text: '<strong>This is the first items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',
	},
	{
		id: 3,
		title: "Accordion 3",
		text: '<strong>This is the first items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',
	},
	{
		id: 4,
		title: "Accordion 4",
		text: '<strong>This is the first items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.',
	},
]

const PerksAndBenifits = () => {
	return (
		<div>
			<CCol xs={12}>
				<CCard className="mb-4">
					<CCardHeader>
						<strong>PERKS AND BENEFITS</strong>
					</CCardHeader>
						<CCardBody>
							<CAccordion activeItemKey={1}>
								{
									accordionDummyData?.map((item, index) => (
										<CAccordionItem itemKey={index + 1} key={index}>
											<CAccordionHeader>{item?.title}</CAccordionHeader>
											<CAccordionBody>
												{item?.text}
												<div style={{ display: "flex", justifyContent: "flex-end" }}>
													<CButton color='none' >
														<CIcon icon={cilPen} style={{ fontWeight: 800 }} />
													</CButton>
													<CButton color='none' >
														<CIcon icon={cilTrash} style={{ fontWeight: 800 }} />
													</CButton>
												</div>
											</CAccordionBody>
										</CAccordionItem>
									))
								}
							</CAccordion>
						</CCardBody>
					<CCardBody>
						<CCard className="mb-4" style={{ padding: "10px", boxShadow: "0px 0px 9px 1px rgba(0,0,0,0.20)" }}>
							<CForm>
								<div>
									<div className="mb-3">
										<CFormLabel htmlFor="careerPerksAndBenefits">Title</CFormLabel>
										<CFormInput
											type="text"
											id="careerPerksAndBenefits"
											placeholder="Eg: Healthcare Insurance"
										/>
									</div>
									{/* QUILL */}
									<QuillEditor
										modules={modules}
										value={"<strong>This is the first items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."}
										className='career__life__at__agile'
										text='Text'
									/>
								</div>
							</CForm>
						</CCard>
						<CButton
							color="primary"
							className='cms__career__life__add_button'
						>
							Add New Perks and Benifits
						</CButton>
					</CCardBody>
				</CCard>
			</CCol>
		</div>
	)
}

export default PerksAndBenifits



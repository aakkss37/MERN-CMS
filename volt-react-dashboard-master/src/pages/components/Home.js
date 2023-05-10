
import React, { useEffect, useRef, useState } from 'react';
import { Row, Col, Container } from '@themesberg/react-bootstrap';
import axios from 'axios';

// import AccordionComponent from "../../components/AccordionComponent";
// import Documentation from "../../components/Documentation";

const inputConatinerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '15px', }
const inputStyle = { flexGrow: 1, padding: '10px', width: '80%', border: '1px solid #ccc', borderRadius: '4px', fontSize: 16 }
const updateButtonStyle = { padding: '10px', borderRadius: '4px', fontSize: 16, border: 'none', background: '#61dafb', color: 'white', fontWeight: '800' }
const cardBackground = { display: 'flex', gap: '15px', }



const overviewCard = [
	{
		id: 1,
		img: 'img.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: 2,
		img: 'img.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: 3,
		img: 'img.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: 4,
		img: 'img.jpg',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
]


const recognitinAndAward = [
	{
		id: 1,
		img: 'img.jpg',
		title: 'Head',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: 2,
		img: 'img.jpg',
		title: 'Head',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: 3,
		img: 'img.jpg',
		title: 'Head',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: 4,
		img: 'img.jpg',
		title: 'Head',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
]



export default () => {

	const [showNewCardForm, setShowNewCardForm] = useState(false);
	const [changeingCompnentId, setchangeingCompnentId] = useState();
	const imageInputRef = useRef();
	const updateComponent = (id)=>{
		console.log(id)
	}


	useEffect(() => {
	  const getBannerData = async ()=> {
		try {
			const resp = await axios.get("http://localhost:8000/home-page/banner/update/title")
			console.log(resp.data)
		} catch (error) {
			console.log(error)
		}
	  }
	  getBannerData();
	}, [])
	

	// BANNER
	const [bannerTitle, setBannerTitle] = useState("");
	const [bannerText, setBannerText] = useState("");
	const [bannerImageName, setBannerImageName] = useState();

	const handleChangeImage = (file)=> {
		setBannerImageName(file.name)
		console.log(changeingCompnentId)
	}
	
	const handleUpdateBannerTitle = async()=> {
		try {
			const resp = await axios.post("http://localhost:8000/home-page/banner/update/title", {
				title: bannerTitle
			})
			console.log("responce: ", resp.data)
			setBannerTitle("")
		} catch (error) {
			console.log(error)
		}
	}
	const handleUpdateBannerText = ()=> {

	}






	return (

		<article>
			<Container className="px-0">
				<Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
					<Col className="d-block mb-4 mb-md-0">
						<h1 className="h1">Home Page</h1>
						<p className="mb-0">
							Use the Home page CMS to change the content of home page of <b>Agile gloable solution website</b>.
						</p>
					</Col>
				</Row>

				{/* BANNER */}

				<div className="pt-2">
					<h2 style={{ color: 'gray', textAlign: 'center' }}>BANNER</h2>
					<Row>
						<Col xs={12}>
							<h4 >Banner Title </h4>
							<p>Current Value : INNOVATION</p>
							<div style={inputConatinerStyle}>
								<input type='text' value={bannerTitle}
								placeholder='Enter head title for Agile global solution home page' style={inputStyle} 
									onChange={(e)=>setBannerTitle(e.target.value)}/>
								<button style={updateButtonStyle} onClick={handleUpdateBannerTitle}>Update</button>
							</div>
						</Col>
					</Row>
					<br /><br />
					<Row>
						<Col xs={12}>
							<h4 >Banner Text </h4>
							<p>Current Value : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies tortor ac.</p>
							<div style={inputConatinerStyle}>
								<input type='text' 
								placeholder='Enter New Text' style={inputStyle} 
									value={bannerText}
									onChange={(e) => setBannerText(e.target.value)}/>
								<button style={updateButtonStyle} onClick={handleUpdateBannerText} >Update</button>
							</div>
						</Col>
					</Row>
					<br /><br />
					<Row>
						<Col xs={12}>
							<h4 >Banner Image </h4>
							<p>Current Value : <a href=''>Open Image</a></p>
								<p>{bannerImageName}</p>
							<div style={inputConatinerStyle}>
								<button variant="outlined" component="label" style={updateButtonStyle} onClick={()=> imageInputRef.current.click()}>
									Upload Banner Image
								</button>
								<input hidden accept="image/*" type="file" ref={imageInputRef} onChange={(e) => { handleChangeImage(e.target.files[0]) }}  />
								{/* handleChangeImage(e.target.files[0]) */}
							</div>
						</Col>
					</Row>
					<br /><br />
				</div>


				{/* COMPANY OVERVIEW */}

				<div className="pt-2">
					<h2 style={{ color: 'gray', textAlign: 'center' }}>COMPANY OVERVIEW</h2>

					<Row>
						<Col xs={12}>
							<h4 >Overview Text </h4>
							<p>Current Value : Agile Global Solutions, Inc (AGILE GLOBAL) founded in 2003 is a global Business and IT solutions provider headquartered in Folsom, CA (a suburb of Sacramento) servicing prestigious clients all over the world.</p>
							<div style={inputConatinerStyle}>
								<textarea type='text' placeholder='About Company' rows='5' style={inputStyle}  />
								<button style={updateButtonStyle} >Update</button>
							</div>
						</Col>
					</Row>
					<br /><br />
					<Row>
						<Col xs={12}>
							<h4 >Overview Card  </h4>
							{
								overviewCard.map((item, index) =>
									<div style={{ border: '1px solid gray', marginBottom: '10px', borderRadius: "5px", padding: '10px', }} key={index}>
										<h6>Card {index + 1}</h6>
										<div style={cardBackground}>
											<p>Card background : <a href=''>Open Image</a></p>
											<button variant="outlined" component="label" style={updateButtonStyle} onClick={() => { setchangeingCompnentId(item.id); return imageInputRef.current.click() }}>
												Change
											</button>
											<input hidden accept="image/*" type="file" ref={imageInputRef} onChange={(e) => handleChangeImage(e.target.files[0])} />
										</div>
										<br />
										<p>Card Heading : Gloable best</p>
										<div style={inputConatinerStyle}>
											<input type='text' placeholder='Card Title' style={inputStyle} />
											<button style={updateButtonStyle} >Update</button>
										</div>
										<br />
										<p>Card Text : Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
										<div style={inputConatinerStyle}>
											<input type='text' placeholder='Card Text' style={inputStyle} />
											<button style={updateButtonStyle} >Update</button>
										</div>
									</div>
								)
							}

						</Col>
					</Row>
					
					{
						showNewCardForm ? <div style={{ border: '1px solid gray', marginTop: '10px', borderRadius: "5px", padding: '10px', background: '#262b40' }}>
							<h6>New Card </h6>
							<div style={cardBackground}>
								<button variant="outlined" component="label" style={updateButtonStyle} >
									Select Background Image
									<input hidden accept="image/*" type="file" onChange={(e) => { }} />
									{/* handleChangeImage(e.target.files[0]) */}
								</button>
							</div>
							<br />
							<p style={{color: 'white'}}>Card Heading : Gloable best</p>
							<div style={inputConatinerStyle}>
								<input type='text' placeholder='Card Title' style={inputStyle} />
							</div>
							<br />
							<p style={{ color: 'white' }}>Card Text : Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
							<div style={inputConatinerStyle}>
								<input type='text' placeholder='Card Text' style={inputStyle} />
							</div>
							<br />
							<button style={updateButtonStyle} >Save & Upload</button>
						</div>
							: <button onClick={() => setShowNewCardForm(true)} style={{ border: 'none', background: '#262b40', width: '100%', padding: '10px', color: 'white', borderRadius: '5px' }}>Add New Card</button>
					}
				</div>
				<br /><br /><br /><br /><br /><br />



				{/* RECOGNITION & AWARDS */}

				<div className="pt-2">
					<h2 style={{ color: 'gray', textAlign: 'center' }}>RECOGNITION & AWARDS </h2>


					<Row>
						<Col xs={12}>
							{
								recognitinAndAward.map((item, index) => {
									return (
										<div style={{ border: '1px solid gray', marginBottom: '10px', borderRadius: "5px", padding: '10px', }} key={index}>
											<h6>Recognition {index + 1}</h6>
											<div style={cardBackground}>
												<p>Card background : <a href=''>Open Image</a></p>
												<button variant="outlined" component="label" style={updateButtonStyle} onClick={() => { setchangeingCompnentId(item.id); return imageInputRef.current.click()}}>
													Change
												</button>
												<input hidden accept="image/*" type="file" ref={imageInputRef} onChange={(e) => handleChangeImage(e.target.files[0]) } />
											</div>
											<br />
											<p>Recognition Title : {item.title}</p>
											<div style={inputConatinerStyle}>
												<input type='text' placeholder='Enter New Recognition Title' style={inputStyle} />
												<button style={updateButtonStyle} >Update</button>
											</div>
											<br />
											<p>Recognition Text : {item.text} </p>
											<div style={inputConatinerStyle}>
												<input type='text' placeholder='Card Text' style={inputStyle} />
												<button style={updateButtonStyle} onClick={()=> updateComponent(item.id)}>Update</button>
											</div>
											<br />
											<button style={{ border: 'none', background: '#ff4e04c2', padding: '10px', color: 'white', borderRadius: '5px' }}>Delete Recognition</button>
										</div>
									)
								}
								)
							}

						</Col>
					</Row>

				</div>

			</Container>
		</article>
	)
}

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';



const headerBox = {
	position: 'relative',
	width: '300px',
	height: '300px',
	border: '5px solid rgb(47 87 130)',
	borderRadius: '50%',
}

const headerImage = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	zIndex: 100,
	borderRadius: '50%',
}



const OfficeAdd = (props) => {

	const boxRef = useRef(null);
	const imageRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		const boxElement = boxRef.current;
		const imageElement = imageRef.current;
		const textElement = textRef.current;

		gsap.set(boxElement, { position: "relative" });
		gsap.set(imageElement, {
			position: "absolute",
			border: "none",
			width: "100%",
			height: "100%",
			objectFit: "cover",
			top: 0,
			left: 0
		});
		gsap.set(textElement, {
			position: "absolute",
			top: "30%",
			left: "60%",
			transform: "translate(-50%, -50%)",
			autoAlpha: 0
		});

		const tl = gsap.timeline({ paused: true });

		tl.to(imageElement, { y: "60%", duration: 1, ease: "power2.out" }).to(
			textElement,
			{ autoAlpha: 2, duration: 0.5 },
			"-=0.5"
		);

		boxElement.addEventListener("mouseenter", () => tl.play());
		boxElement.addEventListener("mouseleave", () => tl.reverse());

		return () => {
			boxElement.removeEventListener("mouseenter", () => tl.play());
			boxElement.removeEventListener("mouseleave", () => tl.reverse());
		};
	}, []);

	return (
		<div ref={boxRef} style={headerBox}>
			<img ref={imageRef} src={props.hq} alt="" style={headerImage} />
			<div ref={textRef} >
				<p className='text-[20px] leading-[32px] my-2' style={{ fontWeight: 800 }}>{props.place}</p>
				<p className='text-[14px]'>(916) 655-7745 [Work]</p>
				<p className='text-[14px]'>(916) 848-3659 [Fax]</p>
			</div>
		</div>
	)
}

export default OfficeAdd
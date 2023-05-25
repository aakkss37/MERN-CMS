/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import ReactQuill from "react-quill";
import PropTypes from 'prop-types';
import './quillStyle.css'



function QuillEditor (props) {
	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, 4, 5, 6, false] }],		// toggled buttons
			["bold", "italic", "underline", "strike", "blockquote"],
			[{ size: ['small', 'large', 'huge'] }],			// custom dropdown
			[{ font: [] }],
			[{ 'header': 1 }, { 'header': 2 }],               // custom button values
			[{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
			[{ align: ["right", "center", "justify"] }],
			[{ list: "ordered" }, { list: "bullet" }],
			["link", "image"],
			[{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
			[{
				color: [
					'black',
					'red',
					'orange',
					'yellow',
					'green',
					'blue',
					'purple',
					'pink',
					'brown',
					'gray',
					'magenta',
					'teal',
					'navy',
					'olive',
					'silver',
					'maroon',
					'lime',
					'aqua',
					'indigo',
					'coral'
				]
			}],   // dropdown with defaults from theme
			[{ background: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'] }]     // dropdown with defaults from theme
			['clean']                                         // remove formatting button
		]
	};

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"link",
		"color",
		"image",
		"background",
		"align",
		"size",
		"font"
	];


	const [code, setCode] = useState("Hello world");

	const handleQuillChange = (content, delta, source, editor) => {
		setCode(content);
	}
	// console.log("quill code =====> ", code)

	return (
		<>
			<label>{props.text}</label>
			<ReactQuill
				theme="snow"
				modules={props.modules ? props.modules : modules}
				formats={formats}
				value={props.value}
				onChange={handleQuillChange}
				className={props.className}
			/>
		</>
	);
}


QuillEditor.propTypes = {
	value: PropTypes.node,
	modules: PropTypes.object.isRequired,
	className: PropTypes.string,
	text: PropTypes.string,
};


export default QuillEditor;


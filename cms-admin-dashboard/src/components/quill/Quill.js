/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import ReactQuill from "react-quill";
import PropTypes from 'prop-types';



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
			[{ color: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'] }],   // dropdown with defaults from theme
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
		console.log("content ===>", content)
		console.log("delta ===>", delta)
		console.log("source ===>", source)
		console.log("editor===>", editor)
	}
	
	console.log("code ===>", code)

	return (
		<>
			<ReactQuill
				theme="snow"
				modules={props.modules}
				formats={formats}
				value={code}
				onChange={handleQuillChange}
			/>
		</>
	);
}


QuillEditor.propTypes = {
	// value: PropTypes.node.isRequired,
	modules: PropTypes.object.isRequired,
};


export default QuillEditor;


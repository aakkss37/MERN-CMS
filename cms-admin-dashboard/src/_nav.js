/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
	// cilBell,
	// cilCalculator,
	// cilChartPie,
	// cilCursor,
	// cilDescription,
	// cilDrop,
	// cilNotes,
	// cilPencil,
	// cilPuzzle,
	// cilSpeedometer,
	// cilStar,
	cilHome,
	cilDialpad,
	cilCoffee,
	cilEducation,
	cilEnvelopeClosed,
	cilContact,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
	// {
	// 	component: CNavItem,
	// 	name: 'Dashboard',
	// 	to: '/cms/',
	// 	icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
	// 	// badge: {
	// 	// 	color: 'info',
	// 	// 	text: 'NEW',
	// 	// },
	// },
	// {
	// 	component: CNavTitle,
	// 	name: 'Theme',
	// },
	// {
	// 	component: CNavItem,
	// 	name: 'Colors',
	// 	to: '/cms//colors',
	// 	icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
	// },
	// {
	// 	component: CNavItem,
	// 	name: 'Typography',
	// 	to: '/cms//typography',
	// 	icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
	// },
	// {
	// 	component: CNavTitle,
	// 	name: 'Components',
	// },
	// {
	// 	component: CNavGroup,
	// 	name: 'Base',
	// 	to: '/cms/',
	// 	icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
	// 	items: [
	// 		{
	// 			component: CNavItem,
	// 			name: 'Accordion',
	// 			to: '/cms//accordion',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Breadcrumb',
	// 			to: '/cms//breadcrumbs',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Cards',
	// 			to: '/cms//cards',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Carousel',
	// 			to: '/cms//carousels',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Collapse',
	// 			to: '/cms//collapses',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'List group',
	// 			to: '/cms//list-groups',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Navs & Tabs',
	// 			to: '/cms//navs',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Pagination',
	// 			to: '/cms//paginations',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Placeholders',
	// 			to: '/cms//placeholders',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Popovers',
	// 			to: '/cms//popovers',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Progress',
	// 			to: '/cms//progress',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Spinners',
	// 			to: '/cms//spinners',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Tables',
	// 			to: '/cms//tables',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Tooltips',
	// 			to: '/cms//tooltips',
	// 		},
	// 	],
	// },
	// {
	// 	component: CNavGroup,
	// 	name: 'Buttons',
	// 	to: '/cms/',
	// 	icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
	// 	items: [
	// 		{
	// 			component: CNavItem,
	// 			name: 'Buttons',
	// 			to: '/cms//buttons',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Buttons groups',
	// 			to: '/cms//button-groups',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Dropdowns',
	// 			to: '/cms//dropdowns',
	// 		},
	// 	],
	// },
	// {
	// 	component: CNavGroup,
	// 	name: 'Forms',
	// 	icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
	// 	items: [
	// 		{
	// 			component: CNavItem,
	// 			name: 'Form Control',
	// 			to: '/cms//form-control',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Select',
	// 			to: '/cms//select',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Checks & Radios',
	// 			to: '/cms//checks-radios',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Range',
	// 			to: '/cms//range',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Input Group',
	// 			to: '/cms//input-group',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Floating Labels',
	// 			to: '/cms//floating-labels',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Layout',
	// 			to: '/cms//layout',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Validation',
	// 			to: '/cms//validation',
	// 		},
	// 	],
	// },
	// {
	// 	component: CNavItem,
	// 	name: 'Charts',
	// 	to: '/cms/',
	// 	icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
	// },
	// {
	// 	component: CNavGroup,
	// 	name: 'Icons',
	// 	icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
	// 	items: [
	// 		{
	// 			component: CNavItem,
	// 			name: 'CoreUI Free',
	// 			to: '/cms//coreui-icons',
	// 			badge: {
	// 				color: 'success',
	// 				text: 'NEW',
	// 			},
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'CoreUI Flags',
	// 			to: '/cms//flags',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'CoreUI Brands',
	// 			to: '/cms//brands',
	// 		},
	// 	],
	// },
	// {
	// 	component: CNavGroup,
	// 	name: 'Notifications',
	// 	icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
	// 	items: [
	// 		{
	// 			component: CNavItem,
	// 			name: 'Alerts',
	// 			to: '/cms//alerts',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Badges',
	// 			to: '/cms//badges',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Modal',
	// 			to: '/cms//modals',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Toasts',
	// 			to: '/cms//toasts',
	// 		},
	// 	],
	// },
	// {
	// 	component: CNavItem,
	// 	name: 'Widgets',
	// 	to: '/cms/',
	// 	icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
	// 	badge: {
	// 		color: 'info',
	// 		text: 'NEW',
	// 	},
	// },
	// {
	// 	component: CNavTitle,
	// 	name: 'Extras',
	// },
	// {
	// 	component: CNavGroup,
	// 	name: 'Pages',
	// 	icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
	// 	items: [
	// 		{
	// 			component: CNavItem,
	// 			name: 'Login',
	// 			to: '/cms/',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Register',
	// 			to: '/cms/',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Error 404',
	// 			to: '/cms/',
	// 		},
	// 		{
	// 			component: CNavItem,
	// 			name: 'Error 500',
	// 			to: '/cms/',
	// 		},
	// 	],
	// },
	{
		component: CNavTitle,
		name: 'CMS Management',
	},
	
	{
		component: CNavItem,
		name: 'HOME',
		to: '/cms/home',
		icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
	},
	{
		component: CNavItem,
		name: 'SOLUTIONS',
		to: '/cms/solution',
		icon: <CIcon icon={cilDialpad} customClassName="nav-icon" />,
	},
	{
		component: CNavItem,
		name: 'PARTNER MODEL',
		to: '/cms/partner-model',
		icon: <CIcon icon={cilCoffee} customClassName="nav-icon" />,
	},
	{
		component: CNavItem,
		name: 'CAREER',
		to: '/cms/career',
		icon: <CIcon icon={cilEducation} customClassName="nav-icon" />,
	},
	{
		component: CNavItem,
		name: 'CONTACT US',
		to: '/cms/contact-us',
		icon: <CIcon icon={cilEnvelopeClosed} customClassName="nav-icon" />,
	},
	{
		component: CNavItem,
		name: 'CONTACT INFO',
		to: '/cms/contact-info',
		icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
	},

	// {
	// 	component: CNavItem,
	// 	name: 'Docs',
	// 	href: 'https://coreui.io/react/docs/templates/installation/',
	// 	icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
	// },
]

export default _nav

/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
	// cilBell,
	// cilCalculator,
	cilChartPie,
	// cilCursor,
	// cilDescription,
	// cilDrop,
	// cilNotes,
	// cilPencil,
	// cilPuzzle,
	// cilStar,
	cilSpeedometer,
	cilColorBorder,
	// cilHome,
	// cilDialpad,
	// cilCoffee,
	// cilEducation,
	// cilEnvelopeClosed,
	// cilContact,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
	{
		component: CNavItem,
		name: 'Dashboard',
		to: '/dashboard',
		icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
		// badge: {
		// 	color: 'info',
		// 	text: 'NEW',
		// },
	},
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

	// CMS MANAGEMENT
	{
		component: CNavGroup,
		name: 'CMS ',
		icon: <CIcon icon={cilColorBorder} customClassName="nav-icon" />,
		items: [
			{
				component: CNavItem,
				name: 'Home',
				to: '/cms/home',
			},
			{
				component: CNavItem,
				name: 'Solution',
				to: '/cms/solution',
			},
			{
				component: CNavItem,
				name: 'Partner Model',
				to: '/cms/partner-model',
			},
			{
				component: CNavItem,
				name: 'Career',
				to: '/cms/career',
			},
			{
				component: CNavItem,
				name: 'Contact Us',
				to: '/cms/contact-us',
			},
			{
				component: CNavItem,
				name: 'Contact Info',
				to: '/cms/contact-info',
			},

		],
	},

	// INQUIRY MANAGEMENT
	{
		component: CNavTitle,
		name: 'INQUIRY MANAGEMENT',
	},
	{
		component: CNavItem,
		name: 'Leads Management',
		to: '/inquiry-management/leads',
		icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,

	},
	{
		component: CNavItem,
		name: 'Partnership Management',
		to: '/inquiry-management/partnership',
		icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,

	},

	// CARRER MANAGEMENT
	{
		component: CNavTitle,
		name: 'CARRER MANAGEMENT',
	},
	{
		component: CNavItem,
		name: 'Job Post',
		to: '/career-management/job-post',
		icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,

	},
	{
		component: CNavItem,
		name: 'Applicants',
		to: '/career-management/applications',
		icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,

	},

	// SETTING
	{
		component: CNavTitle,
		name: 'SETTING',
	},
	{
		component: CNavItem,
		name: 'Role Management',
		to: '/setting/role-management',
		icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,

	},
	{
		component: CNavItem,
		name: 'Password Update',
		to: '/setting/password-update',
		icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,

	},

	// SUPPORT
	{
		component: CNavTitle,
		name: 'SUPPORT',
	},
	{
		component: CNavItem,
		name: 'Tickets',
		to: '/support/tickets',
		icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,

	},



	// {
	// 	component: CNavItem,
	// 	name: 'Docs',
	// 	href: 'https://coreui.io/react/docs/templates/installation/',
	// 	icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
	// },
]

export default _nav

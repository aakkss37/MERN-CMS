/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
	cilBell,
	cilCalculator,
	cilCursor,
	// cilDescription,


	cilChartPie,
	cilDrop,
	cilNotes,
	cilPencil,
	cilPuzzle,
	cilStar,
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
		badge: {
			color: 'info',
			text: 'NEW',
		},
	},
	{
		component: CNavTitle,
		name: 'Theme',
	},
	{
		component: CNavItem,
		name: 'Colors',
		to: '/theme/colors',
		icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
	},
	{
		component: CNavItem,
		name: 'Typography',
		to: '/theme/typography',
		icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
	},
	{
		component: CNavTitle,
		name: 'Components',
	},
	{
		component: CNavGroup,
		name: 'Base',
		to: '/base',
		icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
		items: [
			{
				component: CNavItem,
				name: 'Accordion',
				to: '/base/accordion',
			},
			{
				component: CNavItem,
				name: 'Breadcrumb',
				to: '/base/breadcrumbs',
			},
			{
				component: CNavItem,
				name: 'Cards',
				to: '/base/cards',
			},
			{
				component: CNavItem,
				name: 'Carousel',
				to: '/base/carousels',
			},
			{
				component: CNavItem,
				name: 'Collapse',
				to: '/base/collapses',
			},
			{
				component: CNavItem,
				name: 'List group',
				to: '/base/list-groups',
			},
			{
				component: CNavItem,
				name: 'Navs & Tabs',
				to: '/base/navs',
			},
			{
				component: CNavItem,
				name: 'Pagination',
				to: '/base/paginations',
			},
			{
				component: CNavItem,
				name: 'Placeholders',
				to: '/base/placeholders',
			},
			{
				component: CNavItem,
				name: 'Popovers',
				to: '/base/popovers',
			},
			{
				component: CNavItem,
				name: 'Progress',
				to: '/base/progress',
			},
			{
				component: CNavItem,
				name: 'Spinners',
				to: '/base/spinners',
			},
			{
				component: CNavItem,
				name: 'Tables',
				to: '/base/tables',
			},
			{
				component: CNavItem,
				name: 'Tooltips',
				to: '/base/tooltips',
			},
		],
	},
	{
		component: CNavGroup,
		name: 'Buttons',
		to: '/buttons',
		icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
		items: [
			{
				component: CNavItem,
				name: 'Buttons',
				to: '/buttons/buttons',
			},
			{
				component: CNavItem,
				name: 'Buttons groups',
				to: '/buttons/button-groups',
			},
			{
				component: CNavItem,
				name: 'Dropdowns',
				to: '/buttons/dropdowns',
			},
		],
	},
	{
		component: CNavGroup,
		name: 'Forms',
		icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
		items: [
			{
				component: CNavItem,
				name: 'Form Control',
				to: '/forms/form-control',
			},
			{
				component: CNavItem,
				name: 'Select',
				to: '/forms/select',
			},
			{
				component: CNavItem,
				name: 'Checks & Radios',
				to: '/forms/checks-radios',
			},
			{
				component: CNavItem,
				name: 'Range',
				to: '/forms/range',
			},
			{
				component: CNavItem,
				name: 'Input Group',
				to: '/forms/input-group',
			},
			{
				component: CNavItem,
				name: 'Floating Labels',
				to: '/forms/floating-labels',
			},
			{
				component: CNavItem,
				name: 'Layout',
				to: '/forms/layout',
			},
			{
				component: CNavItem,
				name: 'Validation',
				to: '/forms/validation',
			},
		],
	},
	{
		component: CNavItem,
		name: 'Charts',
		to: '/charts',
		icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
	},
	{
		component: CNavGroup,
		name: 'Icons',
		icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
		items: [
			{
				component: CNavItem,
				name: 'CoreUI Free',
				to: '/icons/coreui-icons',
				badge: {
					color: 'success',
					text: 'NEW',
				},
			},
			{
				component: CNavItem,
				name: 'CoreUI Flags',
				to: '/icons/flags',
			},
			{
				component: CNavItem,
				name: 'CoreUI Brands',
				to: '/icons/brands',
			},
		],
	},
	{
		component: CNavGroup,
		name: 'Notifications',
		icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
		items: [
			{
				component: CNavItem,
				name: 'Alerts',
				to: '/notifications/alerts',
			},
			{
				component: CNavItem,
				name: 'Badges',
				to: '/notifications/badges',
			},
			{
				component: CNavItem,
				name: 'Modal',
				to: '/notifications/modals',
			},
			{
				component: CNavItem,
				name: 'Toasts',
				to: '/notifications/toasts',
			},
		],
	},
	{
		component: CNavItem,
		name: 'Widgets',
		to: '/widgets',
		icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
		badge: {
			color: 'info',
			text: 'NEW',
		},
	},
	{
		component: CNavTitle,
		name: 'Extras',
	},
	{
		component: CNavGroup,
		name: 'Pages',
		icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
		items: [
			{
				component: CNavItem,
				name: 'Login',
				to: '/login',
			},
			{
				component: CNavItem,
				name: 'Register',
				to: '/register',
			},
			{
				component: CNavItem,
				name: 'Error 404',
				to: '/404',
			},
			{
				component: CNavItem,
				name: 'Error 500',
				to: '/500',
			},
		],
	},




	// CMS MANAGEMENT
	{
		component: CNavTitle,
		name: 'CMS MANAGEMENT',
	},
	{
		component: CNavGroup,
		name: 'HOME ',
		icon: <CIcon icon={cilColorBorder} customClassName="nav-icon" />,
		items: [
			{
				component: CNavItem,
				name: 'Home',
				to: '/cms/home',
			},
			{
				component: CNavItem,
				name: 'Drivers',
				to: '/cms/home/drivers',
			},
			{
				component: CNavItem,
				name: 'Services',
				to: '/cms/home/services',
			},
			{
				component: CNavItem,
				name: 'About Us',
				to: '/cms/home/about-us',
			},
			
		],
	},

	{
		component: CNavGroup,
		name: 'SOLUTIONS ',
		icon: <CIcon icon={cilColorBorder} customClassName="nav-icon" />,
		items: [
			{
				component: CNavItem,
				name: 'Emerging Technologies',
				to: '/cms/solutions/emerging-technologies',
			},
			{
				component: CNavItem,
				name: 'AR & VR',
				to: '/cms/solutions/virtual-and-asumented-reality',
			},
			{
				component: CNavItem,
				name: 'Custom Application',
				to: '/cms/solutions/custom-application',
			},
			{
				component: CNavItem,
				name: 'Enterprise Application',
				to: '/cms/solutions/enterprise-application',
			},
			{
				component: CNavItem,
				name: 'Business Intelligence',
				to: '/cms/solutions/business-intelligence',
			},
			{
				component: CNavItem,
				name: 'Infrastructure',
				to: '/cms/solutions/infrastructure',
			},
			{
				component: CNavItem,
				name: 'Mobile Business',
				to: '/cms/solutions/mobile-business',
			},
			{
				component: CNavItem,
				name: 'Utility Solution',
				to: '/cms/solutions/utility-solution',
			},
			{
				component: CNavItem,
				name: 'Government',
				to: '/cms/solutions/government',
			},
			{
				component: CNavItem,
				name: 'Professional Consulting',
				to: '/cms/solutions/professional-consulting',
			},
			{
				component: CNavItem,
				name: 'Strategic Outsourcing',
				to: '/cms/solutions/strategic-outsourcing',
			},
			{
				component: CNavItem,
				name: 'Co-Managed Services',
				to: '/cms/solutions/co-managed-services',
			},
			
		],
	},

	{
		component: CNavItem,
		name: 'PARTNERS MODEL',
		to: '/cms/partner-model',
		icon: <CIcon icon={cilColorBorder} customClassName="nav-icon" />,
	},
	{
		component: CNavItem,
		name: 'CAREER ',
		icon: <CIcon icon={cilColorBorder} customClassName="nav-icon" />,
		to: '/cms/career/career-page',
	},
	
	{
		component: CNavItem,
		name: 'CONTACT US',
		icon: <CIcon icon={cilColorBorder} customClassName="nav-icon" />,
		to: '/cms/contact-us',
	},
	{
		component: CNavItem,
		name: 'CONTACT INFO',
		icon: <CIcon icon={cilColorBorder} customClassName="nav-icon" />,
		to: '/cms/contact-info',
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

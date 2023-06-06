import DropdownList from "./DropdownList";

// Home List

export const homeList = [
  {
    title: "Driver",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]",
    url: "/our-driver",
  },

  {
    title: "Services",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]",
    url: "/services",
  },

  {
    title: "About Us",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]",
    url: "/about",
  },
];

// Solution List Items
export const solutionList = [
  {
    title: "Emerging Technologies",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/emerging-tehcnologies",
  },

  {
    title: "Virtual & Agumented Reality",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/virtual-and-agumented-reality",
  },

  {
    title: "Custom Application",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/custom-application",
  },

  {
    title: " Enterprise Application",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/enterprise-application",
  },
  {
    title: " Business Intelligence",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/business-intelligence",
  },
  {
    title: "Infrastructure",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/infrastructure",
  },
  {
    title: "Mobile Business",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/mobile-business",
  },

  {
    title: "Utility Solutions",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/utility-solutions",
  },
  {
    title: "Government",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/government",
  },

  {
    title: " Professional Consulting",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/professional-consulting",
  },
  {
    title: " Strategic Outsourcing",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/strategic-outsourcing",
  },

  {
    title: "Co-Managed Services",
    className:
      "cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/co-managed-services",
  },
];

// Navbar Menu List
export const navbarMenuList = [
  {
    title: "Home",
    Children: DropdownList,
    url: null,
    otherProps: homeList,
    className:
      "home-nav-desk-animation-ul flex items-center justify-center h-[93px]",
  },
  {
    title: "Solutions",
    Children: DropdownList,
    url: null,
    otherProps: solutionList,
    className:
      "home-nav-desk-animation-ul flex items-center justify-center h-[93px]",
  },
  {
    title: " Partner Model",
    className: "cursor-pointer",
    Children: null,
    otherProps: null,
    url: "/partner",
  },
  {
    title: "Careers",
    className: "cursor-pointer",
    Children: null,
    otherProps: null,
    url: "/career",
  },
  {
    title: "Contact Us",
    className: "cursor-pointer",
    Children: null,
    otherProps: null,
    url: "/contact",
  },
];

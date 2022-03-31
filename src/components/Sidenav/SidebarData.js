import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
import * as Io5Icons from "react-icons/io5";
// import Icon from "awesome-react-icons"

export const SidebarData = [
{
	title: "Admin",
	path: "/about-us",
	icon: <FiIcons.FiUsers />,
	iconClosed: <FiIcons.FiChevronRight />,
	iconOpened: <FiIcons.FiChevronDown />,

	subNav: [
	],
},
{
	title: "Knowledge Base",
	path: "/services",
	icon: <Io5Icons.IoCheckboxOutline />,
	iconClosed: <FiIcons.FiChevronRight />,
	iconOpened: <FiIcons.FiChevronDown />,

	subNav: [
	],
},
{
	title: "Train SAM",
	path: "/contact",
	icon: <Io5Icons.IoCheckboxOutline />,

	iconClosed: <FiIcons.FiChevronRight />,
	iconOpened: <FiIcons.FiChevronDown />,

	subNav: [
	]
},
{
	title: "Agent Inbox",
	path: "/contact",
	icon: <AiIcons.AiOutlineCalendar />,

	iconClosed: <FiIcons.FiChevronRight />,
	iconOpened: <FiIcons.FiChevronDown />,

	subNav: [
	]
},
{
	title: "Help Center",
	path: "/contact",
	icon: <AiIcons.AiOutlineClockCircle />,

	iconClosed: <FiIcons.FiChevronRight />,
	iconOpened: <FiIcons.FiChevronDown />,

	subNav: [
	]
},
{
	title: "Analytics",
	path: "/analytics",
	icon: <RiIcons.RiWechat2Line />,

	iconClosed: <FiIcons.FiChevronRight />,
	iconOpened: <FiIcons.FiChevronDown />,

	subNav: [
	{
		title: "Teams",
		path: "/events/events1",
		// icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Knowledge Base",
		path: "/events/events2",
		// icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Training SAM",
		path: "/events/events2",
		icon: null,
	},
	{
		title: "Help Center",
		path: "/events/events2",
		// icon: <IoIcons.IoIosPaper />,
	},
	],
},
,
];

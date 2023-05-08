import React from "react";
import Colors from "../MuiComponents/Colors";
import Buttons from "../MuiComponents/Buttons";
import Dropdown from "../MuiComponents/Dropdown";
import Switchs from "../MuiComponents/Switchs";
import Tooltips from "../MuiComponents/Tooltips";
import Accordions from "../MuiComponents/Accordions";
import DialogBox from "../MuiComponents/DialogBox";
import Heading from "../MuiComponents/Heading";
import InputButton from "../MuiComponents/InputButton";
import InputField from "../MuiComponents/InputField";
import MuiTabs from "../MuiComponents/MuiTabs";
import { CustomizedSteppers } from "../MuiComponents/CustomStepper";
import Spinner from "../MuiComponents/Spinner";
import MultiSelectDrop from "../MuiComponents/MultiSelectDrop";
import Ratings from "../MuiComponents/Ratings";
import Alerts from "../MuiComponents/Alerts";
import Paginations from "../MuiComponents/Paginations";
import MenuLists from "../MuiComponents/MenuLists";
import Tables from "../MuiComponents/Tables";
import MuiBreadcrumb from "../MuiComponents/MuiBreadcrumb";
import MuiCarousel from "../MuiComponents/MuiCarousel";
import Testimonials from "../MuiComponents/Testimonials";
import Snackbars from "../MuiComponents/Snackbars";

export const itemsList = [
	{
		component: <Colors />,
		text: "Colors",
		to: "/color",
	},
	{
		component: <Heading />,
		text: "Typography",
		to: "/heading",
	},
	{
		component: <Buttons />,
		text: "Button",
		to: "/button",
	},
	{
		component: <InputField />,
		text: "Text Fields",
		to: "/textfield",
	},
	{
		component: <InputButton />,
		text: "Checkbox and Radios",
		to: "/inputbutton",
	},
	{
		component: <Dropdown />,
		text: "Dropdown menu",
		to: "/dropdown",
	},
	{
		component: <DialogBox />,
		text: "Dialog Box",
		to: "/dialog",
	},
	{
		component: <MuiTabs />,
		text: "Tabs",
		to: "/tab",
	},
	{
		component: <Accordions />,
		text: "Accordion",
		to: "/accordion",
	},
	{
		component: <Tooltips />,
		text: "Tooltips",
		to: "/tooltip",
	},
	{
		component: <Switchs />,
		text: "Switch",
		to: "/switch",
	},
	{
		component: <Spinner />,
		text: "Loading Spinner",
		to: "/spinner",
	},
	{
		component: <MultiSelectDrop />,
		text: "Multi Select Dropdown",
		to: "/multiselect",
	},
	{
		component: <Ratings />,
		text: "Ratings",
		to: "/rating",
	},
	{
		component: <Alerts />,
		text: "Alerts",
		to: "/alert",
	},
	{
		component: <Paginations />,
		text: "Pagination",
		to: "/pagination",
	},
	{
		component: <MenuLists />,
		text: "Menu Lists",
		to: "/menulist",
	},
	{
		component: <Tables />,
		text: "Tables",
		to: "/table",
	},
	{
		component: <MuiBreadcrumb />,
		text: "Breadcrumbs",
		to: "/breadcrumb",
	},
	{
		component: <MuiCarousel />,
		text: "Carousel",
		to: "/carousel",
	},
	{
		component: <Testimonials />,
		text: "Testimonials",
		to: "/testimonial",
	},
	{
		component: <Snackbars />,
		text: "Snackbars",
		to: "/snackbar",
	},
	{
		component: <CustomizedSteppers />,
		text: "Stepper",
		to: "/stepper",
	},
];

export function getComponent(id) {
	let component = "";
	itemsList.forEach((item) => {
		if (item.to === id) {
			component = item.component;
		}
	});
	return component;
}

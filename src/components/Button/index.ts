import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const customVariant = defineStyle((props) => {
	const { colorScheme: c } = props;
	return {
		background: "#080808",
		color: "#FFFFFF",
		_hover: {
			background: "#464646",
		},
	};
});

export const Button = defineStyleConfig({
	baseStyle: {
		borderRadius: "xl",
	},
	variants: {
		custom: customVariant,
	},
});

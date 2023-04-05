import { Card, CardBody } from "@chakra-ui/react";
import { ReactNode } from "react";

export const InlineItem = ({ children }: { children: ReactNode }) => {
	return (
		<Card
			shadow={"none"}
			border={"none"}
			height={"100%"}
			width={"100%"}
			borderRadius={"17px"}
			padding={"4"}
			flex={"1 1 auto"}
			backgroundColor={"rgba(255, 168, 0, 0.92)"}>
			<CardBody
				display={"flex"}
				minHeight={"100%"}
				flexDirection={"column"}
				alignItems={"center"}
				color={"#000000"}
				lineHeight={"16px"}
				fontSize={"16px"}
				fontWeight={"400"}
				gap={"8"}
				justifyContent={"space-between"}>
				{children}
			</CardBody>
		</Card>
	);
};

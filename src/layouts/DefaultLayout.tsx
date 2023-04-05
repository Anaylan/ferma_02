import { Fragment } from "react";

import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";

export const DefaultLayout = () => {
	return (
		<Fragment>
			<Box
				display={"flex"}
				flexDirection='column'
				as='main'
				id='content'
				alignItems={"center"}
				justifyContent={"center"}
				position={"relative"}>
				<Outlet />
			</Box>
		</Fragment>
	);
};

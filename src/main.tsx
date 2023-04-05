import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Container } from "./components/Container";
import { Button } from "./components/Button";

const theme = extendTheme({
	fonts: {
		heading: `'Muller'`,
		body: `'Muller'`,
		mono: `'Muller'`,
	},
	styles: {
		global: {
			"html, body": {
				height: "100%",
				minWidth: "100vw",
				maxWidth: "100vw",
				overflowX: "hidden",
				backgroundColor: "#FFCC00",
			},

			"#root": {
				height: "100%",
				display: "flex",
				flexDirection: "column",
				backgroundColor: "#FFCC00",
			},
			"#content": {
				flex: "1 1 auto",
			},
		},
	},
	components: {
		Container,
		Button,
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);

import { FC, Fragment, ReactNode } from "react";

import {
	Box,
	Button,
	Container,
	Heading,
	VStack,
	Image,
	Text,
	SimpleGrid,
} from "@chakra-ui/react";

import { Header } from "@/components/Header";
import { InlineItem } from "@/components/Card";
import stage from "@/assets/svg/stage.png";

export type InlineItem = {
	imgSrc: string;
	imgAlt: string;
	children: ReactNode;
};

const INLINE_ITEMS: InlineItem[] = [
	{
		imgSrc: "/computer.png",
		imgAlt: "1",
		children: (
			<Text textAlign={"center"}>
				Бесплатный аудит
				<br />
				рекламной компании
				<br />и сайта
			</Text>
		),
	},
	{
		imgSrc: "/calculator.png",
		imgAlt: "2",
		children: (
			<Text textAlign={"center"}>
				Расчет бюджета
				<br />
				для эффективной
				<br />
				рекламной кампании
			</Text>
		),
	},
	{
		imgSrc: "/folder.png",
		imgAlt: "3",
		children: (
			<Text textAlign={"center"}>
				Рекомендации
				<br />
				по повышению
				<br />
				конверсии вашего сайта
			</Text>
		),
	},
];

const Home: FC = () => {
	document.title = "Автодилеры";
	return (
		<Fragment>
			<Header />
			<Container
				as={"section"}
				zIndex={"banner"}
				display={"flex"}
				position={"relative"}
				gap={"8"}
				flexDirection={{ md: "row", base: "column" }}
				marginTop={{ base: "10", lg: "14" }}>
				<Box maxW={{ lg: "max-content", base: "100%" }}>
					<Heading
						lineHeight={"120%"}
						as='h1'
						fontSize={{
							base: "53px",
							md: "32px",
							xl: "48px",
							"2xl": "60px",
						}}>
						Нужны заявки для автосервиса
						<br />
						из Яндекс Директ?
					</Heading>

					<VStack alignItems={"flex-start"} marginTop={"8"}>
						<Heading
							textAlign={"left"}
							lineHeight='100%'
							marginBottom={"38px"}
							fontSize={{
								base: "32px",
								md: "20px",
								xl: "32px",
							}}>
							Ответьте на несколько вопросов и получите:
						</Heading>

						<SimpleGrid
							columns={{ md: 3, base: 1 }}
							width={"100%"}
							gap={{ md: "36px", base: "24px" }}
							alignItems={"center"}
							height={"100%"}
							flexDirection={{ md: "row", base: "column" }}>
							{INLINE_ITEMS.map((item, key) => (
								<InlineItem key={`inline_${key}`}>
									<Image alt={item.imgAlt} src={item.imgSrc} />
									{item.children}
								</InlineItem>
							))}
						</SimpleGrid>
						<Button
							onClick={() => {
								// @ts-ignore
								Marquiz.showModal("63f2fd7befc22f0045da58c4");
							}}
							fontWeight={"bold"}
							variant={"custom"}
							width={{ md: "343px", base: "100%" }}
							height={"100% !important"}
							marginTop={{ md: "38px !important", base: "24px !important" }}
							padding={{ md: "15px", base: "20px" }}
							size={{ sm: "lg", base: "md" }}>
							Ответить на вопросы
						</Button>
					</VStack>
				</Box>
				<Box
					position={{ md: "absolute", base: "relative" }}
					right={{ "2xl": "10%", base: "0" }}
					marginBottom={"48"}
					top={0}>
					<Image
						src={stage}
						width={{
							"2xl": "316px",
							md: "205px",
							base: "330px",
						}}
					/>
				</Box>
			</Container>
			<Box
				as='footer'
				flex={"1"}
				display='flex'
				width={"100%"}
				// marginTop={{ base: "-15%", lg: "0" }}
				_after={{
					backgroundImage: "/wheels.jpg",
					backgroundRepeat: "no-repeat",
					backgroundSize: { md: "100%", base: "cover" },
					backgroundPosition: { md: "bottom left", base: "center" },
					position: "absolute",
					display: "block",
					content: '""',
					width: {
						base: "100%",
					},
					left: 0,
					bottom: 0,
					aspectRatio: "1",
				}}
			/>
		</Fragment>
	);
};

export default Home;

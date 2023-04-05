import { phoneMask } from "@/lib/masks";
import { mainPageValidationSchema } from "@/lib/validSchemas";
import { instance } from "@/utils/axios";
import {
	Box,
	Button,
	Flex,
	FormControl,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	Image,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import MaskedInput from "react-text-mask";
import { TooltipError } from "../Tooltip";
import { useRef, useState } from "react";
import mark from "@/assets/svg/okay.svg";
enum EQueryStatus {
	success,
	error,
	NONE,
}

export const ModalPage = ({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) => {
	const [queryStatus, setQueryStatus] = useState<EQueryStatus>(
		EQueryStatus.NONE
	);

	const btnRef = useRef<HTMLButtonElement | null>(null);

	const formik = useFormik({
		initialValues: {
			who: "",
			phone: "",
		},
		validationSchema: mainPageValidationSchema,
		onSubmit: (values) => {
			btnRef.current?.setAttribute("disabled", "true");

			// Все запросы запихивать перед этим, или перетаскивать секцию
			/**
			 * .finally(() => {
					btnRef.current?.removeAttribute("disabled");
				});
			 */
			instance
				.get(`/index.php?module=API&method=Leads.addReport&format=json`, {
					params: { ...values },
				})
				.then(({ data }) => {
					console.log(data);

					formik.resetForm();
				})
				.catch((er: string) => {
					console.error(er);
				})
				.finally(() => {
					btnRef.current?.removeAttribute("disabled");

					setQueryStatus(EQueryStatus.success);
				});
		},
	});

	const closeAction = () => {
		setQueryStatus(EQueryStatus.NONE);
		onClose();
		formik.resetForm();
	};
	return (
		<Modal
			isCentered={true}
			isOpen={isOpen}
			closeOnOverlayClick={true}
			onClose={closeAction}>
			<ModalOverlay />
			<ModalContent
				marginInline={"4"}
				borderRadius={"xl"}
				maxW='100%'
				width={{ md: "min", base: "100%" }}>
				<ModalCloseButton size={"md"} />
				{queryStatus == EQueryStatus.success ? (
					<>
						<ModalHeader
							paddingBottom={"0"}
							paddingTop='10'
							fontSize={{ sm: "32px", base: "20px" }}
							lineHeight={"32px"}></ModalHeader>
						<Box
							minW={{ md: "max-content", base: "" }}
							paddingX={"5"}
							paddingBottom='8'>
							<ModalBody>
								<Flex
									position={"relative"}
									alignItems={"flex-start"}
									justifyContent={"center"}>
									<Image src={mark} />
									<Box position={"absolute"}>
										<Image
											// mt={"-20"}
											ml={"200%"}
											width={"52px"}
											src='/smoothcorner.svg'
											alt='star'
										/>
										<Image
											// mt={"-20"}
											ml={"250%"}
											width={"27px"}
											src='/smoothcorner.svg'
											alt='star'
										/>
										<Image
											ml={"-190%"}
											mt={"4"}
											width={"27px"}
											src='/smoothcorner.svg'
											alt='star'
										/>
									</Box>
								</Flex>
								<Heading
									mt={"52px"}
									textAlign={"center"}
									fontWeight={700}
									fontSize={"32px"}
									lineHeight={"41px"}>
									Спасибо, что отправили заявку!
									<br />
									Мы с вами свяжемся в ближайшее время
								</Heading>
							</ModalBody>
						</Box>
					</>
				) : (
					<>
						<ModalHeader
							paddingBottom={"0"}
							paddingTop='10'
							fontSize={{ sm: "32px", base: "20px" }}
							lineHeight={"32px"}>
							Оставьте свои данные и мы свяжемся с вами для бесплатной
							консультации
						</ModalHeader>
						<Box minW={{ md: "max-content", base: "" }} paddingBottom='8'>
							<ModalBody>
								<form onSubmit={formik.handleSubmit}>
									<FormControl
										marginTop={"4"}
										gap={"1rem"}
										display={"flex"}
										flexDirection={"column"}>
										<TooltipError hasArrow label={formik.errors.who}>
											<Box>
												<Input
													name='who'
													size={{ sm: "lg", base: "md" }}
													value={formik.values.who}
													onChange={formik.handleChange}
													borderColor={
														formik.errors.who
															? "red !important"
															: "black !important"
													}
													placeholder='Представьтесь'
													type='text'
												/>
											</Box>
										</TooltipError>

										<TooltipError hasArrow label={formik.errors.phone}>
											<Box>
												<Input
													as={MaskedInput}
													mask={phoneMask}
													name='phone'
													guide={false}
													size={{ sm: "lg", base: "md" }}
													placeholder='Номер вашего телефона'
													type='tel'
													borderColor={
														formik.errors.phone
															? "red !important"
															: "black !important"
													}
													value={formik.values.phone}
													onChange={formik.handleChange}
												/>
											</Box>
										</TooltipError>

										<Button
											type='submit'
											ref={btnRef}
											background={"#001549"}
											colorScheme='blue'
											width={"100%"}
											size={{ sm: "lg", base: "md" }}
											fontWeight={700}
											fontSize={"20px"}
											lineHeight={"20px"}
											_hover={{
												background: "#002685",
											}}
											mr={3}>
											Заказать звонок
										</Button>
										<Text
											width={"100%"}
											fontSize={{ md: "15px", base: "12px" }}
											opacity='0.6'
											color={"#001549"}>
											Нажимая кнопку «Получить», вы соглашаетесь «
											<Link
												style={{
													textDecoration: "underline",
												}}
												to='/privacy'>
												Политикой конфиденциальности
											</Link>
											»
										</Text>
									</FormControl>
								</form>
							</ModalBody>
						</Box>
					</>
				)}
			</ModalContent>
		</Modal>
	);
};

import { Dialog, DialogContent, Stack, Typography } from "@mui/material";
import { useState } from "react";

const App = () => {

	const [isOpenModal, setIsOpenModal] = useState(false)
	const [isClick, setIsClick] = useState(false)

	const handleOpenModal = () => {
		setIsClick(true)
		setTimeout(() => setIsOpenModal(true), 200);
	};
	const handleCloseModal = () => {
		setIsClick(false)
		setIsOpenModal(false)
	};

	return (
		<>
			<audio autoPlay loop>
				<source src="/song/song.mp3" type="audio/mpeg" />
			</audio>
			<Dialog open={isOpenModal} onClose={handleCloseModal} fullWidth maxWidth="md">
				<DialogContent>
					<Stack rowGap={1} alignItems='center'>
						<Typography fontFamily="Lucy" variant="h2" align="center" sx={{ color: '#fca5a8' }}>¡Feliz día de San Valentín!</Typography>
						<Typography fontFamily="Lucy" variant="h3" align="center" sx={{ color: '#fca5a8' }}>Cada día contigo es un regalo especial. Tu sonrisa ilumina mis días y tu presencia llena mi corazón de alegría. Eres alguien verdaderamente extraordinaria que ha transformado mi vida de manera hermosa.</Typography>
						<Typography fontFamily="Lucy" variant="h3" align="center" sx={{ color: '#fca5a8' }}>¡Te amo infinitamente!</Typography>
						<img src="/images/cats.png" width='400px' height='400px' alt="cats" />
					</Stack>
				</DialogContent>
				{[...Array(100)].map((_, i) => (
					<div key={i} className="falling-heart" style={{ left: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s`, zIndex: -1 }}>❤️</div>
				))}
			</Dialog>
			<div className={isClick ? "box open" : "box"}>
				<div className={isClick ? 'top-box open' : "top-box close"} onClick={handleOpenModal}>
					<img src="/images/top-box.svg" width='100%' height='100%' alt="top-box" />
				</div>
				<div className="bottom-box" onClick={handleOpenModal}>
					<img src="/images/content-box.svg" width='100%' height='100%' alt="content-box" />
				</div>
			</div>
			<div className="text">
				<Typography fontFamily="Lucy" variant="h1">Para ti, amor</Typography>
			</div>

		</>
	)
}

export default App
import Fade from 'react-reveal/Fade';

import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { Parallax } from 'react-scroll-parallax';

import { FontsMelody } from '@assets/fonts/fonts';
import recordLottie from '@assets/lottie/liveRecord.json';

import BackgroundMusic from '@components/BackgroundPlayer/BackgroundPlayer';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import HomeTopConatiner from '@components/Home/HomeTopContainer';
import Loading from '@components/Loading/Loading';
import styles from '@styles/Home/Home.module.css';

const Home: React.FC = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<div>
			{loading ? (
				<Loading />
			) : (
				<main
					className={`flex min-h-screen flex-col items-center justify-between p-24 ${FontsMelody.className}`}
				>
					<Header />
					<BackgroundMusic />
					<HomeTopConatiner />
					<div className={styles.container}>
						<div className={styles.stickyBox}>
							<Parallax speed={-10} className={styles.spinner}>
								<a
									href="https://www.naver.com"
									target="_blank"
									rel="noreferrer"
								>
									<Lottie
										loop
										animationData={recordLottie}
										play
										speed={1}
										style={{
											width: '100%',
											height: '100%',
										}}
									/>
								</a>
							</Parallax>
							<Fade up timeout={9000}>
								<div className={styles.footerContext}>
									누군가의 음악으로 살아가는 사람들의 모임,
									<br />
									당신의 목소리를 들려주세요..
								</div>
							</Fade>
						</div>
					</div>
					<Footer />
				</main>
			)}
		</div>
	);
};

export default Home;

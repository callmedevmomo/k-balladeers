import { FontsMelody } from '@assets/fonts/fonts';

import React, { useEffect, useState } from 'react';

import Header from '@components/Header/Header';

import BackgroundMusic from '@components/BackgroundPlayer/BackgroundPlayer';
import HomeTopConatiner from '@components/Home/HomeTopContainer';
import Loading from '@components/Loading/Loading';
import styles from '@styles/Home/Home.module.css';
import { Parallax } from 'react-scroll-parallax';

const Home: React.FC = ({}) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<>
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
						<Parallax speed={-10} className={styles.spinner}></Parallax>
					</div>
				</main>
			)}
		</>
	);
};

export default Home;

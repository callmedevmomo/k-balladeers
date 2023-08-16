import { FontsMelody } from '@assets/fonts/fonts';

import React from 'react';

import Header from '@components/Header/Header';

import { useParallax } from 'react-scroll-parallax';
import styles from './test.module.css';

const Home: React.FC = ({}) => {
	const parallax = useParallax<HTMLDivElement>({
		rotate: [0, 360],
	});
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${FontsMelody.className}`}
		>
			<Header />
			<div className={styles.container}>
				<div ref={parallax.ref} className={styles.spinner}></div>
			</div>
		</main>
	);
};

export default Home;

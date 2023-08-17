import React from 'react';
import Lottie from 'react-lottie-player';

import LoadingLottie from '@assets/lottie/enjoyMusic.json';

import style from '@styles/Home/HomeRightLottie.module.css';

const HomeRightLottie: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return (
		<div className={style.loadingComponent}>
			<div className={style.loadingWrapper}>
				<Lottie
					loop
					animationData={LoadingLottie}
					play
					speed={1}
					style={{
						width: '600px',
						height: '600px',
					}}
				/>
			</div>
		</div>
	);
};

export default HomeRightLottie;

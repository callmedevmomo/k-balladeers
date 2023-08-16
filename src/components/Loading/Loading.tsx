import React from 'react';
import Lottie from 'react-lottie-player';

import LoadingLottie from '@assets/lottie/lldcmilc.json';

import style from './Loading.module.css';

const Loading: React.FC = ({}) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return (
		<div className={style.loadingComponent}>
			<div className={style.loadingWrapper}>
				<Lottie
					loop
					animationData={LoadingLottie}
					play
					speed={1.5}
					style={{
						width: '400px',
						height: '400px',
					}}
				/>
			</div>
		</div>
	);
};

export default Loading;

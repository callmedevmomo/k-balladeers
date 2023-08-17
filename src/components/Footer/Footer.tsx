import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styled from 'styled-components';

import React from 'react';

import { FontsMelody, NotoSansKR } from '@assets/fonts/fonts';

import styles from '@styles/Footer/Footer.module.css';

const FooterContainer = styled.div``;

const Footer: React.FC = () => {
	return (
		<FooterContainer
			className={`${styles.footerContainer} ${NotoSansKR.className}`}
		>
			<div className={styles.footerWrapper}>
				<div className={styles.footerHeadWrapper}>
					<div className={`${styles.footerTitle} ${FontsMelody.className}`}>
						K발라더들의 아카이브
					</div>
					<div>메일 문의 : kballadeers@gmail.com</div>
				</div>
				<div className={styles.footerCopyRight}>
					Copyright © 2023 k-balladeers.com - All Rights Reserved.
				</div>
			</div>
			<div className={styles.snsWrapper}>
				<div>
					<a href="https://www.naver.com" target="_blank" rel="noreferrer">
						<YouTubeIcon className={styles.snsYoutube} />
					</a>
				</div>
				<div>
					<a href="https://www.naver.com" target="_blank" rel="noreferrer">
						<InstagramIcon className={styles.snsInstagram} />
					</a>
				</div>
			</div>
		</FooterContainer>
	);
};

export default Footer;

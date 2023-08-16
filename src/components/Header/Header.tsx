import React from 'react';

import styles from '@styles/Header/Header.module.css';

import { NotoSansKR } from '@assets/fonts/fonts';
import styled from 'styled-components';

const HeaderContainer = styled.div``;

const Header: React.FC = () => {
	return (
		<>
			<HeaderContainer
				className={`${styles.headerContainer} ${NotoSansKR.className}`}
			>
				<div className={styles.headerContents}>ABOUT</div>
				<div className={styles.headerContents}>ARTIST</div>
				<div className={styles.headerContents}>ARCHIVE</div>
				<div className={styles.headerContents}>CONTACT</div>
			</HeaderContainer>
		</>
	);
};

export default Header;

import styled from 'styled-components';

import React from 'react';

import { NotoSansKR } from '@assets/fonts/fonts';

import styles from '@styles/Header/Header.module.css';

const HeaderContainer = styled.div``;

const Header: React.FC = () => {
	return (
		<HeaderContainer
			className={`${styles.headerContainer} ${NotoSansKR.className}`}
		>
			<div className={styles.headerContents}>ABOUT</div>
			<div className={styles.headerContents}>ARTIST</div>
			<div className={styles.headerContents}>ARCHIVE</div>
			<div className={styles.headerContents}>CONTACT</div>
		</HeaderContainer>
	);
};

export default Header;

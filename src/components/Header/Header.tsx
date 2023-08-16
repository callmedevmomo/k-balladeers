import React from 'react';

import styles from '@styles/Header/Header.module.css';

import styled from 'styled-components';

const HeaderContainer = styled.div``;

const Header: React.FC = () => {
	return (
		<>
			<HeaderContainer className={styles.headerContainer}>
				헤더 넣을거에요
			</HeaderContainer>
		</>
	);
};

export default Header;

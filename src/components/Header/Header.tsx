import Head from 'next/head';
import React from 'react';

import styles from '@styles/header.module.css';

import styled from 'styled-components';

const HeaderContainer = styled.div``;

const Header: React.FC = () => {
	return (
		<Head>
			<HeaderContainer className={styles.headerContainer}>
				헤더 넣을거에요
			</HeaderContainer>
		</Head>
	);
};

export default Header;

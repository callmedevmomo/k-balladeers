import styles from '@styles/Home/HomeTopContainer.module.css';
import React from 'react';
import styled from 'styled-components';

const HomeTopWrapper = styled.div``;

const HomeTopLeftCards = styled.div``;

const HomeTopRightCards = styled.div``;

const HomeTopConatiner: React.FC = ({}) => {
	return (
		<HomeTopWrapper className={styles.homeTopWrapper}>
			<HomeTopLeftCards className={styles.homeTopLeftCards}>
				<div>LEFT SIDE</div>
			</HomeTopLeftCards>
			<HomeTopRightCards className={styles.homeTopRightCards}>
				<div>RIGHT SIDE</div>
			</HomeTopRightCards>
		</HomeTopWrapper>
	);
};

export default HomeTopConatiner;

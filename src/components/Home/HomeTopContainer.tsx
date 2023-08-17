import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

import React from 'react';

import { FontsMelody, NotoSansKR } from '@assets/fonts/fonts';

import HomeRightLottie from '@components/Home/HomeRightLottie';
import styles from '@styles/Home/HomeTopContainer.module.css';

const HomeTopWrapper = styled.div``;

const HomeTopLeftCards = styled.div``;

const HomeTopRightCards = styled.div``;

const HomeTopLeftSticker = styled.a``;

const HomeTopMiddleCards = styled.div``;

const HomeTopConatiner: React.FC = () => {
	return (
		<HomeTopWrapper
			className={`${styles.homeTopWrapper} ${NotoSansKR.className}`}
		>
			<HomeTopLeftCards className={styles.homeTopLeftCards}>
				<div className={styles.stickerWrapper}>
					<HomeTopLeftSticker
						className={styles.homeTopLeftSticker}
						href="https://www.naver.com"
						target="_blank"
					>
						<span>참여하기</span>
					</HomeTopLeftSticker>
				</div>
				<div style={{ padding: '35px', fontSize: '70px', fontWeight: '500' }}>
					WE ARE
				</div>
				<div
					style={{ padding: '0px 35px', fontSize: '80px', fontWeight: '500' }}
				>
					K - Balladeers
				</div>
				<div
					style={{
						padding: '0px',
						fontSize: '30px',
						width: '90%',
						margin: '50px auto',
						whiteSpace: 'pre-line',
						lineHeight: '3em',
					}}
					className={FontsMelody.className}
				>
					{
						'장소불문,\n 어디서나 마음이 맞는 사람들과의 합주가 즐거운,\n 그런 사람들이 모인 \n발라더들의 모임입니다.'
					}
				</div>
			</HomeTopLeftCards>
			<HomeTopRightCards className={styles.homeTopRightCards}>
				<HomeTopMiddleCards className={styles.homeTopMiddleCards}>
					<div className={`${styles.faqWrapper} ${FontsMelody.className}`}>
						<Fade left>
							<div className={`${styles.faqBubbleQuestion}`}>
								어떠한 목적으로 만들어졌나요?
							</div>
						</Fade>
						<Fade right>
							<div className={styles.faqBubbleAnswer}>
								k-balladeers는 발라더들의 아카이브를 위해 만들어졌습니다.
							</div>
						</Fade>
						<Fade left>
							<div className={styles.faqBubbleQuestion}>
								키를 변경해서 연주할 수 있나요?
							</div>
						</Fade>
						<Fade right>
							<div className={styles.faqBubbleAnswer}>
								어떠한 키로도 변경가능합니다. 제공하고 있는 구글폼의 양식에 맞게
								제출해주시면 됩니다.
							</div>
						</Fade>
						<Fade left>
							<div className={styles.faqBubbleQuestion}>
								온라인으로도 참여할 수 있나요?
							</div>
						</Fade>
						<Fade right>
							<div className={styles.faqBubbleAnswer}>
								저희는 온라인 기반의 합주를 지향하고 있습니다. 온라인으로도
								다양한 참여가 가능하니 많은 참여 부탁드립니다.
							</div>
						</Fade>
						<Fade left>
							<div className={styles.faqBubbleQuestion}>
								실력이 월등하지 않아도 참여할 수 있나요?
							</div>
						</Fade>
						<Fade right>
							<div className={styles.faqBubbleAnswer}>
								발라드를 좋아하고 진지한 마음만 있다면 누구나 참여할 수
								있습니다.
							</div>
						</Fade>
						<Fade left>
							<div className={styles.faqBubbleQuestion}>
								다른 장르는 요청할 수 없나요?
							</div>
						</Fade>
						<Fade right>
							<div className={styles.faqBubbleAnswer}>
								발라드만을 위한 프로젝트이기 때문에 현재 다른 장르는 받고있지
								않습니다.
							</div>
						</Fade>
						<Fade left>
							<div className={styles.faqBubbleQuestion}>
								작업물은 어디에 저장되나요?
							</div>
						</Fade>
						<Fade right>
							<div className={styles.faqBubbleAnswer}>
								작업물은 유튜브와 인스타그램, 웹사이트에 저장되고 노출됩니다.
							</div>
						</Fade>
						<Fade left>
							<div className={styles.faqBubbleQuestion}>
								합주를 위한 장비는 무엇이 필요한가요?
							</div>
						</Fade>
						<Fade right>
							<div className={styles.faqBubbleAnswer}>
								컴퓨터가 있다는 가정하에, 와이파이가 아닌 인터넷 랜선 연결이
								필요합니다. 자세한 사항은 메일로 별도 안내 드리겠습니다.
							</div>
						</Fade>
					</div>
				</HomeTopMiddleCards>
				<HomeRightLottie />
			</HomeTopRightCards>
		</HomeTopWrapper>
	);
};

export default HomeTopConatiner;

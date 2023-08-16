import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import styles from '@styles/BackgroundPlayer/BackgroundPlayer.module.css';
import { useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

// 커스텀 volume 속성을 추가한 HTMLAudioElement 타입 선언
interface CustomAudioElement extends HTMLAudioElement {
	volume: number;
}

const BackgroundMusic = () => {
	const audioRef = useRef<CustomAudioElement | null>(null);
	const [volume, setVolume] = useState(0.5);
	const [isPlaying, setIsPlaying] = useState(true);

	const togglePlay = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const handleVolumeChange = (event: any) => {
		const newVolume = parseFloat(event.target.value);
		setVolume(newVolume);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
		}
	};
	return (
		<div className={styles.backgroundPlayerWrapper}>
			<audio ref={audioRef} autoPlay loop>
				<source src="/bg/gradation.wav" type="audio/wav" />
				Your browser does not support the audio element.
			</audio>
			<div className={styles.titleWrapper}>
				<button onClick={togglePlay}>
					{isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
				</button>
				<Marquee className={styles.titleContext} speed={30}>
					{'영재 - 그라데이션(10cm)'}
				</Marquee>
			</div>
			<div className={styles.volumeWrapper}>
				<VolumeDownIcon className={styles.volumeDownIcon} />
				<input
					className={styles.volumeBar}
					type="range"
					min="0"
					max="1"
					step="0.01"
					value={volume}
					onChange={handleVolumeChange}
				/>
				<VolumeUpIcon className={styles.volumeUpIcon} />
			</div>
		</div>
	);
};

export default BackgroundMusic;

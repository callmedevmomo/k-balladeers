import {
	Hi_Melody as hiMelody,
	Noto_Sans_KR as notoSansKR,
} from 'next/font/google';

export const FontsMelody = hiMelody({ subsets: ['latin'], weight: ['400'] });

export const NotoSansKR = notoSansKR({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
});

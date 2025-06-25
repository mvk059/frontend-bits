export const colorCodes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"];

// WCAG contrast ratio formula
export function getBestContrastTextColor(bgHex: string): string {
	const background = hexToRgb(bgHex);
	const candidates = ["#000000", "#FFFFFF", "#333333", "#111111", "#222222", "#EEEEEE"];

	let bestColor = candidates[0];
	let maxContrast = 0;

	for (const color of candidates) {
		const textRgb = hexToRgb(color);
		const contrast = contrastRatio(background, textRgb);
		if (contrast > maxContrast) {
			maxContrast = contrast;
			bestColor = color;
		}
	}

	return bestColor;
}

function hexToRgb(hex: string): number[] {
	hex = hex.replace("#", "");
	return [
		parseInt(hex.substring(0, 2), 16),
		parseInt(hex.substring(2, 4), 16),
		parseInt(hex.substring(4, 6), 16),
	];
}

function contrastRatio(rgb1: number[], rgb2: number[]): number {
	const lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
	const lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
	const brightest = Math.max(lum1, lum2);
	const darkest = Math.min(lum1, lum2);
	return (brightest + 0.05) / (darkest + 0.05);
}

function luminance(r: number, g: number, b: number): number {
	const a = [r, g, b].map((v) => {
		const sRGB = v / 255;
		return sRGB <= 0.03928
			? sRGB / 12.92
			: Math.pow((sRGB + 0.055) / 1.055, 2.4);
	});
	return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

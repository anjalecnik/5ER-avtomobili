export type WindowSize = "small" | "medium" | "large" | "xlarge";

export const bpSmallToMedium = 480;
export const bpMediumToLarge = 960;
export const bpLargeToXlarge = 1440;
export const bpXlargeToXXlarge = 2000;

export const maxSmall = `(max-width: ${bpSmallToMedium}px)`;
export const maxMedium = `(max-width: ${bpMediumToLarge}px)`;
export const maxLarge = `(max-width: ${bpLargeToXlarge}px)`;

export const minMedium = `(min-width: ${bpSmallToMedium + 1}px)`;
export const minLarge = `(min-width: ${bpMediumToLarge + 1}px)`;
export const minXlarge = `(min-width: ${bpLargeToXlarge + 1}px)`;

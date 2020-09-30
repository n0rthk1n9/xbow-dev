const screenSizes = {
  mediaTiny: '(max-width: 739px)',
  mediaConfinedRange: '(max-width: 1309px) and (min-width: 740px)',
  mediaConfined: '(min-width: 740px)',
  mediaWide:
    '(min-width: 883px) and (max-width: 1024px),\n (min-width: 1113px)',
  mediaXWide: '(min-width: 1310px)',
};

export const tokens = { ...screenSizes };

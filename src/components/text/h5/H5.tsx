import { BoxHTMLProps, BoxOptions, useBox } from 'reakit';
import { createComponent, createHook } from 'reakit-system';
import { css, cx } from '@emotion/css';

const useHeading5 = createHook<BoxOptions, BoxHTMLProps>({
  name: 'Heading5',
  compose: useBox,

  useProps(_, htmlProps) {
    const paragraph = css`
      line-height: 1.5;
      font-family: Gotham, sans-serif;
      font-weight: bold;
      font-size: 13.3px;
    `;
    return { ...htmlProps, className: cx(paragraph, htmlProps.className) };
  },
});

export const H5 = createComponent({
  as: 'h5',
  useHook: useHeading5,
});

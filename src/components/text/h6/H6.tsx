import { BoxHTMLProps, BoxOptions, useBox } from 'reakit';
import { createComponent, createHook } from 'reakit-system';
import { css, cx } from '@emotion/css';

const useHeading6 = createHook<BoxOptions, BoxHTMLProps>({
  name: 'Heading6',
  compose: useBox,

  useProps(_, htmlProps) {
    const paragraph = css`
      line-height: 1.5;
      font-family: Gotham, sans-serif;
      font-weight: bold;
      font-size: 10.7px;
    `;
    return { ...htmlProps, className: cx(paragraph, htmlProps.className) };
  },
});

export const H6 = createComponent({
  as: 'h6',
  useHook: useHeading6,
});

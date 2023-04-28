import { BoxHTMLProps, BoxOptions, useBox } from 'reakit';
import { createComponent, createHook } from 'reakit-system';
import { css, cx } from '@emotion/css';

const useHeading2 = createHook<BoxOptions, BoxHTMLProps>({
  name: 'Heading2',
  compose: useBox,

  useProps(_, htmlProps) {
    const paragraph = css`
      line-height: 1.5;
      font-family: Gotham, sans-serif;
      font-weight: bold;
      font-size: 24px;
    `;
    return { ...htmlProps, className: cx(paragraph, htmlProps.className) };
  },
});

export const H2 = createComponent({
  as: 'h2',
  useHook: useHeading2,
});

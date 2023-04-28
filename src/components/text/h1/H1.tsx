import { BoxHTMLProps, BoxOptions, useBox } from 'reakit';
import { createComponent, createHook } from 'reakit-system';
import { css, cx } from '@emotion/css';

const useHeading1 = createHook<BoxOptions, BoxHTMLProps>({
  name: 'Heading1',
  compose: useBox,

  useProps(_, htmlProps) {
    const paragraph = css`
      line-height: 1.5;
      font-family: Gotham, sans-serif;
      font-weight: bold;
      font-size: 32px;
    `;
    return { ...htmlProps, className: cx(paragraph, htmlProps.className) };
  },
});

export const H1 = createComponent({
  as: 'h1',
  useHook: useHeading1,
});

import { BoxHTMLProps, BoxOptions, useBox } from 'reakit';
import { createComponent, createHook } from 'reakit-system';
import { css, cx } from '@emotion/css';

const useHeading4 = createHook<BoxOptions, BoxHTMLProps>({
  name: 'Heading4',
  compose: useBox,

  useProps(_, htmlProps) {
    const paragraph = css`
      line-height: 1.5;
      font-family: Gotham, sans-serif;
      font-weight: bold;
      font-size: 16px;
    `;
    return { ...htmlProps, className: cx(paragraph, htmlProps.className) };
  },
});

export const H4 = createComponent({
  as: 'h4',
  useHook: useHeading4,
});

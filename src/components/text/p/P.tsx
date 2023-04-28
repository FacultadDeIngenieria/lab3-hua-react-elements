import { cx, css } from '@emotion/css';
import { BoxHTMLProps, BoxOptions, useBox } from 'reakit';
import { createHook, createComponent } from 'reakit-system';

const useParagraph = createHook<BoxOptions, BoxHTMLProps>({
  name: 'Paragraph',
  compose: useBox,

  useProps(_, htmlProps) {
    const paragraph = css`
      line-height: 1.5;
      font-family: Gotham, sans-serif;
      font-size: 16px;
    `;
    return { ...htmlProps, className: cx(paragraph, htmlProps.className) };
  },
});

export const P = createComponent({
  as: 'p',
  useHook: useParagraph,
});

import { injectDNA, styled, ThemeFont, dna, DNA } from '@kbai/design-system';
import { Box } from './Box';

interface IBaseProps {
  lineFormat?: 'single-line';
  textAlign?: 'center' | 'left' | 'right';
}
interface IProps extends IBaseProps {
  className?: string;
}

export const Typography = dna.withDNAProps<IProps>(
  ({ dna, children, className, textAlign = 'left', lineFormat }) => {
    const font = dna.font ?? 'body';
    const attr = getAttr(font);
    return (
      <TypographyBase
        as={attr}
        {...dna}
        textAlign={textAlign}
        lineFormat={lineFormat}
        font={font}
        className={className}
      >
        {children}
      </TypographyBase>
    );
  }
);

const TypographyBase = styled.p<DNA & IBaseProps>`
  ${(props) => injectDNA(props, { m: 0 })}
  text-align: ${(props) => props.textAlign};
  ${(props) =>
    props.lineFormat === 'single-line'
      ? `white-space: nowrap; overflow: scroll;`
      : ''}
`;

function getAttr(font: ThemeFont) {
  switch (font) {
    case 'body':
      return 'p';
    case 'bodyBig':
      return 'p';
    case 'bodySmall':
      return 'p';
    case 'header1':
      return 'h1';
    case 'header2':
      return 'h2';
    case 'header3':
      return 'h3';
    case 'header4':
      return 'h4';
    case 'header5':
      return 'h5';
    default:
      return 'p';
  }
}

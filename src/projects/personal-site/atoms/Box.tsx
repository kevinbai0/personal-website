import { DNA, injectDNA } from '@kbai/design-system';
import styled from 'styled-components';

export const Box = styled.div<DNA>`
  ${(props) =>
    injectDNA(props, {
      display: 'col',
    })}
`;

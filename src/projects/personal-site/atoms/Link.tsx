import { DNA, injectDNA } from '@kbai/design-system';
import styled from 'styled-components';

export const Link = styled.a<DNA>`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transform-origin: bottom-left;

  ${(props) =>
    injectDNA(props, {
      fg: 'action',
    })}
  @media (hover: hover) {
    :hover {
      opacity: 0.5;
    }
  }

  transition: opacity 0.2s ease;
`;

import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { H4 } from './Text';

const ButtonStyle = styled.button`
  margin: 2em;
  background-color: ${(props) => props.color || colors.primary.accent};
  border: none;
  border-radius: 15px;
  height: ${(props) => props.height || 3.5}em;
  padding-left: 1.2em;
  padding-right: 1.2em;
  width: 14em;

  &:hover {
    background-color: ${colors.primary.text};
  }

  &:active {
    background-color: ${colors.secondary.main};
  }
`;

function Button ({ text, onClick, color }) {
  return (
    <ButtonStyle onClick={onClick} color={color}>
      <H4 color={colors.background.darkGrey}>{text}</H4>
    </ButtonStyle>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { Button };

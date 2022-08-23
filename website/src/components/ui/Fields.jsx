import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

const FieldWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-areas: "label field";
  grid-template-rows: 1fr;
  grid-template-columns: 20rem 50rem;
  margin: 1rem;
`;

const Label = styled.label`
  grid-area: label;
  color: ${(props) => props.color || colors.primary.text};
  font-family: ${fonts.regular.fontFamily};
  font-weight: ${fonts.regular.regular.weight};
  font-style: ${fonts.regular.regular.style};
  font-size: ${(props) => props.size || 1.2}em;
  text-transform: uppercase;
  text-align: right;
`;

const Input = styled.input`
  grid-area: field;
  height: ${(props) => props.height || 2.5}em;
  color: ${colors.primary.text};
  font-family: ${fonts.regular.fontFamily};
  font-weight: ${fonts.regular.regular.weight};
  font-style: ${fonts.regular.regular.style};
  font-size: ${(props) => props.size || 1.2}em;
  background-color: ${(props) => props.backgroundColor || colors.primary.main60};
  border: 1px solid rgba(0,0,0,0);
  border-radius: 15px;
  margin-left: 2em;
  box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.16);
  text-align: left;
  align-self: center;
  padding: 0 0 0 1em;

  ::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }
  ::-webkit-outer-spin-button{
        -webkit-appearance: none;
        margin: 0;
    }

  &:focus {
    outline: none;
    border-width: 1px;
    border-color: ${colors.primary.text};
  }
`;

function Field ({ label, onFieldChange, height, color, value, name }) {
  return (
    <FieldWrapper>
      <Label>
        {label}
      </Label>
      <Input
        type="text"
        backgroundColor={color}
        onChange={onFieldChange}
        value={value}
        height={height}
        name={name}
      />
    </FieldWrapper>
  );
}

// eslint-disable-next-line import/prefer-default-export
export { Field };

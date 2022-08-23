import styled from 'styled-components';
import { fonts } from '../../styles/fonts';
import { colors } from '../../styles/colors';

export const Value = styled.h1`
  color: ${(props) => props.color || colors.primary.text};
  font-family: ${fonts.thin.fontFamily};
  font-weight: ${fonts.thin.regular.weight};
  font-style: ${fonts.thin.regular.style};
  font-size: ${(props) => props.size || 12}em;
  margin: ${(props) => props.margin || '0.1em'};
  border-width: .08em;
  border-color: ${(props) => props.borderColor || colors.alert.good};
  border-style: solid;
  border-radius: .05em;
  background-color: ${(props) => props.bgColor || colors.secondary.main};
  text-align: center;
  height: ${(props) => props.height || '.9em'};
  padding: 0;
  line-height: .83;

  @media (max-width: 1500px) {
    font-size: ${(props) => props.size - 2 || 10}em;
  }

  @media (max-width: 1300px) {
    font-size: ${(props) => props.size - 3 || 8}em;
  }

  @media (max-width: 800px) {
    font-size: ${(props) => props.size - 4 || 7}em;
  }
`;

export const H1 = styled.h1`
  color: ${(props) => props.color || colors.primary.text};
  font-family: ${fonts.regular.fontFamily};
  font-weight: ${fonts.regular.regular.weight};
  font-style: ${fonts.regular.regular.style};
  font-size: ${(props) => props.size || 3}em;
  margin: ${(props) => props.margin || '0.1em'};

  @media (max-width: 1500px) {
    font-size: ${(props) => props.size - 0.5 || 2.5}em;
  }

  @media (max-width: 1300px) {
    font-size: ${(props) => props.size - 1 || 2}em;
  }

  @media (max-width: 800px) {
    font-size: ${(props) => props.size - 1.5 || 1.5}em;
  }
`;

export const H2 = styled.h2`
  color: ${(props) => props.color || colors.primary.text};
  font-family: ${fonts.light.fontFamily};
  font-weight: ${fonts.light.regular.weight};
  font-style: ${fonts.light.regular.style};
  font-size: ${(props) => props.size || 1.8}em;
  margin: ${(props) => props.margin || '0.1em'};
  text-transform: uppercase;

  @media (max-width: 1500px) {
    font-size: ${(props) => props.size - 0.4 || 1.4}em;
  }

  @media (max-width: 1300px) {
    font-size: ${(props) => props.size - 0.8 || 1}em;
  }

  @media (max-width: 800px) {
    font-size: ${(props) => props.size - 1 || 1}em;
  }
`;

export const H3 = styled.h3`
  color: ${(props) => props.color || colors.primary.text};
  font-family: ${fonts.regular.fontFamily};
  font-weight: ${fonts.regular.regular.weight};
  font-style: ${fonts.regular.regular.style};
  font-size: ${(props) => props.size || 1.6}em;
  margin: ${(props) => props.margin || '0.1em'};

  @media (max-width: 1500px) {
    font-size: ${(props) => props.size - 0.3 || 1.3}em;
  }

  @media (max-width: 1300px) {
    font-size: ${(props) => props.size - 0.6 || 1}em;
  }
`;

export const H4 = styled.h4`
  color: ${(props) => props.color || colors.primary.text};
  font-family: ${fonts.regular.fontFamily};
  font-weight: ${fonts.regular.regular.weight};
  font-style: ${fonts.regular.regular.style};
  font-size: ${(props) => props.size || 1.2}em;
  margin: ${(props) => props.margin || '0.1em'};
  text-transform: uppercase;
`;

export const H5 = styled.h5`
  color: ${(props) => props.color || colors.primary.text};
  font-family: ${fonts.regular.fontFamily};
  font-weight: ${fonts.regular.regular.weight};
  font-style: ${fonts.regular.regular.style};
  font-size: ${(props) => props.size || 1.15}em;
  margin: ${(props) => props.margin || '0.1em'};

  @media (max-width: 1500px) {
    font-size: ${(props) => props.size - 0.15 || 1}em;
  }

  @media (max-width: 1300px) {
    font-size: ${(props) => props.size - 0.30 || 0.95}em;
  }
`;

export const H6 = styled.h6`
  color: ${(props) => props.color || colors.primary.text};
  font-family: ${fonts.regular.fontFamily};
  font-weight: ${fonts.regular.regular.weight};
  font-style: ${fonts.regular.regular.style};
  font-size: ${(props) => props.size || 1.05}em;
  margin: ${(props) => props.margin || '0.1em'};

  @media (max-width: 1500px) {
    font-size: ${(props) => props.size - 0.05 || 1}em;
  }

  @media (max-width: 1300px) {
    font-size: ${(props) => props.size - 3 || 1}em;
  }
`;

export const P = styled.p`
  color: ${(props) => props.color || colors.primary.text};
  font-family: ${fonts.regular.fontFamily};
  font-weight: ${fonts.regular.regular.weight};
  font-style: ${fonts.regular.regular.style};
  font-size: ${(props) => props.size || 1}em;
  margin: ${(props) => props.margin || '0.1em'};

  @media (max-width: 1500px) {
    font-size: ${(props) => props.size - 2 || 1}em;
  }

  @media (max-width: 1300px) {
    font-size: ${(props) => props.size - 3 || 1}em;
  }
`;

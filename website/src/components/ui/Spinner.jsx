import styled, { keyframes } from 'styled-components';

import { colors } from '../../styles/colors';

const rotateAnimation = keyframes`
    100% { transform: rotate(360deg); }
`;

const dashAnimation = keyframes`
  0% {
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 20, 150;
    stroke-dashoffset: -30;
  }
  100% {
    stroke-dasharray: 50, 200;
    stroke-dashoffset: -50;
  }
`;

const SpinnerSVG = styled.svg`
  animation: ${rotateAnimation} 3s linear infinite;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin: 10em;
`;

const Circle = styled.circle`
  stroke: ${(props) => (props.color ? props.color : colors.primary.accent)};
  stroke-linecap: round;
  animation: ${dashAnimation} 1.5s ease-in-out infinite;
`;

function SmallSpinner ({ color }) {
  return (
    <SpinnerSVG viewBox="0 0 20 20">
      <Circle cx="10" cy="10" r="8" fill="none" strokeWidth="2" color={color} />
    </SpinnerSVG>
  );
}

export default SmallSpinner;

import { ProjectItem } from '@typeDefs/api';
import styled, { css } from 'styled-components';
import { getBoundingBoxDimensions, getContrastColor } from './ElementUtils';

export const Box = styled.div<{ data: ProjectItem }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;

  ${({ data: { rotation, width, height, color } }) => css`
    background: ${color};
    width: ${width}px;
    height: ${height}px;
    transform: rotate(${rotation}deg);
  `};
`;

export const IndicatorBall = styled.span`
  height: 8px;
  width: 8px;
  border-radius: 100%;
  display: block;
`;

export const IndicatorText = styled.span`
  position: absolute;
  top: -150%;
  left: 150%;
`;

export const Indicator = styled.div<{ data: ProjectItem }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  ${({ data: { color } }) => {
    const contrastColor = getContrastColor(color);

    return css`
      ${IndicatorBall} {
        background: ${contrastColor};
      }

      ${IndicatorText} {
        color: ${contrastColor};
      }
    `;
  }};
`;

export const BoundingBox = styled.div<{ data: ProjectItem }>`
  border: 1px solid red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;

  ${({ data }) => {
    const { width, height } = getBoundingBoxDimensions(data);

    return css`
      width: ${width}px;
      height: ${height}px;
    `;
  }}
`;

export const Wrapper = styled.div<{ data: ProjectItem }>`
  position: absolute;
  transform: translate(-50%, -50%);
  transform-origin: center;

  ${({ data: { x, y } }) => css`
    left: ${x}px;
    top: ${y}px;
  `}
`;

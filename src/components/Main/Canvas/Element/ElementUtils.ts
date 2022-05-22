import { ProjectItem } from '@typeDefs/api';
import { readableColor } from 'polished';

export const getBoundingBoxDimensions = ({
  rotation,
  width,
  height,
}: ProjectItem) => {
  const angleRad = (Math.PI / 180) * (rotation % 180);
  const angle =
    (angleRad > Math.PI * 0.5 && angleRad < Math.PI * 1) ||
    (angleRad > Math.PI * 1.5 && angleRad < Math.PI * 2)
      ? Math.PI - angleRad
      : angleRad;
  return {
    height: Math.sin(angle) * width + Math.cos(angle) * height,
    width: Math.sin(angle) * height + Math.cos(angle) * width,
  };
};

export const getContrastColor = (color: string) => {
  try {
    return readableColor(color);
  } catch {
    return readableColor('#000');
  }
};

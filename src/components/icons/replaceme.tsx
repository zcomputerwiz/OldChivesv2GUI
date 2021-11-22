import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as chivesIcon } from './images/chives.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={chivesIcon} viewBox="0 0 150 58" {...props} />;
}

import React from 'react';
import { Text, TextProps } from 'react-native';


const DefaultText: React.FC<TextProps> = (props) => {
  const { style, ...restProps } = props;

  // const mergedStyle = [{ fontFamily: CDFTheme.fontFamily.regular }, style]; // Da usare quando avremo il font

  return <Text {...restProps} />;
};

export default DefaultText;
import React from 'react';
import { Text, TextProps } from 'react-native';


const DefaultText: React.FC<TextProps> = (props) => {
  const { style, ...restProps } = props;

  const mergedStyle = [style]; // Da usare quando avremo il font

  return <Text style={mergedStyle} {...restProps} />;
};

export default DefaultText;
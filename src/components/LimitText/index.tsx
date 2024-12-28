import React from 'react';
import { Text, TextStyle } from 'react-native';

type Iprops = {
    text: string;
    limit:number;
    textStyle: TextStyle
}

const LimitTextComponent:React.FC<Iprops> = ({ text,limit,textStyle }) => {
  let limitedText = text;
  const MAX_CHARACTERS = limit;

  if (limitedText.length > MAX_CHARACTERS) {
    limitedText = limitedText.substring(0, MAX_CHARACTERS) + '...';
  }

  return <Text style={textStyle}>{limitedText}</Text>;
};

export default LimitTextComponent;
import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import {RectButton} from 'react-native-gesture-handler'
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

interface ButtonProps extends RectButtonProperties{
  title: string;
}

const ButtonIcon:React.FC<ButtonProps> =({ title, ...rest })=>{
  return(
    <RectButton 
      style={styles.container} 
      {...rest }
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}

export default ButtonIcon;
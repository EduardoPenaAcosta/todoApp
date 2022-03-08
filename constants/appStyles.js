
import styled from "styled-components";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
  Image,
  Button,
} from "react-native";
import Constants from "expo-constants";


export const colors = {
    white: '#FFFF',
    black: '#0000',
    darkChocolate: '#5D442F',
    brown: '#503B29',
    primary: "#332424",
    secondary: "#4D3636",
    tertiary: "#E6E6E6",
    alternative: "#999999",
    lightBrown: '#887565',
    brownOrange: '#AE6527',
    red:'FF0000',
    green: '00A720',
    yellow: 'FFE100',
    black: '#0000',


}

export const Container = styled.SafeAreaView`
  background-color: ${colors.darkChocolate};
  padding: 20px;
  padding-bottom: 0px;
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const HeaderView = styled.View`
    background-color: ${colors.brown};
    align-items: center;
    padding-top: 35px;
    padding-bottom: 35px;   
`

export const HeaderTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${colors.white};
  letter-spacing: 2px;
  font-style: italic;
`;

export const ListView = styled.View`
  background-color: ${colors.lightBrown};
  padding: 15px;
  margin-top: 30px;
`;

export const TodoText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  color: ${colors.tertiary};
`;

export const TodoDate = styled.Text`
  font-size: 10px;
  letter-spacing: 1px;
  color: ${colors.alternative};
  text-align: right;
  text-transform: uppercase;
`;

export const TodoPriority = styled.Text`
  font-size: 15px;
  letter-spacing: 1px;
  color: ${colors.alternative};
  text-transform: uppercase;
`;


export const ListTouchable = styled.TouchableOpacity`
background-color:${colors.brown}
min-height: 85px;
width: 100%;
padding: 15px;
justify-content: space-around;
margin-bottom: 15px;
border-radius: 10px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${colors.tertiary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  bottom: 15px;
`;

export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: transparent;
`;

export const ModalView = styled.View`
  background-color: ${colors.secondary};
  border-radius: 20px;
  padding: 35px;
  align-items: center;
`;

export const ModalIcon = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const StyledInput = styled.TextInput`
  width: 300px;
  height: 50px;
  background-color: ${colors.tertiary};
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  color: ${colors.secondary};
  letter-spacing: 1px;
`;

export const TextTitleInputs = styled.Text`
  font-size: 20px;
  color: ${colors.white};
  margin-bottom: 10px;
`;

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const ModalIconButtons = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const ModalAction = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-left: 20px;
`;

export const PriorityTouchable = styled.TouchableHighlight`
    border-radius: 5px;
    margin-left: 10px;
    padding: 10px;
`
export const TextTouchable  = styled.Text`
font-size: 20px;
color: black;
`
export const TextAligmentList = styled.View`
align-items: center;
`
export const TextListEmpty = styled.Text`
  font-size: 30px;
  letter-spacing: 1px;
  color: ${colors.white};
  text-transform: uppercase;
`;
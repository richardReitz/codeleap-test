import styled from 'styled-components/native';

export const CenterView = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export const SignInModal = styled.View`
padding: 20px 25px;
background-color: #FFF;
border: solid 1px #CCC;
width: 95%;
height: 220px;
`;

export const SignInTitle = styled.Text`
font-size: 22px;
color: #000;
font-weight: bold;
`;

export const SignInText = styled.Text`
margin-top: 30px;
font-size: 16px;
color: #000;
`;

export const Input = styled.TextInput`
margin-top: 13px;
border: solid 1px #000;
border-radius: 4px;
height: 28px;
width: 100%;
padding: 6px 11px ;
`;

export const BtnArea = styled.View`
flex: 1;
align-items: flex-end;
justify-content: flex-end;
`;

export const BtnSubmit = styled.TouchableOpacity`
margin-top: 20px;
background-color: #000;
height: 33px;
width: 111px;
align-items: center;
justify-content: center;
`;

export const TextBtn = styled.Text`
text-transform: uppercase;
color: #FFF;
font-weight: bold;
font-size: 16px;
`;
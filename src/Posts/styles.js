import styled from 'styled-components/native';

export const PostView = styled.View`
margin: 0px 25px 30px;
`;

export const HeaderView = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 15px;
border: solid 1px #000;
background-color: #000;
`;

export const PostTitle = styled.Text`
color: #FFF;
font-weight: bold;
font-size: 18px;
`;

export const IconsView = styled.View`
flex-direction: row;
`;

export const IconBtn = styled.TouchableOpacity`
padding-left: 10px;
`;


export const TextView = styled.View`
border: solid 1px #999999;
padding: 15px;
`;

export const InfoView = styled.View`
flex-direction: row;
justify-content: space-between;
padding-bottom: 15px;
`;

export const User = styled.Text`
color: #777;
font-weight: bold;
font-size: 14px;
`;

export const PostedTime = styled.Text`
color: #777;
font-size: 14px;
`;

export const TextArea = styled.Text`
color: #000;
font-size: 14px;
`;
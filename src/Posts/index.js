import React from 'react';
import {PostView, HeaderView, PostTitle, IconsView, IconBtn, TextView, InfoView, User, PostedTime, TextArea} from './styles';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Posts(props) {

    function delPost(){
        Alert.alert(
            '',
            `Are you sure you want to delete this item?`,
            [
              {
                text: 'Cancel',
                style: 'cancel'
              },
              {
                text: 'OK',
                onPress: () => alert('Deleted')
              }
            ]
          )
    }

    return (
        <PostView>
            <HeaderView>
                <PostTitle>{props.data.title}</PostTitle>
                <IconsView>
                    <IconBtn onPress={() => delPost()}>
                        <Icon name="trash-2" color="#FFF" size={18}/>
                    </IconBtn>
                    <IconBtn onPress={props.edit}>
                        <Icon name="edit" color="#FFF" size={18}/>
                    </IconBtn>
                </IconsView>
            </HeaderView>
            <TextView>
                <InfoView>
                    <User>@{props.data.username}</User>
                    <PostedTime>25 minutes ago</PostedTime>
                </InfoView>
                <TextArea>{props.data.text}</TextArea>
            </TextView>
        </PostView>
    );
}
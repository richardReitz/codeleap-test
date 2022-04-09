import React from 'react';
import {} from 'react-native';
import {Container, EditView, EditTitle, TextTitle, TitleInput, ContentText, ContentInput, BtnArea, SaveBtn, BtnText} from './styles';

export default function EditPost(props) {
 return (
   <Container>
       <EditView>
           <EditTitle>Edit Item</EditTitle>
           <TextTitle>Title</TextTitle>
            <TitleInput/>
            <ContentText>Content</ContentText>
            <ContentInput/>
            <BtnArea>
                <SaveBtn onPress={props.save}>
                    <BtnText>Save</BtnText>
                </SaveBtn>
            </BtnArea>    
       </EditView>
   </Container>
  );
}

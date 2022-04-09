import React, {useState} from 'react';
import {StatusBar, Modal} from 'react-native';
import {Container, LogoTitle, NewPostView, NewPostTitle, TextTitle, TitleInput, ContentText, ContentInput, BtnArea, CreateBtn, BtnText, List} from './styles';
import SignIn from './SignIn';
import EditPost from './EditPost';
import Posts from './Posts';

export default function App() {

    const [signInModal, setSignInModal] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [posts, setPosts] = useState([
        {id: 1, username: 'Richard', title: 'My First Post at CodeLeap', text: 'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.'},
        {id: 2, username: 'Roger', title: 'Another Post Here', text: 'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.'},
        {id: 3, username: 'Carlos', title: 'My New Carrer', text: 'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.'}
    ]);

    return (
    <Container>
        <StatusBar backgroundColor="#000" barStyle='light-content'/>
        <Modal //SignIn Modal
            animationType="fade"
            transparent={false}
            visible={signInModal}
        > 
            <SignIn entry={()=> setSignInModal(false)}/>
        </Modal>

        <Modal //Edit Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        > 
            <EditPost save={()=> setModalVisible(false)}/>
        </Modal>

        <LogoTitle>CodeLeap Network</LogoTitle>
        <NewPostView>
            <NewPostTitle>What's on your mind?</NewPostTitle>
            <TextTitle>Title</TextTitle>
            <TitleInput/>
            <ContentText>Content</ContentText>
            <ContentInput/>
            <BtnArea>
                <CreateBtn onPress={()=> alert('Post created!')}>
                    <BtnText>Create</BtnText>
                </CreateBtn>
            </BtnArea>    
        </NewPostView>
        <List
        showsVerticalScrollIndicator={false}
        data={posts}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (<Posts edit={()=> setModalVisible(true)} data={item}/>)}
        />
   </Container>
  );}
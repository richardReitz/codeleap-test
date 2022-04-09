import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {CenterView, SignInModal, SignInTitle, SignInText, Input, BtnArea, BtnSubmit, TextBtn} from './styles';

export default function SignIn(props) {
    const [user, setUser] = useState('');
    const [disableBtn, setDisableBtn] = useState(true);

    function desblockBtn(text){
        if(text.length < 2){
            setDisableBtn(true);
            setUser(text);
            return;
        }else{
            setDisableBtn(false);
            setUser(text);
            return;
        }
    };

    return (
        <CenterView>
            <StatusBar backgroundColor="#FFF" barStyle='dark-content'/>
            <SignInModal>
                <SignInTitle>Welcome to CodeLeap network!</SignInTitle>
                    <SignInText>Please enter your username</SignInText>
                        <Input
                            value={user}
                            autocorrect={false}
                            onChangeText={(text) => desblockBtn(text)}
                        />
                        <BtnArea>
                            <BtnSubmit
                                onPress={props.entry}
                                disabled={disableBtn}
                                style={{opacity: disableBtn ? 0.4 : 1}}
                            >
                                <TextBtn>Enter</TextBtn>
                            </BtnSubmit>
                        </BtnArea>
            </SignInModal>
        </CenterView>
     );
}
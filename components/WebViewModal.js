import React from 'react';
import { Modal, Button } from 'react-native';
import WebView from 'react-native-webview';

const WebViewModal = props => {
    return (
        <Modal visible={props.visible} animationType="slide">
            <Button title={'Close'} onPress={props.handleWebViewModal.bind(this, undefined)}/>
            <WebView source={{ uri: props.uri }} />
        </Modal>
    );
};

export default WebViewModal;
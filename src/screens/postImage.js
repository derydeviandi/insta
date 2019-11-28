import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker'
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux'
import Axios from 'axios';
import { urlApi } from '../supports/url';
class postImage extends Component {
    state = { image: null, caption: '' }

    openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
        }).then(image => {
            this.setState({ image });
        });
    }
    openGalery = () => {
        ImagePicker.openPicker({
            // width: 300,
            // height: 400,
            cropping: true
        }).then(image => {
            this.setState({ image })
            console.log(image);
        });
    }

    onBtnPostPress = () => {
        var fd = new FormData()
        var image = {
            name: this.props.user_data.username + '.' + this.state.image.mime.split('/')[1],
            type: this.state.image.mime,
            uri: this.state.image.path
        }
        console.log(image)
        fd.append('image', image)
        var data = {
            caption: this.state.caption,
            username: this.props.user_data.username,
            id_user: this.props.user_data.id
        }
        console.log(data)
        data = JSON.stringify(data)

        fd.append('data', data)
        console.log(fd)
        Axios.post(urlApi + 'post/addpost', fd, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    render() {
        console.log(this.props.user_data)
        return (
            <View>
                <Text onPress={this.openCamera}> Camera </Text>
                <Text onPress={this.openGalery}> Gallery </Text>
                <Image
                    width={300}
                    height={300}
                    source={{ uri: this.state.image === null ? null : this.state.image.path }}
                />
                <Input
                    onChangeText={(text) => this.setState({ caption: text })}
                    placeholder='Caption'
                />
                <Button
                    onPress={() => this.onBtnPostPress()}
                    title='Post'
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user_data: state.users

    }
}

export default connect(mapStateToProps)(postImage);
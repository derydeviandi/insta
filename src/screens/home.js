import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { Image, Avatar, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Post from './../components/post'
import { urlApi } from '../supports/url';
import Axios from 'axios';


export default class home extends Component {
    state = { data: null }

    componentDidMount() {
        Axios.get(urlApi + 'post/getallpost')
            .then((data) => {
                console.log(data)
                this.setState({ data: data.data.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    filterData = (username) => {
        var data_filtered = this.state.data.filter((val) => {
            return val.username === username
        })

        return this.props.navigation.navigate('detail', { data: data_filtered })
    }

    render() {
        if (this.state.data === null) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
        return (
            <ScrollView style={{ paddingTop: 30 }}>
                {
                    this.state.data.map((val) => {
                        return (
                            <Post avatarUrl={urlApi + "public/profile/default.png"} onPindah={() => this.filterData(val.username)} postUrl={urlApi + val.foto_url} username={val.username} caption={val.caption} />
                        )
                    })
                }

            </ScrollView>
        );
    }
}
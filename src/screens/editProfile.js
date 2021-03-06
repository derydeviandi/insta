import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, Left, Body, Container, Right } from 'native-base';
import { Avatar, Text, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
const data = [
    {
        username: 'fikri',
        url_foto:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0',
        caption: 'caption',
        likes: 10
    },
    {
        username: 'andi',
        url_foto:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0',
        caption: 'caption',
        likes: 10
    },
    {
        username: 'budi',
        url_foto:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0',
        caption: 'caption',
        likes: 10
    },
    {
        username: 'seto',
        url_foto:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0',
        caption: 'caption',
        likes: 10
    },
    {
        username: 'susilo',
        url_foto:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0',
        caption: 'caption',
        likes: 10
    }
];
export default class editProfile extends Component {
    state = { data: null };
    componentDidMount() {
        // var data = this.props.navigation.getParam('data');
        this.setState({ data: data });
    }
    photoList() {
        if (this.state.data === null) {
            return <Text h1>Loading</Text>;
        }
        return this.state.data.map((raw) => {
            return (
                <View style={{ width: `${100 / 3}%`, height: 120 }}>
                    <Image
                        source={{
                            uri: raw.url_foto
                        }}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
            );
        });
    }

    render() {
        if (this.state.data === null) {
            return <Text h1>Loading</Text>;
        }
        return (
            <View>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left></Left>
                    <Body>
                        <Text style={{ fontWeight: 'bold' }}>Username </Text>
                    </Body>
                    <Right ><Icon onPress={() => { this.props.navigation.navigate('setting') }} name="ellipsis-v"
                        size={20}></Icon></Right>
                </Header>
                {/* Container USer Photo */}
                <View style={{ height: 100, flexDirection: 'row', paddingHorizontal: 15, marginTop: 15 }}>
                    <View style={{ flex: 1 }}>
                        <Avatar
                            containerStyle={{ borderWidth: 3, borderColor: 'red' }}
                            size={100}
                            rounded
                            source={{
                                uri: 'http://apiinstagrinjc.herokuapp.com/public/posts/POS1574734597340.jpeg'
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text h4>{this.state.data.length}</Text>
                        <Text>Posts</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text h4>1000</Text>
                        <Text>Followers</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text h4>2000</Text>
                        <Text>Following</Text>
                    </View>
                </View>

                {/* Container User Info */}
                <View style={{ marginTop: 15, paddingHorizontal: 15 }}>
                    <Text style={{ fontWeight: 'bold' }}> Username </Text>
                    <Text> User Bio </Text>
                </View>

                {/* List Foto */}
                <ScrollView style={{ borderTopWidth: 1, borderTopColor: 'grey', marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{this.photoList()}</View>
                </ScrollView>
            </View>
        );
    }
}
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Image, Avatar, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const data = [
    { username: 'Show', url_foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption: 'caption', likes: 10 },
    { username: 'Me', url_foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption: 'caption', likes: 10 },
    { username: 'Whats', url_foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption: 'caption', likes: 10 },
    { username: 'Youve', url_foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption: 'caption', likes: 10 },
    { username: 'Got!!', url_foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKrpS7K4U5ju_Jqtj69t2SW90P8G0yInzjmySwy-McoemFPXj0', caption: 'caption', likes: 10 },
]


export default class home extends Component {
    render() {
        return (
            <ScrollView style={{ paddingTop: 30 }}>
                {/* Icon User Pic */}
                <View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Avatar
                                rounded
                                source={{
                                    uri:
                                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk3ygf6ce5PBR_Tzy9h9ays0qndp7I_d9frICxOem4KPW4p5II',
                                }}
                            />
                            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 18 }}>Username</Text>

                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <Icon
                                name='ellipsis-v'
                                size={20}
                            />
                        </View>
                    </View>

                    {/* Post Image */}
                    <View style={{ borderTopWidth: 0.3, borderTopColor: 'grey', marginTop: 10 }}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk3ygf6ce5PBR_Tzy9h9ays0qndp7I_d9frICxOem4KPW4p5II' }}
                            style={{ width: 400, height: 400 }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 15, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon
                                style={{ marginRight: 20 }}
                                // style={{borderWidth:0.5,borderColor:'black'}}
                                name='heart-o'
                                size={30}
                            />
                            <Icon
                                // style={{borderWidth:0.5,borderColor:'black'}}
                                name='comment-o'
                                size={30}
                            />
                        </View>
                        <View>
                            <Icon
                                style={{ marginRight: 20 }}
                                // style={{borderWidth:0.5,borderColor:'black'}}
                                name='tag'
                                size={30}
                            />
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', marginTop: 15, paddingHorizontal: 15 }}>
                        <Text style={{ fontWeight: 'bold' }}>Username <Text style={{ fontWeight: "normal" }}>Ini Adalah Caption</Text></Text>
                    </View>
                    <View></View>
                </View>
            </ScrollView>
        );
    }
}
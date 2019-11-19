import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class login extends Component {
    state = {
        lookPassword: true
    }

    render() {


        return (
            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
                <Text style={{ alignSelf: 'center' }} h1> InstaKilo </Text>
                {/* Username */}
                <View style={{ marginTop: 30 }}>
                    <Input
                        placeholder='Username'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='black'
                                style={{ paddingRight: 10 }}
                            />
                        }
                    />
                </View>

                {/* Password */}
                <View style={{ marginTop: 15 }}>
                    <Input
                        placeholder='Password'
                        secureTextEntry={this.state.lookPassword}
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                                style={{ paddingRight: 10 }}
                            />
                        }
                        rightIcon={
                            <Icon
                                name='eye'
                                size={24}
                                color='black'
                                style={{ paddingRight: 10 }}
                                onPress={() => this.setState({ lookPassword: !this.state.lookPassword })}
                            />
                        }
                    />
                </View>

                {/* Button Login */}
                <View style={{ marginTop: 30 }}>
                    <Button
                        title='Login'

                    />
                </View>

                {/* Login Google */}
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <View style={{ flex: 1 }}>
                        <Button
                            icon={
                                <Icon
                                    name='google'
                                    size={25}
                                    color='white'
                                />
                            }
                            buttonStyle={{ backgroundColor: 'red' }}

                        />
                    </View>

                    {/* Login Facebook */}
                    <View style={{ flex: 1 }}>
                        <Button
                            icon={
                                <Icon
                                    name='facebook'
                                    size={25}
                                    color='white'
                                />
                            }
                            buttonStyle={{ backgroundColor: 'darkblue' }}
                        />
                    </View>
                </View>

                {/* Create account */}
                <Text h5 style={{ alignSelf: "center" }}>Create Account</Text>
            </View>
        );
    }
}

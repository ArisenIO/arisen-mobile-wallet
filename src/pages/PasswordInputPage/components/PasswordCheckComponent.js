import React from "react";
import {
    AppState,
    BackHandler,
    Button,
    Dimensions,
    FlatList,
    Keyboard,
    Modal,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from "react-native";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { styles as style } from "../style";
import PasswordInputComponent from "./PasswordInputComponent";
import NumberInputComponent from "./NumberInputComponent";

class PasswordCheckComponent extends React.Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    constructor( props ) {
        super( props );

        this.state = {
            isOpen: props.isOpen,
            password: '',
            errorText: '',
        };

        this._onBack = this.onBack.bind( this );
    }

    componentWillMount() {
        BackHandler.addEventListener( 'hardwareBackPress', this._onBack );
    }

    componentDidMount() {
        Keyboard.dismiss();
    }

    componentWillUnmount() {
        BackHandler.removeEventListener( 'hardwareBackPress', this._onBack );
    }

    componentWillReceiveProps( nextProps ) {
        if (
            nextProps.isOpen !== this.state.isOpen
        ) {
            this.setState( {
                isOpen: nextProps.isOpen,
                password: nextProps.isOpen ? '' : this.state.password,
                errorText: nextProps.isOpen ? '' : this.state.errorText,
            } );
        }
    }

    onBack() {
        if ( this.state.isOpen ) {
            // this.closeModal();

            return true;
        }
        return false;
    }

    closeModal() {
        if ( this.props.onClose ) {
            this.props.onClose();
        }

        this.setState(
            {
                isOpen: false,
            }
        );
    }


    checkPassword( password ) {
        if ( password !== this.props.password ) {
            this.setState( {
                errorText: 'Password is not correct'
            } );

            this._passwordInputComponent.clearData();
            return;
        }

        this.closeModal();
    }


    render() {
        return (
            <Modal
                transparent={true}
                visible={this.state.isOpen}
            >

                <View style={[ {
                    backgroundColor: '#fafafa',
                }, style.wrapper ]}>
                    <Text
                        style={[ {
                            fontSize: 18,
                            color: '#323232',
                            marginTop: 100,
                            marginLeft: 20,
                            marginRight: 20,
                            textAlign: 'center'
                        } ]}>
                        {
                            'Please enter your password'
                        }
                    </Text>

                    <PasswordInputComponent
                        ref={( passwordInputComponent ) => {
                            this._passwordInputComponent = passwordInputComponent;
                        }}
                        password={this.state.password}
                        style={[ { marginTop: 40, marginLeft: 50, marginRight: 50 } ]}
                        autoFocus={false}
                        editable={false}
                        onPasswordChange={( password ) => {
                            if ( password.length >= 6 ) {
                                this.checkPassword( password );
                            } else if ( password.length > 0 ) {
                                this.setState( {
                                    errorText: ''
                                } );
                            }
                            this.setState( {
                                password: password
                            } );
                        }}
                    />

                    <Text
                        style={[ {
                            fontSize: 12,
                            color: 'red',
                            marginTop: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            textAlign: 'center'
                        } ]}>
                        {
                            this.state.errorText
                        }
                    </Text>

                    <NumberInputComponent
                        style={[ { flex: 1, marginLeft: 50, marginRight: 50, } ]}
                        onInput={( content ) => {
                            this._passwordInputComponent.appendContent( content );
                        }}
                    />

                    <Button
                        onPress={() => {
                            this._passwordInputComponent.clearData()
                        }}
                        title="Clear Password"
                        color="#007AFF"
                        accessibilityLabel=""
                        style={[ { marginTop: 100, marginBottom: 20 } ]}
                    />

                </View>

            </Modal>
        );
    }
}

function select( store ) {
    return {
        password: store.PasswordInputPageReducer.password
    }
}

export default connect( select )( PasswordCheckComponent );

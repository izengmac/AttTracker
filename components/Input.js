import { StyleSheet, TextInput, View,Text } from "react-native";
import React from "react";

const Input = (props) => {

  const onChangeText = (text) => {
    props.onInputChanged(props.id, text);
  };
  return (
    <View>
      <View>
        <TextInput
          {...props}
          placeholder={props.placeholder}
          style={{
            borderColor: "#D9D9D9",
            borderWidth: 1,
            borderRadius: 20,
            width: 351,
            height: 48,
          }}
          onChangeText={onChangeText}
        />
      </View>
      {
        props.errorText && (
            <View>
                <Text style={{
                    color: "red",
                }}>{props.errorText[0]}</Text>
            </View>
        )
      }
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});

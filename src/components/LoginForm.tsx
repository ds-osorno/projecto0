import React, { useState } from "react";
import { TextInput, Button, Text, View } from "react-native";

interface Props {}

interface State {
  email: string;
  password: string;
}

export default function LoginForm(props: Props): JSX.Element {
  const [state, setState] = useState<State>({
    email: "",
    password: "",
  });

  const handleEmailChange = (email: string) => {
    setState({ ...state, email });
  };

  const handlePasswordChange = (password: string) => {
    setState({ ...state, password });
  };

  const handlePress = () => {
    console.log("Sending...");
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={state.email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        placeholder="Password"
        value={state.password}
        onChangeText={handlePasswordChange}
      />
      <Button title="Send" onPress={handlePress} />
    </View>
  );
}

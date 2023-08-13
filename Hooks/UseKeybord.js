import { useState, useEffect } from "react";
import { Keyboard } from "react-native";
export default function useKeyboard() {
  const [keyboardShowStatus, setKeyboardShowStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardShowStatus(true);
      console.log("Keybord", keyboardShowStatus);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardShowStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return keyboardShowStatus;
}

import {Button} from "react-native-paper";
import * as React from "react";

export default function DetailsScreen() {
  return (
    <Button mode="contained" onPress={() => alert('Let’s get sexy, darling')}>
      News Article
    </Button>
  );
}
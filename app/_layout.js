import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </>
  );
};

export default _layout;

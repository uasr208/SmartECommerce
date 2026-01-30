import HomeHeader from "@/src/components/headers/HomeHeader";
import AppSaveView from "@/src/components/views/AppSaveView";
import React from "react";
import { StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
    </AppSaveView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});

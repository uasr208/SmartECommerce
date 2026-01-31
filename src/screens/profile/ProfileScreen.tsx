import ProfileSectionButton from "@/src/components/buttons/ProfileSectionButton";
import HomeHeader from "@/src/components/headers/HomeHeader";
import AppText from "@/src/components/texts/AppText";
import AppSaveView from "@/src/components/views/AppSaveView";
import { sharedPaddinghorizontal } from "@/src/styles/sharedStyles";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";

interface IProfileSectionButton {
  title: string;
  onPress: () => void;
}
const ProfileScreen: FC<IProfileSectionButton> = () => {
  const navigation = useNavigation();
  return (
    <AppSaveView>
      <HomeHeader />
      <AppText style={{ fontSize: s(18), marginTop: vs(10) }} variant="bold">
        Hello, UASR
      </AppText>
      <View style={{ paddingHorizontal: sharedPaddinghorizontal }}>
        <ProfileSectionButton
          onPress={() => navigation.navigate("MyOrdersScreen")}
          title={"My orders"}
        />
        <ProfileSectionButton title={"Language"} />
        <ProfileSectionButton title={"Logout"} />
      </View>
    </AppSaveView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});

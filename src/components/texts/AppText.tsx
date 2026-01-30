import { AppColors } from "@/src/styles/colors";
import { AppFonts } from "@/src/styles/fonts";
import React, { FC } from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { s } from "react-native-size-matters";

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: "bold" | "medium";
}
const AppText: FC<AppTextProps> = ({
  children,
  style,
  variant = "medium",
  ...rest
}) => {
  return (
    <Text {...rest} style={[styles[variant], style]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  bold: {
    fontSize: s(18),
    fontFamily: AppFonts.Bold,
    color: AppColors.black,
  },
  medium: {
    fontSize: s(16),
    fontFamily: AppFonts.Medium,
    color: "000",
  },
});

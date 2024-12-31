import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { IconCheck, IconAlertTriangle, IconHome, IconInfoCircle } from "@tabler/icons-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Check: IconCheck,
  Alert: IconAlertTriangle,
  Home: IconHome,
  Info: IconInfoCircle,
};

const iconMapping: Record<string, JSX.Element | null> = Object.entries(iconMap).reduce(
  (acc, [key, IconComponent]) => {
    // @ts-ignore
    acc[key] = IconComponent ? React.createElement(IconComponent) : null;
    return acc;
  },
  { none: null }
);

const controlArgType = () => ({
  control: {
    type: "select",
    labels: {
      none: "No Icon",
      ...Object.keys(iconMap).reduce(
        (acc, key) => ({ ...acc, [key]: key }),
        {}
      ),
    },
  },
});

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    leftIcon: {
      options: ["none", ...Object.keys(iconMap)],
      mapping: iconMapping,
      description: "Butonun sol tarafındaki ikon",
      control: controlArgType(),
    },
    rightIcon: {
      options: ["none", ...Object.keys(iconMap)],
      mapping: iconMapping,
      description: "Butonun sağ tarafındaki ikon",
      control: controlArgType(),
    },
    label: { control: "text", description: "Buton etiketi" },
    color: { control: "select", options: ["blue", "red", "green", "gray"] },
    variant: {
      control: "select",
      options: ["filled", "outline", "light", "subtle"],
    },
    tooltip: { control: "text", description: "Tooltip açıklaması" },
    position: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "Tooltip'in pozisyonu",
    },
    isLoading: { control: "boolean", description: "Yükleme durumu" },
    onClick: { action: "clicked" },
  },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    label: "Primary Button",
    color: "blue",
    variant: "filled",
    tooltip: "This is a primary button",
    position: "right",
    isLoading: false,
    leftIcon: "Check",
  },
};

export const WithIcons: StoryObj<typeof Button> = {
  args: {
    label: "With Icons",
    color: "green",
    variant: "outline",
    tooltip: "This button has icons",
    position: "right",
    leftIcon: "Check",
    rightIcon: "Alert",
  },
};

export const LoadingState: StoryObj<typeof Button> = {
  args: {
    label: "Loading...",
    color: "gray",
    variant: "filled",
    isLoading: true,
    tooltip: "This button is loading",
    position: "bottom",
  },
};

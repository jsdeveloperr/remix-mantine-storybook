import React from "react";
import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
  Loader,
  Tooltip,
  Group,
} from "@mantine/core";
import { FloatingPosition } from "@mantine/core";

interface ButtonProps extends MantineButtonProps {
  label: string;
  tooltip?: string;
  position?: FloatingPosition;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  label,
  tooltip,
  position = "top",
  isLoading = false,
  leftIcon,
  rightIcon,
  onClick,
  ...props
}: ButtonProps) {
  const buttonContent = (
    <MantineButton
      {...props}
      leftSection={isLoading ? <Loader size="xs" /> : leftIcon}
      rightSection={rightIcon}
      onClick={onClick}
      disabled={isLoading || props.disabled}
    >
      {label}
    </MantineButton>
  );

  return tooltip ? (
    <Tooltip label={tooltip} position={position} withArrow>
      {buttonContent}
    </Tooltip>
  ) : (
    buttonContent
  );
}

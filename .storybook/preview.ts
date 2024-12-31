import React from "react";
import { MantineProvider } from "@mantine/core";
import type { Preview } from "@storybook/react";
import '@mantine/core/styles.css';

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(
        MantineProvider,
        {
          withGlobalStyles: true,
          withNormalizeCSS: true,
          // @ts-ignore
          theme: { colorScheme: "light", primaryColor: "blue" },
        },
        React.createElement(Story)
      ),
  ],
};

export default preview;

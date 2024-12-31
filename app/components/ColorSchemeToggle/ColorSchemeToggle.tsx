'use client';

import { Group, useMantineColorScheme } from '@mantine/core';
import { Button } from "~/components/Button/Button";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button label="light" tooltip="light" position="left" onClick={() => setColorScheme('light')}>Light</Button>
      <Button label="dark" tooltip="dark" position="bottom" onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button label="auto" tooltip="auto" onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button label="Devamını oku..." position="right" tooltip="Devamını oku..." />
    </Group>
  );
}

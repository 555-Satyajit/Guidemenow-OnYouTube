import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { ActionIcon, TextInput, TextInputProps, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
export function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();
  

  return (
    <Link href="/search" >
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search"
      rightSectionWidth={42}
      leftSection={<IconSearch size={18} stroke={1.5} />}
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          <IconArrowRight size={18} stroke={1.5} />
        </ActionIcon>
      }
      {...props}
    />
    </Link>
  );
}
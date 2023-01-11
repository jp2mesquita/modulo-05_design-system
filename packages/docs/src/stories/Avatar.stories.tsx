import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@jp2mesquita-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/jp2mesquita.png',
    alt: 'João Paulo Mesquita',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

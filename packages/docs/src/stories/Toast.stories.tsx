import type { StoryObj, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@jp2mesquita-ignite-ui/react'
import { useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Agendar</Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Surfaces/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

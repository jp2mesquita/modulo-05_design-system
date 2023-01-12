import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Heading } from '../Heading'
import { Text } from '../Text'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastProvider>
      <ToastContainer {...props}>
        <ToastTitle>
          <Heading size="sm">{title}</Heading>
        </ToastTitle>
        <ToastDescription>
          <Text>{description}</Text>
        </ToastDescription>
        <ToastClose asChild>
          <X weight="light" width={20} />
        </ToastClose>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}

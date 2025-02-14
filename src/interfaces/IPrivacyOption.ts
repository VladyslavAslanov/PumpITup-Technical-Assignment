import { ElementType, ReactNode } from 'react'

export interface IPrivacyOption {
  icon: ElementType,
  text: string,
  action?: ReactNode
}
export interface Modal_Account {
  type?: ModalType 
  state: boolean
  originalTitle?: string
  coloredWord?: string
  title?: string
  lastCharacter?: string
}

type ModalType = 'login' | 'register'
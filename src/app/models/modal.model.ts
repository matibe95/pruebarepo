export interface Modal_Account {
  type?: ModalType 
  state: boolean
  originalTitle?: string
  coloredWord?: string
  title?: string
  lastCharacter?: string
}

export interface Modal_Option {
  type?: OptionType
  state?: boolean
}


type OptionType = 'event' | 'community' | 'post' | 'main'
type ModalType = 'login' | 'register'
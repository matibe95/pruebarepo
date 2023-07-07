export type ModalSteps = {
  name: string,
  step: number,
  buttonType: string,
  buttonText: string,
  inputType: string,
  placeholder: string
}

export const LOGIN_STEPS: ModalSteps[]  = [
  {
    name: '',
    step: 0,
    buttonType: 'button',
    buttonText: 'Continuar',
    inputType: '',
    placeholder: '',
  },
  {
    name: 'email',
    step: 1,
    buttonText: 'Continuar',
    buttonType: 'button',
    inputType: 'email',
    placeholder: 'Ingrese su email',
  },
  {
    step: 2,
    name: 'password',
    buttonText: 'Finalizar',
    buttonType: 'submit',
    inputType: 'password',
    placeholder: 'Ingrese su contraseña',
  },
];

export const REGISTER_STEPS: ModalSteps[] = [
  {
    name: '',
    step: 0,
    buttonType: 'button',
    buttonText: 'Continuar',
    inputType: '',
    placeholder: '',
  },
  {
    name: 'nickname',
    step: 1,
    buttonText: 'Continuar',
    buttonType: 'button',
    inputType: 'text',
    placeholder: 'Ingrese su nickname',
  },
  {
    step: 2,
    name: 'email',
    buttonText: 'Continuar',
    buttonType: 'button',
    inputType: 'email',
    placeholder: 'Ingrese su email',
  },
  {
    step: 3,
    name: 'password',
    buttonText: 'Continuar',
    buttonType: 'button',
    inputType: 'password',
    placeholder: 'Ingrese su contraseña',
  },
  {
    step: 4,
    name: 'password_confirmation',
    buttonText: 'Finalizar',
    buttonType: 'submit',
    inputType: 'password',
    placeholder: 'Repita su contraseña',
  },
];
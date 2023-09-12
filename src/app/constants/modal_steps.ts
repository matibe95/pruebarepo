export type ModalSteps = {
  name: string,
  step: number,
  buttonType: string,
  buttonText: string,
  inputType: string,
  placeholder: string
}
export type ModalRules = {
  name: `rule_${number}`,
  content: `content_${number}`,
  number: number,
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

export const RULES_STEPS: ModalRules[]  = [
  {
    name: 'rule_0',
    content: 'content_0',
    number: 0,
  },
  {
    name: 'rule_1',
    content: 'content_1',
    number: 1,
  },
  {
    number: 2,
    content: 'content_2',
    name: 'rule_2',
  },
  {
    number: 3,
    content: 'content_3',
    name: 'rule_3',
  },
  {
    number: 4,
    content: 'content_4',
    name: 'rule_4',
  },
  {
    number: 5,
    name: 'rule_5',
    content: 'content_5',
  },
  {
    number: 6,
    name: 'rule_6',
    content: 'content_6',
  },
  {
    number: 7,
    name: 'rule_7',
    content: 'content_7',
  },
  {
    number: 8,
    name: 'rule_8',
    content: 'content_8',
  },
  {
    number: 9,
    name: 'rule_9',
    content: 'content_9',
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
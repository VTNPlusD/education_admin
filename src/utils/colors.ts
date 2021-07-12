const colors = {
  PRIMARY_LINEAR_LIGHT: '#FFF',
  PRIMARY_LINEAR_PURPLE: 'linear-gradient(to right, #da8cff, #9a55ff)',
  PRIMARY_LINEAR_DANGER: 'linear-gradient(to right, #ffbf96, #fe7096)',
  PRIMARY_LINEAR_DARK: 'linear-gradient(89deg, #5e7188, #3e4b5b)',
  PRIMARY_LINEAR_INFO: 'linear-gradient(to right, #90caf9, #047edf 99%)',
  PRIMARY_LINEAR_SUCCESS: 'linear-gradient(to right, #84d9d2, #07cdae)',
  BOX_SHADOW_MAIN: 'rgb(163 93 255 / 35%) 0px 3px 8.3px 0.7px',
  STATUS_ACTIVE: 'linear-gradient(to right, #abfcb0, #00ff26)',
  STATUS_BLOCK: 'linear-gradient(to right, #f5a2a2, #ff1f1f)',
  STATUS_INACTIVE: 'linear-gradient(to right, #fce3ab, #ffb20a)'
}

export interface IColors {
  PRIMARY_MAIN: string
  PRIMARY_MAIN_LIGHT: string
  PRIMARY_LINEAR_MAIN: string
  PRIMARY_GRAY: string
  PRIMARY_BACKGROUND: string
  BOX_SHADOW_MAIN: string
  ICON: string
  TEXT: string
  MENU_TEXT_ACTIVE: string
}

const lightColors: IColors = {
  PRIMARY_MAIN: '#FFF', // main color
  PRIMARY_MAIN_LIGHT: '#FFF',
  PRIMARY_LINEAR_MAIN: '#FFF',
  PRIMARY_GRAY: '#f2edf3',
  ICON: 'black',
  PRIMARY_BACKGROUND: '#f2edf3',
  BOX_SHADOW_MAIN: 'rgb(163 93 255 / 35%) 0px 3px 8.3px 0.7px',
  TEXT: 'black',
  MENU_TEXT_ACTIVE: '#9A55FF'
}

const purpleColors: IColors = {
  PRIMARY_MAIN: '#9A55FF', // main color
  PRIMARY_MAIN_LIGHT: '#DA8CFF',
  PRIMARY_LINEAR_MAIN: 'linear-gradient(to right, #da8cff, #9a55ff)',
  PRIMARY_GRAY: '#f2edf3',
  ICON: '#FFF',
  PRIMARY_BACKGROUND: '#f2edf3',
  BOX_SHADOW_MAIN: 'rgb(163 93 255 / 35%) 0px 3px 8.3px 0.7px',
  TEXT: '#FFF',
  MENU_TEXT_ACTIVE: '#9A55FF'
}

const dangerColors: IColors = {
  PRIMARY_MAIN: '#fe7096', // main color
  PRIMARY_MAIN_LIGHT: '#ffbf96',
  PRIMARY_LINEAR_MAIN: 'linear-gradient(to right, #ffbf96, #fe7096)',
  PRIMARY_GRAY: '#f2edf3',
  ICON: '#FFF',
  PRIMARY_BACKGROUND: '#f2edf3',
  BOX_SHADOW_MAIN: 'rgb(163 93 255 / 35%) 0px 3px 8.3px 0.7px',
  TEXT: '#FFF',
  MENU_TEXT_ACTIVE: '#fe7096'
}

export { colors, lightColors, dangerColors, purpleColors }

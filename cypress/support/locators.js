const locators = {

  LOGIN: {
    USER: 'input[name="username"]',
    PASSWORD: 'input[name="password"]',
    BTN_ENTRAR: '.btn-lg',
    EXPECT_TEXT_NOT_LOGGED: '.btn-link',
    EXPECT_TEXT_LOGGED: '.steps'
  },

  LOGOFF: {
    CLICK_USER: '#user',
    CLICK_LOGOFF: '.btn-danger',
    EXPECT_YOUR_DATA:'.title'
  }


}

export default locators;
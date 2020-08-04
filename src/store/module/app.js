export default {
  state: {
  },
  getters: {
  },
  mutations: {
    setHasReadErrorLoggerStatus (state, status = true) {
      state.hasReadErrorPage = status
    }
  },
  actions: {
    addErrorLog ({ commit, rootState }, info) {
      if (!window.location.href.includes('error_logger_page')) commit('setHasReadErrorLoggerStatus', false)
      const { user: { token, userId, userName } } = rootState
      let data = {
        ...info,
        time: Date.parse(new Date()),
        token,
        userId,
        userName
      }
      JSON.stringify(data)
      // saveErrorLogger(info).then(() => {
      //   commit('addError', data)
      // })
    }
  }
}

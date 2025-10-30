const state = {
  user: {
    name: "",
  },
};

const getters = {
  getUser(state) {
    return state.user;
  },
};

const mutations = {
  updatedUser(state, users) {
    state.user = users;
  },
};

const actions = {
  asyncUpdateUser(context, users) {
    context.commit("updatedUser", users);
  },
};


this.$store.dispatch("asyncUpdateUser", { name: 111 });

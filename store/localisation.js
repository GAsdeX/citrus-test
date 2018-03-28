export const state = () => ({
    localisation: {}
});

export const mutations = {
    setLoaclisation: function(state, data) {
        state.rotations = data;
    }
};

export const actions = {
    updateLoaclisation: function(context) {
        return axios.get('https://api.citrus.ua/shares')
                .then(function(data) {
                    context.commit('setRotations', data.data);
                 });
    }
};

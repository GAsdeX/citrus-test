var axios = require('axios');

export const state = () => ({
    rotations: {}
});

export const mutations = {
    setRotations: function(state, data) {
        state.rotations = data;
    }
};

export const getters = {
    getRotations: function(state) {
        return state.rotations.data.shares;
    },
    getRotationById: function(state) {
        let rotations = state.rotations.data.shares;
        
        return function(id) {
            return rotations.find(function(item){
                return id == item.id;
            });
        }
    }
};

export const actions = {
    updateRotations: function(context) {
        return axios.get('https://api.citrus.ua/shares')
                .then(function(data) {
                    context.commit('setRotations', data.data);
                 });
    }
};

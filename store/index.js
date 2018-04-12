import Vuex from 'vuex'
var axios = require('axios');


export const state = () => ({
    list: []
});

export const actions = {
    nuxtServerInit(store, context) {
       
        
        return Promise.all([
            store.dispatch('content/updateRotations', context),
        ]);
    }
};

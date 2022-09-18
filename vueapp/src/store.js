import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            django_data: null,
            appError: false,
            showLoader: false,

        }
    },
    getters: {

        djangoData(state) {
            return state.django_data;
        },


        appError(state) {
            return state.appError;
        },

        isLoading(state) {
            return state.showLoader;
        },

    },
    mutations: {
        loadDjangoData(state, data) {
            if (data) state.django_data = JSON.parse(data);
        },
        showError(state, data) {
            state.appError = data;
        },
        showLoader(state) {
            state.showLoader = true;
        },
        stopLoader(state) {
            state.showLoader = false;
        },


    }
});

export default store;
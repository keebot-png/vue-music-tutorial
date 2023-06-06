import { defineStore } from "pinia";

export default defineStore("modal", {
    state: () => ({
        isOpen: false,
    }),
    // getters should be added as computed properties
    getters: {
        hiddenClass(state) {
            return !state.isOpen ? 'hidden' : '';
        }
    }
});
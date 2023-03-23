class Store {
    StateTree = {}
    GetterTree = {}
    MutationTree = {}
    ActionTree = {}

    constructor({state, getters, mutations, actions, beforeMutation = () => {}}) {
        this.StateTree = state
        this.GetterTree = getters
        this.MutationTree = mutations
        this.ActionTree = actions
        this.beforeMutation = beforeMutation
    }

    async commit(MUTATION, params = {}) {
        console.log(MUTATION, params)

        try {
            await this.beforeMutation(MUTATION)

            this.MutationTree[MUTATION](this.StateTree, params)
        } catch (e) {
            console.log(e)
        }
    }

    get getters() {
        const getters = {}

        for (let getter in this.GetterTree) {
            getters[getter] = this.GetterTree[getter](this.StateTree)
        }

        return getters
    }

    async dispatch(func, params) {
        try {
            return this.ActionTree[func]({
                state: this.StateTree,
                getters: this.getters,
                commit: this.commit.bind(this),
            }, params)
        } catch (e) {
            console.log(e)
        }
    }
}

export default Store
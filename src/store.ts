import { createStore } from 'vuex'

export type State = { count: number }

export const store = createStore({
  state() {
    return {
      count: 1
    } as State
  }
})
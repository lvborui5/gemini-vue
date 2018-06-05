import * as types from './mutation-types'
import * as fields from './storage-fields'
import localStorage from '../core/storage/local-storage'

const mutations = {
  [types.SET_TEST] (state, newVal) {
    state.test = newVal
    localStorage.save(fields.STRONGE_TEST_KEY, newVal)
  }
}

export default mutations

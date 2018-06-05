import * as fields from './storage-fields'
import localStorage from '../core/storage/local-storage'

const state = {
  test: localStorage.get(fields.STRONGE_TEST_KEY) || 'test'
}

export default state

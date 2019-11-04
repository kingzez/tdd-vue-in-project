import mutations from '@/store/mutations'
import initialState from '@/store/state'
import user from './fixtures/user'

describe('mustations', () => {
  let state

  beforeEach(() => {
    state = { ...initialState }
  })

  test('set new user', () => {
    const expectedUser = user

    // act
    mutations.SET_USER(state, expectedUser)

    // assert
    expect(state.user).toEqual(expectedUser)
    expect(state.user).not.toBe(expectedUser)
  })
})
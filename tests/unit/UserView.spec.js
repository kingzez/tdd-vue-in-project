jest.mock('@/store/actions')
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import UserView from '@/views/UserView'
import UserSearchForm from '@/components/UserSearchForm'
import UserProfile from '@/components/UserProfile'
import initialState from '@/store/state'
import actions from '@/store/actions'
import userFixtures from './fixtures/user'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('UserView', () => {
  let state

  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({
        state,
        actions
      })
    })

    return {
      wrapper,
      userSearchForm: () => wrapper.find(UserSearchForm),
      userProfile: () => wrapper.find(UserProfile)
    }
  }

  beforeEach(() => {
    jest.resetAllMocks()
    state = { ...initialState }
  })

  // render the component
  test('render the component', () => {
    // arrange
    const { wrapper } = build()

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })

  // render main child components
  test('render main child components', () => {
    const { userSearchForm, userProfile } = build()

    expect(userSearchForm().exists()).toBe(true)
    expect(userProfile().exists()).toBe(true)
  })

  // passes a bined user prop to user profile component
  test('passes a bined user prop to user profile component', () => {
    state.user = userFixtures
    const { userProfile } = build()

    expect(userProfile().vm.user).toBe(state.user)
  })

  test('searches for a user when received "submitted"', () => {
    // arrange
    const expectedUser = 'kuroski'
    const { userSearchForm } = build()

    // act
    userSearchForm().vm.$emit('submitted', expectedUser)

    // assert
    expect(actions.SEARCH_USER).toHaveBeenCalled()
    expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({
      username: expectedUser
    })
  })
})

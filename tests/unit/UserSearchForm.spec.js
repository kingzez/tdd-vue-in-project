import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import ElementUI from 'element-ui'
import UserSearchForm from '@/components/UserSearchForm'

const localVue = createLocalVue()
localVue.use(ElementUI)

describe('UserSearchForm', () => {
  const build = () => {
    const options = { localVue }
    const wrapper = shallowMount(UserSearchForm, options)
    const wrapperMounted = mount(UserSearchForm, options)

    return {
      wrapper,
      wrapperMounted,
      input: () => wrapper.find('.search-form__input'),
      inputMounted: () => wrapperMounted.find('input'),
      button: () => wrapperMounted.find('.search-form__button')
    }
  }

  test('render the component', () => {
    // arrange
    const { wrapper } = build()

    // assert
    expect(wrapper.html()).toMatchSnapshot()
  })


  test('render main child components', () => {
    const { input, button } = build()

    expect(input().exists()).toBe(true)
    expect(button().exists()).toBe(true)
  })

  test('call "submitted" event when submitting form', () => {
    // arrange
    const expectedUser = 'kingzez'
    const { wrapperMounted, inputMounted, button } = build()
    inputMounted().element.value = expectedUser

    // act
    inputMounted().trigger('input')
    button().trigger('click')
    button().trigger('submit')

    // assert
    expect(wrapperMounted.emitted().submitted[0]).toEqual([expectedUser])
  })
})

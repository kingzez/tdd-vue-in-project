import flushPromises from 'flush-promises'
import nock from 'nock'
import api from '@/api'
import userFixture from './fixtures/user'

describe('api', () => {
  test('search for the user', async () => {
    const expectedUser = 'kingzez'

    const request = nock('https://api.github.com')
      .get(`/users/${expectedUser}`)
      .reply(200, userFixture)

    // act
    const result = await api.searchUser(expectedUser)
    await flushPromises()

    // assert
    expect(result).toEqual(userFixture)
    expect(request.isDone()).toBe(true)
  })
})
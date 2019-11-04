import userFixture from '../../../tests/unit/fixtures/user'

export default {
  // eslint-disable-next-line no-undef
  SEARCH_USER: jest.fn().mockResolvedValue(userFixture)
}
import { formatJobList, formatQueryParams } from './'

describe('The formatJobList function', () => {
  it('should add a comma to a word', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })

  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

describe('la fonction formatQueryParams', () => {
  it('should add & starting from the second element of the answers', () => {
    const answers = { 1: 'oui', 2: 'non' }
    const expectedState = 'a1=oui&a2=non'
    expect(formatQueryParams(answers)).toEqual(expectedState)
  })

  it('should not add a & to the first answer', () => {
    const answers = { 1: 'oui' }
    const expectedState = 'a1=oui'
    expect(formatQueryParams(answers)).toEqual(expectedState)
  })
})

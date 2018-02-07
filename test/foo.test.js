import { expect } from 'chai'
import { shallow } from 'vue-test-utils'
import Foo from "../foo.vue"; 

describe('Foo.vue', () => {
  it('has a root element with class foo', () => {
    const wrapper = shallow(Foo)
    expect(wrapper.is('.foo')).to.equal(true)
  })
})

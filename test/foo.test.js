import { expect } from 'chai'
import { shallow } from 'vue-test-utils'
import Foo from "../foo.vue";

describe('Foo.vue', () => {
    it('has a root element with class foo', () => {
        const wrapper = shallow(Foo);
        expect(wrapper.is('.foo')).to.equal(true);
    })

    it('has msg', () => {
        const wrapper = shallow(Foo);
        expect(wrapper.vm.msg).to.equal("Welcome to Your Vue.js App");
    })

    it('has method', () => {
        const wrapper = shallow(Foo);
        var r = wrapper.vm.$options.methods.test();
        expect(r).to.equal(2);
    })

    it('has computed', () => {
        const wrapper = shallow(Foo);
        var r = wrapper.vm.$options.computed.msg();
        expect(r).to.equal("msg123");
    })
})
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menu: [
            {
                title: 'home',
                link: '/'
            },
            {
                title: 'circular',
                link: '/post-job'
            },
            {
                title: 'contact',
                link: '/contact'
            }
        ],

        divisions: {
            type: 'division',
            title: 'বিভাগ সিলেক্ট করুন',
            items: [
                {
                    id: 1,
                    name: 'ঢাকা'
                },

                {
                    id: 2,
                    name: 'সিলেট'
                },

                {
                    id: 3,
                    name: 'চট্টগ্রাম'
                },

                {
                    id: 4,
                    name: 'রাজশাহী'
                },

                {
                    id: 5,
                    name: 'খুলনা'
                },

                {
                    id: 6,
                    name: 'বরিশাল'
                },

                {
                    id: 7,
                    name: 'রংপুর'
                },

                {
                    id: 8,
                    name: 'ময়মনসিংহ'
                }
            ]
        }
    },
    mutations: {
        addChildrenToPlace(state, payload) {
            Vue.set(payload.parent, 'children', payload.children);
        }
    },
    actions: {}
})

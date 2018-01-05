import Vue from 'vue';
import VueRouter from 'vue-router';
import base from './components/common/base';
import svgBasic from './components/svg/basic';
import canvas from './components/canvas/canvas';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    components: {
      default: base
    },
    children: [
        {
            path: '/svg',
            name: 'svgBasic',
            components: {
                default: svgBasic
            }
        },
        {
            path: '/canvas',
            name: 'canvas',
            components: {
                default: canvas
            }
        },
        {
            path: '/chapter_4',
            name: 'chapter_4',
            components: {
                default: () => import('./components/chapter_4/template')
            },
            children: [
                {
                    path: '/selection',
                    name: 'selection',
                    components: {
                        default: () => import('./components/chapter_4/selection')
                    }
                },
                {
                    path: '/dataJoin',
                    name: 'dataJoin',
                    components: {
                        default: () => import('./components/chapter_4/dataJoin')
                    }
                },
                {
                    path: '/methods',
                    name: 'methods',
                    components: {
                        default: () => import('./components/chapter_4/methods')
                    }
                },
                {
                    path: '/barChart',
                    name: 'barChart',
                    components: {
                        default: () => import('./components/chapter_4/barChart')
                    }
                }
            ]
        },
        {
            path: '/chapter_5',
            name: 'chapter_5',
            components: {
                default: () => import('./components/chapter_5/template')
            },
            children: [
                {
                    path: '/scale',
                    name: 'scale',
                    components: {
                        default: () => import('./components/chapter_5/scale')
                    }
                },
                {
                    path: '/axis',
                    name: 'axis',
                    components: {
                        default: () => import('./components/chapter_5/axis')
                    }
                },{
                    path: '/scatter',
                    name: 'scatter',
                    components: {
                        default: () => import('./components/chapter_5/scatter')
                    }
                },
            ]
        },
        {
            path: '/chapter_6',
            name: 'chapter_6',
            components: {
                default: () => import('./components/chapter_6/template')
            },
            children: [
                {
                    path: '/colors',
                    name: 'colors',
                    components: {
                        default: () => import('./components/chapter_6/colors')
                    }
                },
                {
                    path: '/generators',
                    name: 'generators',
                    components: {
                        default: () => import('./components/chapter_6/generators')
                    }
                },
            ]
        },
    ]
  }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;
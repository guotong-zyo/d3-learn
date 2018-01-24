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
            path: '/selection&data',
            name: 'selection&data',
            components: {
                default: () => import('./components/selection&data/template')
            },
            children: [
                {
                    path: '/selection',
                    name: 'selection',
                    components: {
                        default: () => import('./components/selection&data/selection')
                    }
                },
                {
                    path: '/dataJoin',
                    name: 'dataJoin',
                    components: {
                        default: () => import('./components/selection&data/dataJoin')
                    }
                },
                {
                    path: '/methods',
                    name: 'methods',
                    components: {
                        default: () => import('./components/selection&data/methods')
                    }
                },
                {
                    path: '/barChart',
                    name: 'barChart',
                    components: {
                        default: () => import('./components/selection&data/barChart')
                    }
                }
            ]
        },
        {
            path: '/scale&Axis',
            name: 'scale&Axis',
            components: {
                default: () => import('./components/scale&Axis/template')
            },
            children: [
                {
                    path: '/scale',
                    name: 'scale',
                    components: {
                        default: () => import('./components/scale&Axis/scale')
                    }
                },
                {
                    path: '/axis',
                    name: 'axis',
                    components: {
                        default: () => import('./components/scale&Axis/axis')
                    }
                },{
                    path: '/scatter',
                    name: 'scatter',
                    components: {
                        default: () => import('./components/scale&Axis/scatter')
                    }
                },
            ]
        },
        {
            path: '/draw',
            name: 'draw',
            components: {
                default: () => import('./components/draw/template')
            },
            children: [
                {
                    path: '/colors',
                    name: 'colors',
                    components: {
                        default: () => import('./components/draw/colors')
                    }
                },
                {
                    path: '/line',
                    name: 'line',
                    components: {
                        default: () => import('./components/draw/line')
                    }
                },
                {
                    path: '/area',
                    name: 'area',
                    components: {
                        default: () => import('./components/draw/area')
                    }
                },
                {
                    path: '/arcs',
                    name: 'arcs',
                    components: {
                        default: () => import('./components/draw/arcs')
                    }
                },
                {
                    path: '/lineChart',
                    name: 'lineChart',
                    components: {
                        default: () => import('./components/draw/lineChart')
                    }
                },
            ]
        },
        {
            path: '/animation',
            name: 'animation',
            components: {
                default: () => import('./components/animation/template')
            },
            children: [
                {
                    path: '/transition',
                    name: 'transition',
                    components: {
                        default: () => import('./components/animation/transition')
                    }
                },
                {
                    path: '/scatter_2',
                    name: 'scatter_2',
                    components: {
                        default: () => import('./components/animation/scatter_2')
                    }
                }
            ]
        },
        {
            path: '/interaction',
            name: 'interaction',
            components: {
                default: () => import('./components/interaction/template')
            },
            children: [
                {
                    path: '/events',
                    name: 'events',
                    components: {
                        default: () => import('./components/interaction/events')
                    }
                },
                {
                    path: '/drag',
                    name: 'drag',
                    components: {
                        default: () => import('./components/interaction/drag')
                    }
                },
                {
                    path: '/zoom',
                    name: 'zoom',
                    components: {
                        default: () => import('./components/interaction/zoom')
                    }
                }
            ]
        },
        {
            path: '/layout',
            name: 'layout',
            components: {
                default: () => import('./components/layout/template')
            },
            children: [
                {
                    path: '/pie',
                    name: 'pie',
                    components: {
                        default: () => import('./components/layout/pie')
                    }
                }
            ]
        }
    ]
  }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;
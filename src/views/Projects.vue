<template>
    <div class="row m-auto text-light">
        <transition name='fade'>
            <div class='row col-12 mx-auto px-0' v-if='ready'>
                <div class="col-lg mt-lg-0 mt-4 order-lg-0 order-2 align-self-center">
                    <h1 class='text-uppercase'>{{projects[currItem].name}}</h1>
                    <div class="mt-3 text-muted">
                        <p>{{projects[currItem].task}}</p>
                    </div>
                    <a target="_blank" v-if='projects[currItem].url' :href="projects[currItem].url">СМОТРЕТЬ САЙТ <span class='arrow-navigation'>&rarr;</span></a>
                    <a target="_blank" v-if='projects[currItem].url_code' :class='{"ml-4": projects[currItem].url}' :href="projects[currItem].url_code">СМОТРЕТЬ КОД</a>
                </div>
                <div class="d-flex col-lg fake-box">
                    <div class="m-auto">
                        <img v-if='projects[currItem].img' class='img-fluid us-none' :src="projects[currItem].img" alt="">
                        <h2 v-else class='display-3 font-weight-bold'>GitHub</h2>
                    </div>
                </div>
            </div>
        </transition>
        <div class="col-12 py-lg-0 py-2 us-none order-lg-0 order-2 mt-4">
            <button @click='prev' :disabled='currItem === 0' class='text-light cursor-pointer arrow-navigation mr-3'>&larr; </button>
            <span class='text-uppercase'>{{currItem+1}} / {{projects.length}}</span>
            <button @click='next' :disabled='currItem === projects.length-1' class='text-light cursor-pointer arrow-navigation ml-3'> &rarr;</button>
        </div>
    </div>
</template>

<script>
    import controff from '@/assets/controff.png'
    import autobarius from '@/assets/autobarius.png'
    import techolab from '@/assets/techolab.png'

    export default {
        name: 'Projects',
        data: () => ({
            currItem: 0,
            ready: true,
            projects: [
                {
                    name: 'UpWin',
                    task: 'Игра, где ты сам выбираешь шанс выигрыша и ловишь удачу. Подключена база данных Firebase, логика приложения создана с помощью Vue и Vuex. Верстка интерфейса - Bootstrap 4',
                    img: 'https://github.com/Rouzy777/Upwin/raw/master/src/demo/demo.png?raw=true',
                    url: 'http://host1741643.hostland.pro',
                    url_code: 'https://github.com/Rouzy777/Upwin'
                },
                {
                    name: 'Autobarius',
                    task: 'Лендинг для стартапа Autobarius. Дизайн придуман лично мной, адаптивная верстка выполнена с помощью Bootstrap 4',
                    img: autobarius,
                    url: 'https://rouzy777.github.io/Autobarius',
                    url_code: 'https://github.com/Rouzy777/Autobarius'
                },
                {
                    name: 'Covid Monitor',
                    task: 'SPA приложение для мониторинга статуса COVID-19 в мире. Данные на клиент подтягиваются через REST API. Верстка интерфейса - Bootstrap 4, функциональность - Vue',
                    img: 'https://github.com/Rouzy777/covid-monitor/raw/master/demo/demo.png?raw=true',
                    url: '',
                    url_code: 'https://github.com/Rouzy777/covid-monitor'
                },
                {
                    name: 'Controff',
                    task: 'Лендинг для стартапа Controff. Также есть личный кабинет, сделанный на Vue, функциональность можно посмотреть на видео во 2 блоке этого лендинга. Без backend части он не работает, поэтому на хостинге его нет. Весь дизайн придуман лично мной, верстка - Bootstrap 4',
                    img: controff,
                    url: 'https://rouzy777.github.io/Controff',
                    url_code: 'https://github.com/rouzy777/controff'
                },
                {
                    name: 'Vue Chat',
                    task: 'Чат на Vue. Backend часть была реализована с помощью NodeJS (express) и socket.io. Есть возможность использования emoji в сообщении. Верстка выполнена с Bootstrap 4',
                    img: 'https://github.com/Rouzy777/vue-chat/raw/master/client/src/demo/demo.png',
                    url: '',
                    url_code: 'https://github.com/Rouzy777/vue-chat'
                },
                {
                    name: 'Techolab',
                    task: 'Сайт для стартапа Techolab. Второй блок реализован с помощью jQuery, слайдер и верстка - Bootstrap 4. Дизайн придуман мной',
                    img: techolab,
                    url: 'https://rouzy777.github.io/Techolab',
                    url_code: 'https://github.com/Rouzy777/techolab'
                },
                {
                    name: 'Остальные проекты',
                    task: 'Это были не все мои проекты. Большинство проектов выкладываю к себе в github профиль, так что добро пожаловать :)',
                    img: '',
                    url: 'https://github.com/Rouzy777',
                    url_code: ''
                }
            ]
        }),
        methods: {
            next() {
                this.ready = false;
                this.currItem++;
                let max = this.projects.length - 1;

                if(this.currItem > max) {
                    this.currItem = 0;
                }

                setTimeout(() => {
                    this.ready = true
                }, 300)
            },
            prev() {
                this.ready = false;
                this.currItem--;

                setTimeout(() => {
                    this.ready = true
                }, 300)
            }
        }
    }
</script>

<style media="screen">
    .arrow-navigation {
        font-size: 25px;
        padding: 0;
        border: 0;
        background: transparent;
    }

    .arrow-navigation:focus {
        outline: none;
    }

    .arrow-navigation:disabled {
        color: rgba(255,255,255, 0.3) !important;
    }

    .fake-box {
        width: 510px;
        height: 318px;
    }

    @media screen and (max-width: 540px) {
        .fake-box {
            height: auto;
        }
    }
</style>

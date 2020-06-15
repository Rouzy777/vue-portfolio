<template>
    <div class='d-flex stop-scroll flex-column bg-black'>
        <transition name='fade'>
            <div v-if='isOpen' class="d-flex min-vh-100 bg-black popup-menu">
                <div class="m-auto text-center">
                    <router-link
                        tag='h2'
                        class='link link-muted my-3 text-uppercase cursor-pointer'
                        active-class="text-light"
                        v-for='link in links'
                        @click.native='isOpen = false'
                        :to='link.url'
                        :key='link.name'
                        exact
                    >
                        {{link.name}}
                    </router-link>
                </div>
            </div>
        </transition>
        <nav class='navbar m-2 pt-3'>
            <div @click='toggle' :class='{"open": isOpen}' class="nav-icon show-on-popup cursor-pointer">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        <router-view v-if='!isOpen' class='container'/>
        <div class='m-auto' v-else><!-- SPACER FOR CORRECT FOOTER VIEW --></div>
        <footer class='row mx-auto text-muted show-on-popup pb-3 col-12'>
            <div class="col-6 d-lg-block d-none">
                <a>{{ currentRouteName }}</a>
            </div>
            <div class="col-lg-6 col-12 text-lg-right text-center">
                <a target="_blank" href="https://github.com/rouzy777">github</a>
                <a target="_blank" href="https://t.me/rouzy312" class='ml-3'>telegram</a>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data: () => ({
            links: [
                {
                    url: '/',
                    name: 'Главная'
                },
                {
                    url: '/about',
                    name: 'О себе'
                },
                {
                    url: '/skills',
                    name: 'Навыки'
                },
                {
                    url: '/projects',
                    name: 'Проекты'
                },
                {
                    url: '/contact',
                    name: 'Контакты'
                }
            ],
            isOpen: false
        }),
        computed: {
            currentRouteName() {
                return this.$route.name == "Home" ? "aleksandr32al32@gmail.com" : this.$route.name
            }
        },
        methods: {
            toggle() {
                this.isOpen = !this.isOpen
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap');

    * {
        font-family: IBM Plex Mono
    }

    h1 {
        font-size: calc(22.5px + 16 * ((100vw - 320px) / (1280 - 320))) !important;
    }

    .stop-scroll {
        min-height: 100vh;
        min-height: -moz-available;
        min-height: -webkit-fill-available;
    }

    .bg-black {
        background-color: #0E0E0E;
    }

    .link:hover {
        color: #f8f9fa !important;
    }

    .us-none {
        user-select: none;
    }

    .link-muted {
        color: #6c757d;
    }

    .show-on-popup {
        z-index: 3;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .popup-menu {
        position: absolute;
        width: 100%;
        z-index: 2;
    }

    .nav-icon {
        width: 50px;
        height: 45px;
        position: relative;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
    }

    .nav-icon span {
        display: block;
        position: absolute;
        height: 5px;
        width: 100%;
        background: white;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    .nav-icon span:nth-child(1) {
        top: 0px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    .nav-icon span:nth-child(2) {
        top: 18px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    .nav-icon span:nth-child(3) {
        top: 36px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    .nav-icon.open span:nth-child(1) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        top: 0px;
        left: 8px;
    }

    .nav-icon.open span:nth-child(2) {
        width: 0%;
        opacity: 0;
    }

    .nav-icon.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: 35px;
        left: 8px;
    }
</style>

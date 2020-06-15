<template>
    <div class="m-auto text-light">
        <h1 class='text-uppercase'>Мои навыки</h1>
        <div class="row mt-3">
            <div class="col-lg">
                <h4>Frontend: </h4>
                <ul class='col-12 dashed'>
                    <li>Vue, Vuex, Vue-router</li>
                    <li>JavaScript (ES6+), HTML5, CSS3</li>
                    <li>Bootstrap 4, jQuery</li>
                    <li>Создание SPA, CRM приложений</li>
                    <li>Адаптивная и кроссбраузерная верстка</li>
                </ul>
            </div>
            <div class="col-lg my-lg-0 my-3">
                <h4>Backend: </h4>
                <ul class='col-12 dashed'>
                    <li>NodeJS, Express</li>
                    <li>WebSocket, socket.io</li>
                    <li>Работал с PHP / Firebase</li>
                    <li>Немного работал с SQL / EJS</li>
                </ul>
            </div>
            <div class="col-lg">
                <h4>Other: </h4>
                <ul class='col-12 dashed'>
                    <li>Git, GitHub</li>
                    <li>Webpack, NPM</li>
                    <li>Photoshop, Figma</li>
                    <li>JSON REST Api</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style media="screen">
    ul {
        margin: 0;
    }
    ul.dashed {
        list-style-type: none;
    }

    ul.dashed > li {
        margin: 5px 0;
    }

    ul.dashed > li:before {
        content: "📌 ";
    }
</style>

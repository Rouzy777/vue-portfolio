<template>
    <div class="row m-auto text-light">
        <div class="align-self-center col-lg-7 col-12">
            <h6 class='text-muted'>&lt;HELLO WORLD&gt;</h6>
            <h1>Александр Харченко</h1>
            <h1>Frontend developer</h1>
            <router-link
                tag='button'
                class='btn-contact us-none mt-3 px-3 py-2'
                to='/contact'>
                СВЯЗАТЬСЯ
            </router-link>
        </div>
        <div class="col-lg-5 col-12 text-center d-lg-block d-none">
            <span class='font-weight-bold us-none char-code'>&lt;/&gt;</span>
        </div>
    </div>
</template>

<style media="screen">
    .char-code {
        font-size: 200px;
    }

    .btn-contact {
        border: 1px solid white;
        border-radius: 0;
        background: transparent;
        color: white;
        transition: 300ms;
    }

    .btn-contact:hover {
        background: white;
        color: black;
    }
</style>

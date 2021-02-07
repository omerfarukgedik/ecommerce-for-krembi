<template>
    <div class="d-flex flex-lg-column">
        <nuxt-link to="/"> Anasayfa </nuxt-link>

        <nuxt-link to="/"> Anasayfa  </nuxt-link>

        <nuxt-link to="/"> Anasayfa </nuxt-link>
    </div>
</template>

<style scoped>
    a {
        width: 100%;
        background: #ddd;
        padding: .6rem;
        text-align: center;
        margin-bottom: 10px;
    }

    a:last-child {
        margin-bottom: 0px; 
    }

    @media (max-width: 991px) {
        a {
            margin-bottom: 0px;
            margin-right: 10px;
        }

        a:last-child {
            margin-right: 0px;
        }
    }
    

</style>
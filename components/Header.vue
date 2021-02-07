<template>
    <header>
        <img src="~/assets/images/logo.png" />
    </header>
</template>

<style scoped>
    header {
        background: #f8f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        border-bottom: 1px dashed #ddd;
    }

    header img {
        height: 32px;
        width: 137px;
    }

    @media (max-width: 991px) {
        header {
            height: 100px;
        }
    }
</style>
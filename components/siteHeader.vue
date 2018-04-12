<template>
    <b-nav>
        <b-nav-item active v-if="offerPage" :to="{name: 'index'}">Обратно</b-nav-item>
        
        <b-nav-item active>Об авторе</b-nav-item>
    </b-nav>
</template>

<script>
    export default {
    	props: ['offerPage'],
        data : function() {
            return {
                message: "fff"
            }
        }
    }
</script>

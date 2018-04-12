<template>
    <div class="container">
        <div class="rotation-content" v-if="rotation">
            <site-header offerPage="true"/>
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <b-img :src="rotation.images.full.url" fluid alt="Responsive image" />
                        <h5 class="my-3" v-text="rotation.title"></h5>
                
                    </div>
                    <div class="col-md-5">
                        <p v-text="dateFrom"></p>
                        <p v-text="dateTo"></p>
                    </div>
            
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="content">
                            <p v-html="rotation.content.full    "></p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import siteHeader from '~/components/siteHeader.vue'
    
	export default {
		data : function() {
			return {
				message: "fff",
                products: null
			}
		},
        computed: {
			rotation: function() {
				return this.$store.getters['content/getRotationById'](this.$route.params.id);
            },
	        dateFrom: function() {
		        let date = new Date(this.rotation.active_from);
		        date = date.toString("MM yyyy");
		
		        return date;
	        },
	        dateTo: function() {
		        let date = new Date(this.rotation.active_to);
		        date = date.toString("MM yyyy");
		
		        return date;
	        }
        },
        components: {
			'site-header' : siteHeader
        }
	}
</script>

<style>
    .rotation-content {
        /*padding-top: 50px;*/
    }
</style>
<template>
    <b-card :title="data.title"
            :img-src="data.images.preview.url"
            img-top>
      <p class="card-text" v-text="data.content.preview"></p>
      
      <router-link :to="/rotation/ + data.id">
          <b-button variant="primary">Узнать больше</b-button>
      </router-link>
      <div slot="footer">
          <div>
              <small class="text-muted" v-text="dateFrom"></small>
          </div>
          <div>
              <small class="text-muted" v-text="dateTo"></small>
          </div>
      </div>
    </b-card>
  
</template>

<script>
    export default {
        props : ['data'],
        computed: {
        	dateFrom: function() {
		        let date = new Date(this.data.active_from);
		        date = date.toString("MM yyyy");
		
		        return date;
            },
            dateTo: function() {
        		let date = new Date(this.data.active_to);
                date = date.toString("MM yyyy");
        		
	            return date;
            }
        }
    }
</script>

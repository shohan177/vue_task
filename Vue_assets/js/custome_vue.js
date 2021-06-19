let root = new Vue({
    el:'#root',
    data:{
        variations:[],
        products:[],
        combination:{
            Storage: '3480',
            Color: '3483',
            Sim: '3487',
            Region: '3489'
        }
        
    },
    methods: {
       

        /**
         * get all atribute 
         */
        getAllAtribute: function(){
            axios.get('https://raw.githubusercontent.com/qtecsolution/Sample-JSON/main/combination.json').then(function(response){
                root.variations = response.data;

            });
        },
        /**
         * get all products
         */
        getAllProduct: function(){
            
            axios.get('https://raw.githubusercontent.com/qtecsolution/Sample-JSON/main/variation.json').then(function(response){

                

                for (let i = 0; i < response.data.length; i++) {
                    if(response.data[i].attribute_combination[0] == root.combination.Storage && response.data[i].attribute_combination[1] == root.combination.Color && response.data[i].attribute_combination[2] == root.combination.Sim && response.data[i].attribute_combination[3] == 3490)
                    root.products = response.data[i];
                    console.log(response.data[i]);
                  }
                
                

            });
        }

        
    },
    created: function() {
      
        this.getAllProduct();
        this.getAllAtribute();
    },
})
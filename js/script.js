new Vue({
 el: '#app',
 data:{


      opening:{
        openingTime:'Open Hours Mon-Sat-9:00-18:00',
        icon:'fas fa-clock',
      },


       commonProperties:[
        {
           icon:'fas fa-phone',
           name: '1(305) 1234-5678'
         },

         {
           icon:'fas fa-envelope',
           name: 'hello@example.com'
         },

         {
           icon:'fab fa-facebook-f'
         },

         {
           icon:'fab fa-twitter'
         },

         {
           icon:'fab fa-linkedin-in'
         },



       ],


       jumbotronLogo:
         {
           logoFirst:'NEX',
           logoSecond:'GEN',

         },




       jumbotron:[
            {
             prop:'HOME',

           },

           {
             prop:'ABOUT',

           },

           {
             prop:'SERVICES',

           },

           {
             prop:'PRICING',

           },

           {
             prop:'BLOG',

           },
         ],

         getInTouchBtn:{
          name:'GET IN TOUCH'
         },




     footerProperties:[{
       about:{
         ciao:'ciao',
         arr: 'arr',
       },

       services:{
         miao: 'miao',
         bau: 'bau'
       }
     }],
























 },
});
Vue.config.devtools = true;

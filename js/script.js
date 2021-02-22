new Vue({
 el: '#app',
 data:{

      // Orario di apertura header
      opening:{
        openingTime:'Open Hours Mon-Sat-9:00-18:00',
        icon:'fas fa-clock',
      },

      // Proprietà comuni header footer
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

         {
           name:'Main Avenue, 987',
           addressIcon: 'fas fa-map-marker-alt'
         },


       ],


      // descrizione footer


       // logo jumbotron
       jumbotronLogo:
         {
           logoFirst:'NEX',
           logoSecond:'GEN',

         },



         // parte del jumbotron
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

         // bottone get in touch
         getInTouchBtn:{
          name:'GET IN TOUCH'
         },

         footContacts:[
           {
             icon: 'fas fa-phone',
             name: '+1(305)1234-5678'
           },

           {
             icon:'fas fa-envelope',
             name:'hello@example.com'
           },

           {
             icon: 'fas fa-map-marker-alt',
             name: 'Main Avenue,987'
           }
         ],

         footerDescription:{
           footDesc:'A functional HTML Template for Corporate & Business.',
         } ,




      // Proprietà footer

      footerAbout:[

      {
        name: 'About'
      },


      {
        icon:'fas fa-chevron-right',
        name:'The Company'
      },

      {
        icon:'fas fa-chevron-right',
        name:'Institutional'
      },

      {
        icon:'fas fa-chevron-right',
        name:'Social & Events'
      },

      {
        icon:'fas fa-chevron-right',
        name:'Innovation'
      },

      {
        icon:'fas fa-chevron-right',
        name:'Environment'
      },

      {
        icon:'fas fa-chevron-right',
        name:'Technology'
      },


    ]







   },
});
Vue.config.devtools = true;

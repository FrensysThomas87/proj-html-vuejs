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

        //Contatti footer
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


    ],


    footerServices:[

    {
      name: 'Services'
    },


    {
      icon:'fas fa-chevron-right',
      name:'Audit & Assurance'
    },

    {
      icon:'fas fa-chevron-right',
      name:'Financial Advisory'
    },

    {
      icon:'fas fa-chevron-right',
      name:'Analytics M&A'
    },

    {
      icon:'fas fa-chevron-right',
      name:'Middle Marketing'
    },

    {
      icon:'fas fa-chevron-right',
      name:'Legal Consulting'
    },

    {
      icon:'fas fa-chevron-right',
      name:'Regulatory Risk'
    },


  ],


  footerSupport:[

  {
    name: 'Support'
  },


  {
    icon:'fas fa-chevron-right',
    name:'Responsability'
  },

  {
    icon:'fas fa-chevron-right',
    name:'Terms of Use'
  },

  {
    icon:'fas fa-chevron-right',
    name:'About Cookies'
  },

  {
    icon:'fas fa-chevron-right',
    name:'Privacy Policy'
  },

  {
    icon:'fas fa-chevron-right',
    name:'Accessibility'
  },

  {
    icon:'fas fa-chevron-right',
    name:'Information'
  },

],

footerCopyrightFirst: 'Enjoy the low price. We are tracking any intention of piracy.',

footerCopyrightSecond: '2020 NEXGEN is Proudly Powered by ',

codings: 'Codings.',

// Proprietà Footer

  },
});
Vue.config.devtools = true;

new Vue({
 el: '#app',
 data:{
   commonProperties:
     {
       clockIcon:'fas fa-clock',
       openingTime: 'Open Hours Mon-Sat-9:00-18:00',
       telephoneIcon:'fas fa-phone',
       telephoneNumber: '+1(305) 1234-5678',
       messageIcon:'fas fa-envelope',
       mailAdress:'hello@example.com',
       facebookIcon: 'fab fa-facebook-f',
       twitterIcon:'fab fa-twitter',
       linkedinIcon:'fab fa-linkedin-in',
       mapIcon: 'fas fa-map-marker-alt',
       home: 'HOME',
       about: 'ABOUT',
       services: 'SERVICES',
       pricing: 'PRICING',
       blog: 'BLOG',
       getInTouch: 'GET IN TOUCH',
       logoFirst: 'NEX',
       logoSecond: 'GEN',
       adress: 'Main Avenue, 987',
       getInTouch: 'GET IN TOUCH'
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

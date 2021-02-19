new Vue({
 el: '#app',
 data:{
   headerNavbar:[
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
       home: 'HOME',
       about: 'ABOUT',
       services: 'SERVICES',
       pricing: 'PRICING',
       blog: 'BLOG',
       getInTouch: 'GET IN TOUCH',
       logoFirst: 'NEX',
       logoSecond: 'GEN'
     },
   ],
 },
});
Vue.config.devtools = true;

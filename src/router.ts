import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: 'Home | Your Precious Pets',
        metaTags: [
          {
            name: 'description',
            content: 'Your Precious Pets offers a low-stress, no-kennel environment with a staff boasting a combined 40 years of expertise.'
          },
          {
            property: 'og:description',
            content: 'Your Precious Pets offers a low-stress, no-kennel environment with a staff boasting a combined 40 years of expertise.'
          }
        ]
      }
    },
    {
      path: "/grooming",
      name: "grooming",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Grooming.vue"),
      meta: {
        title: 'Grooming | Your Precious Pets',
        metaTags: [
          {
            name: 'description',
            content: 'We offer different grooming options including walk-ins and discounts for scheduling. Our team will work with you to figure out what best suits your dog’s needs.'
          },
          {
            property: 'og:description',
            content: 'We offer different grooming options including walk-ins and discounts for scheduling. Our team will work with you to figure out what best suits your dog’s needs.'
          }
        ]
      }
    },
    {
      path: "/boarding",
      name: "boarding",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Boarding.vue"),
      meta: {
        title: 'Boarding and Daycare | Your Precious Pets',
        metaTags: [
          {
            name: 'description',
            content: 'Daycare is 11.99/day and boarding starts at 20.99/night with an additional 10 dollars per dog. Give us a call to schedule your stay!'
          },
          {
            property: 'og:description',
            content: 'Daycare is 11.99/day and boarding starts at 20.99/night with an additional 10 dollars per dog. Give us a call to schedule your stay!'
          }
        ]
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/Contact.vue"),
      meta: {
        title: 'Contact | Your Precious Pets',
        metaTags: [
          {
            name: 'description',
            content: 'You can reach us through phone, facebook messaging, and email. You’re also welcome to swing by the shop for more information or a tour of the facility.'
          },
          {
            property: 'og:description',
            content: 'You can reach us through phone, facebook messaging, and email. You’re also welcome to swing by the shop for more information or a tour of the facility.'
          }
        ]
      }
    }
  ],

});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode!.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map((tagDef: any) => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
    // Add the meta tags to the document head.
    .forEach((tag: any) => document.head.appendChild(tag));

  next();
});

export default router;
// All components mapping with path for internal routes

import { lazy } from 'react'
import Store from '../pages/protected/Store'
import TemplatePointers from '../features/user/components/TemplatePointers'



const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Charts = lazy(() => import('../pages/protected/Charts'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/Team'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))
const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))
const VieweAll = lazy(()=> import('../pages/protected/VieweAll/vieweall'))
const Productdetails =lazy(()=> import('../pages/protected/VieweAll/Productdetails') )
const Newitems2 = lazy (()=>import('../pages/protected/VieweAll/Newitems2'))
const Bundledetails = lazy (()=> import('../pages/protected/VieweAll/Bundledetails'))
const bundledetailes = lazy (()=> import ('../pages/protected/VieweAll/Bundledetailes'))
const Menu =lazy (()=> import('../pages/protected/VieweAll/Menu'))
const Nothing = lazy (()=> import('../pages/protected/VieweAll/Nothing'))
const Vegetables = lazy (()=> import ('../pages/protected/VieweAll/Vegetables'))
const Myprofile = lazy (()=> import ('../pages/protected/VieweAll/Myprofile'))
const Profileinput = lazy (()=> import ('../pages/protected/VieweAll/Profileinput'))
const Notification = lazy (()=> import ('../pages/protected/VieweAll/Notifiction'))
const Allorder = lazy (()=> import ('../pages/protected/VieweAll/Allorder'))
const Orderdetails = lazy (()=> import('../pages/protected/VieweAll/Orderdetails'))
const Voucher = lazy (()=> import ('../pages/protected/VieweAll/Voucher'))
const Offerdetails = lazy (()=> import ('../pages/protected/VieweAll/Offerdetails'))
const Address = lazy (()=> import('../pages/protected/VieweAll/Address'))
const Addcoupon = lazy (()=> import ('../pages/protected/VieweAll/Addcoupon'))
const Checkout = lazy (()=> import ('../pages/protected/VieweAll/Checkout'))
const Placeorder = lazy  (()=>import ('../pages/protected/VieweAll/Placeorder'))
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Store, // view rendered
  },
  {
    path: '/leads',
    component: TemplatePointers,
  },
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/settings-billing',
    component: Bills,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/features',
    component: DocFeatures,
  },
  {
    path: '/components',
    component: DocComponents,
  },
  {
    path: '/cart',
    component:  VieweAll,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path:'/Product/:id',
    component:Productdetails
   },
   {
    path:'/newitems',
    component:Newitems2
   },
   {
    path:'/bundledetails',
    component:Bundledetails
   },
   {
    path:'bundledetailes',
    component:bundledetailes
   },
   {
    path:'menu',
    component:Menu

   },
   {
    path:'nothing',
    component:Nothing
   },
   {
    path:'vege',
    component:Vegetables
   },
   {
    path:'profile',
    component:Myprofile
   },

   {
    path:'proinput',
    component:Profileinput
   },
   {
    path:'notification',
    component:Notification
   },
   {
    path:'allorder',
    component: Allorder
   },
   {

    path:'orderdetails',
    component:Orderdetails
   },
   {
    path:'voucher',
    component:Voucher
   },
   {
    path:'offerdetails',
    component:Offerdetails
   },
   {
    path:'address',
    component:Address
   },
   {
    path:'addcoupon',
    component:Addcoupon
   },
   {
    path:'checkout',
    component:Checkout
   },
   {
    path:'placeorder',
    component:Placeorder
   }
   
]

export default routes

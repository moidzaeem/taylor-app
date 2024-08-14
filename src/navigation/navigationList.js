import SplashScreen from '../screens/static/splash';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import Onboarding1 from '../screens/static/Onboarding';
import Onboarding2 from '../screens/static/Onboarding/Onboarding2';
import Onboarding3 from '../screens/static/Onboarding/Onboarding3';
import BookingScreen from '../screens/main/booking';
import BookingItem from '../screens/main/booking/ItemDetail';
import FavouriteScreen from '../screens/main/favourite';
import NotificationScreen from '../screens/main/notification';
import ProfileScreen from '../screens/main/profile';
import EditProfile from '../screens/main/EditProfile';
import AdressScreen from '../screens/main/Adress';
import PaymentScreen from '../screens/main/Payment';
import AddCard from '../screens/main/AddCard';
import HomeScreen from '../screens/main/home';
import BottomTab from './BottomTab';
import ProductDetail from '../screens/main/ProductDetail';
import CheckoutScreen from '../screens/main/checkout';
import PromoScreen from '../screens/main/promo';
import CategoryDetail from '../screens/main/CategoryDetail';
import SearchScreen from '../screens/main/Search';
export const stackNavigationList = [


  {name: 'splash', component: SplashScreen},
  {name: 'onboarding1', component: Onboarding1},
  {name: 'onboarding2', component: Onboarding2},
  {name: 'onboarding3', component: Onboarding3},
  {name: 'login', component: LoginScreen},
  {name: 'register', component: RegisterScreen},
  {name: 'home', component:BottomTab},

  {name: 'booking', component: BookingScreen},
  {name: 'bookingitem', component: BookingItem},
  {name: 'notifications', component: NotificationScreen},
  {name: 'favourite', component: FavouriteScreen},
  {name: 'EditProfile', component: EditProfile},
  {name: 'address', component:AdressScreen},
  {name: 'payment', component:PaymentScreen},
  {name: 'addcard', component:AddCard},
  {name: 'profile', component:ProfileScreen },
  {name: 'productdetail', component:ProductDetail },

  {name: 'checkout', component:CheckoutScreen },
  {name: 'promo', component:PromoScreen },
  {name: 'categorydetail', component:CategoryDetail },
  {name: 'search', component:SearchScreen },


];

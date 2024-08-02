import SplashScreen from '../screens/static/splash';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';

export const stackNavigationList = [
  {name: 'register', component: RegisterScreen},

  {name: 'splash', component: SplashScreen},
  {name: 'login', component: LoginScreen},
 


];

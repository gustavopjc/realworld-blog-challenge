import { NavigationGuardNext, Route } from 'vue-router';
import store from '@/store';

/**
 * TODO Este evento é responsável por verificar o controle de autenticação
 * na transição de páginas
 * @param {*} to
 * @param {*} from
 * @param {*} next
 */
const beforeEach = (to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
  const user = store.state.Auth.currentUser;
  // Verifica se a rota requer autenticação
  if (to.meta.requiresAuth && !user) {
    console.log('1');
    next('/login');
    // Se o usuário estiver logado e tentar ir para a página de login ele vai
    // ser direcionado para página inicial
  } else if (['login', 'register'].includes(to.name) && Object.keys(user).length !== 0) {
    // ? Checando role de usuário para redirecionamento
    console.log(user);
    next('/');
  } else {
    console.log('3');
    next();
  }
};

export default beforeEach;

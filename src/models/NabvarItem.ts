export interface NavbarItem {
  name: string,
  routerName: string,
  showIn: 'all' | 'onlyAuthenticated' | 'onlyUnauthenticated',
};

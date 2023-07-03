export type NavBarIcon = {
  svgIcon: string;
  route: string;
}

export const NAVBAR_ITEMS: Array<NavBarIcon> = [
  {
    svgIcon: 'home',
    route: '/home'
  },
  {
    svgIcon: 'explore',
    route: '/explore'
  },
  {
    svgIcon: 'fire',
    route: '/match'
  }
]
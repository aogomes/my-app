import { Route } from '@vaadin/router';
import './views/helloworld/hello-world-view';
import './views/main-layout';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
  {
    path: '',
    component: 'hello-world-view',
    icon: '',
    title: '',
  },
  {
    path: 'hello',
    component: 'hello-world-view',
    icon: 'la la-globe',
    title: 'Hello World',
  },
  {
    path: 'about',
    component: 'about-view',
    icon: 'la la-file',
    title: 'About',
    action: async (_context, _command) => {
      await import('./views/about/about-view');
      return;
    },
  },
  {
    path: 'credit-card-form',
    component: 'credit-card-form-view',
    icon: '',
    title: 'Credit Card Form',
    action: async (_context, _command) => {
      await import('./views/creditcardform/credit-card-form-view');
      return;
    },
  },
  {
    path: 'master-detail',
    component: 'master-detail-view',
    icon: 'la la-columns',
    title: 'Master-Detail',
    action: async (_context, _command) => {
      await import('./views/masterdetail/master-detail-view');
      return;
    },
  },
  {
    path: 'checkout-form',
    component: 'checkout-form-view',
    icon: '',
    title: 'Checkout Form',
    action: async (_context, _command) => {
      await import('./views/checkoutform/checkout-form-view');
      return;
    },
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: [...views],
  },
];

import HomePage from './HomePage';
import CategoryPage from './CategoryPage';

export default [
  { path: '/', exact: true, component: HomePage },
  { path: '/browse/:category', component: CategoryPage }
];
import {
  ArchiveBoxIcon,
  UserGroupIcon,
  ArrowRightOnRectangleIcon,
  TruckIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';
import { Janitors, Collectors, MCPs } from '@/pages/dashboard';
import { SignIn, SignUp } from '@/pages/auth';

const icon = {
  className: 'w-5 h-5 text-inherit',
};

export const routes = [
  {
    layout: 'dashboard',
    pages: [
      {
        icon: <UserGroupIcon {...icon} />,
        name: 'Janitors',
        path: '/janitors',
        element: <Janitors />,
      },
      {
        icon: <TruckIcon {...icon} />,
        name: 'Collectors',
        path: '/collectors',
        element: <Collectors />,
      },
      {
        icon: <ArchiveBoxIcon {...icon} />,
        name: 'MCPs',
        path: '/mcps',
        element: <MCPs />,
      },
    ],
  },
  {
    title: 'auth pages',
    layout: 'auth',
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: 'sign in',
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: 'sign up',
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
];

export default routes;

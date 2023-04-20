// import {
//   Card,
//   CardBody,
//   CardHeader,
//   CardFooter,
//   Avatar,
//   Typography,
//   Tabs,
//   TabsHeader,
//   Tab,
//   Switch,
//   Tooltip,
//   Button,
// } from '@material-tailwind/react';
// import {
//   HomeIcon,
//   ChatBubbleLeftEllipsisIcon,
//   Cog6ToothIcon,
//   PencilIcon,
// } from '@heroicons/react/24/solid';
// import { Link } from 'react-router-dom';
// import { ProfileInfoCard, MessageCard } from '@/widgets/cards';
// import { platformSettingsData, conversationsData, projectsData } from '@/data';
import CrudCollectors from './crudComponents/CrudCollectors';

export function Collectors() {
  return (
    <div className="mt-12">
      <CrudCollectors />
    </div>
  );
}

export default Collectors;

import React from 'react';
import CrudJanitors from './crudComponents/CrudJanitors';
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   IconButton,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Avatar,
//   Tooltip,
//   Progress,
// } from '@material-tailwind/react';
// import {
//   ClockIcon,
//   CheckIcon,
//   EllipsisVerticalIcon,
//   ArrowUpIcon,
// } from '@heroicons/react/24/outline';
// import { StatisticsCard } from '@/widgets/cards';
// import { StatisticsChart } from '@/widgets/charts';
// import {
//   statisticsCardsData,
//   statisticsChartsData,
//   projectsTableData,
//   ordersOverviewData,
// } from '@/data';

{
  /*DON'T TOUCH TO ANY IMPORT THINGS THAT I COMMENTED ABOVE*/
}

export function Janitors() {
  return (
    <div className="mt-12">
      <CrudJanitors />
    </div>
  );
}

export default Janitors;

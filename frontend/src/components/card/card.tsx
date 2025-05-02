import { ArrowDownIcon, ArrowUpIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';
import type { JSX, SVGProps } from "react";

type PropsType = {
    label: string;
    data: {
      value: number | string;
      growthRate: number;
    };
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  };
  
export default function OverviewCard({label, data, Icon}: PropsType) {
    const isDecreasing = data.growthRate < 0;
    
    return(
        <div className='rounded-lg bg-white p-6 shadow-md'>
          <Icon />

          <div className='mt-6 flex items-end justify-between'>
            <dl>
              <dt className='mb-1.5 text-lg font-bold text-gray-900'>
                {data.value}
              </dt>
              <dd className='text-sm font-medium text-gray-500'>{label}</dd>
            </dl>

            <dl>
              <dt className={cn(
                "text-sm font-medium",
                isDecreasing ? "text-red-500" : "text-green-500",
              )}>
                {data.growthRate}%
                {isDecreasing ? (<ArrowDownIcon />) : (<ArrowUpIcon />)}
              </dt>
              <dd className='sr-only'> {label} {isDecreasing ? "Decreased" : "Increased"} by {" "} {data.growthRate}% </dd>
            </dl>
          </div>
        </div>
    )
}
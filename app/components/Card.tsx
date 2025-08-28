import { LucideIcon } from "lucide-react"

type CardProps = {
  title: string,
  num: string,
  icon: LucideIcon,
  growth: number,
  
}

export function Card({title, num, icon: Icon, growth}: CardProps) {
  const isPositive = growth >= 0 ;
  const growthColor =  isPositive ? 'bg-green-500' : 'bg-red-500'
  return (
    <div className="glass-card rounded-xl  p-4 max-w-screen-md ">
         <Icon className="text-white" />
          <p className="text-white">{title}</p>
          <div className="flex justify-between">
          <h3 className="text-xl text-white">{num}</h3>
          <p className={`text-md font-semibold flex rounded-xl px-2 ${growthColor
          }`}>{growth}%</p>
          </div>
    </div>
  )
}


import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { BanknoteArrowUp, Landmark, ThumbsUp, UserRound, UsersRound } from "lucide-react";
import { RevenueBarChart } from "./components/BarChart";
import { TopProductsChart } from "./components/Doughnut";
import { AddProfileDialog } from "./components/AddProfileModal";

export default function page() {
  return (
    <div className=" min-w-[90vw] flex flex-col mx-auto">
    <div className="w-full justify-around flex ">
       <Header />
    </div>
      

      <div className="mt-5  grid sm:grid-cols-1  md:grid-cols-4  gap-8 max-w-screen-md md:ml-18 lg:mx-auto ml-5">
       <Card icon={BanknoteArrowUp} title="Total Revenue" num='$ 22352' growth={-5.6}/>
        <Card icon={Landmark} title="Total Transactions" num='1520' growth={+2.5}/>
         <Card icon={ThumbsUp} title="Total Likes" num='9093' growth={+2.5}/>
          <Card icon={UsersRound} title="Total Users" num='5623' growth={+2.5}/>
      </div>

      <RevenueBarChart  />

      <div className="mt-10   justify-center gap-5">
              <TopProductsChart />
              <AddProfileDialog />
      </div>

      </div>
   
  )
}


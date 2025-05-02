import { compactFormat } from "@/lib/format-number";
import { getOverviewData } from "../../app/fetch";
import { OverviewCard } from "./card";
import * as icons from "./icons";

export async function OverviewCardsGroup() {
  const { views, profit, products, users } = await getOverviewData();

  return (
    <div className="p-8 grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-8">
      <OverviewCard
        label="Total Views"
        data={{
          ...views,
          value: compactFormat(views.value),
        }}
        Icon={icons.Views}
      />

      <OverviewCard
        label="Total Profit"
        data={{
          ...profit,
          value: "$" + compactFormat(profit.value),
        }}
        Icon={icons.Profit}
      />

      <OverviewCard
        label="Total Products"
        data={{
          ...products,
          value: compactFormat(products.value),
        }}
        Icon={icons.Product}
      />

      <OverviewCard
        label="Total Users"
        data={{
          ...users,
          value: compactFormat(users.value),
        }}
        Icon={icons.Users}
      />
    </div>
  );
}

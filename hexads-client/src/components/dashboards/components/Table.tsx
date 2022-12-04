import React from "react";
import { MdCampaign } from "react-icons/md";
import { VIEWS } from "../../../constants/Views";
import useCampaigns from "../../../hooks/useCampaigns";
import useViews from "../../../hooks/useView";
import Button from "../../common/Button";

const Table = () => {
  const campaigns = useCampaigns();
  const views = useViews();
  return (
    <section className="w-full h-full px-12 pt-8 pb-12 flex items-center justify-between rounded-3xl bg-white border border-gray-200 shadow-xl">
      <section className="flex flex-col items-start justify-center gap-5 w-full">
        <span className="text-black text-3xl font-bold flex items-center gap-2">
          Your Campaigns
          <MdCampaign className="w-10 h-10" />
        </span>
        {campaigns.campaigns.length > 0 ? (
          <table className="w-full table-fixed text-center">
            <thead className="">
              <tr className="text-xl font-bold text-gray-500">
                <th className="py-3">Name</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="">
              {campaigns.campaigns.map((item: any, idx: number) => {
                return (
                  <tr key={idx} className="text-lg font-semibold">
                    <td className="py-3">{item.name}</td>
                    <td>{item.status}</td>
                    <td>{item.amount}</td>
                    <td>{item.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <section className="flex items-center justify-center flex-col gap-3 w-full py-5">
            <span className="text-xl font-semibold text-gray-500">
              You have 0 Campaigns.
            </span>
            <Button
              type="button"
              onClick={() => {
                views.goTo(VIEWS.CREATE_CAMPAIGN);
              }}>
              Create One
            </Button>
          </section>
        )}
      </section>
    </section>
  );
};

export default Table;

const TableData = [
  {
    name: "test campaign",
    status: "Active",
    amount: 55,
    date: "04/12/22",
  },
  {
    name: "TEst targets",
    status: "Active",
    amount: 30,
    date: "04/12/22",
  },
  {
    name: "Test 2",
    status: "Inactive",
    amount: 20,
    date: "03/12/22",
  },
  {
    name: "Test Campaign",
    status: "Active",
    amount: 10,
    date: "03/12/22",
  },
];

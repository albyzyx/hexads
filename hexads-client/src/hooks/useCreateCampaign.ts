import { CAMPAIGN_MANAGER_ADDRESS, XAT } from "../helpers/constants";
import { approveSpend } from "../helpers/genericWeb3Helper";
import { createAdCampignContract } from "../helpers/HexadContractHelper";
import { uploadJSONToIpfs } from "../helpers/ipfsHelper";
import useViews from "./useView";

const useCreateCampaign = () => {
  const views = useViews();

  const approveSpendHook = async () => {
    const spendTx = await approveSpend(XAT, CAMPAIGN_MANAGER_ADDRESS);
    console.log({ spendTx });
  };
  const createCampaign = async (
    campaignName: string,
    description: string,
    redirectURL: string,
    bannerURL: string,
    targetAudience: number[],
    campaignBudgetXAT: string
  ): Promise<void> => {
    const cid = await uploadJSONToIpfs({
      campaignName,
      description,
      redirectURL,
      bannerURL,
      targetAudience,
      campaignBudgetXAT,
    });
    const res = await createAdCampignContract(
      campaignName,
      cid,
      campaignBudgetXAT
    );
  };
  return { createCampaign, approveSpendHook };
};

export default useCreateCampaign;

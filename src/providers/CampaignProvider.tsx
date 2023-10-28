import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { CampainType, SubCampainAdType } from "types/campain";

type CampainContextType = {
  campaign?: CampainType;
  onChangeCampaign: (data: any) => void;
  errors?: any;
  setErrors?: any;
  onToggleSubCampaign: (index: number) => void;
  onAddSubCampain: () => void;
  onAddNewAd: (index: number) => void;
  onEditAd: (subCampaignIndex: number, adIndex: number, data: any) => void;
};
const CampaignContext = createContext<CampainContextType>({
  campaign: undefined,
  onChangeCampaign: () => null,
  onToggleSubCampaign: () => null,
  onAddSubCampain: () => null,
  onAddNewAd: () => null,
  onEditAd: () => null,
});

export const useCampaignContext = () => useContext(CampaignContext);

const initialAd = { name: "ad 1", quantity: 1 };

const initialSubCampaign = {
  name: "subCampaign ",
  status: true,
  ads: [initialAd],
};

const CampaignProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [campaign, setCampaignData] = useState<CampainType>({
    information: {
      name: "",
      describe: "",
    },
    subCampaigns: [initialSubCampaign],
  });
  const [errors, setErrors] = useState();

  const onChangeCampaign = (data: any = {}) => {
    setCampaignData({ ...campaign, ...data });
  };

  const onToggleSubCampaign = (index: number) => {
    setCampaignData({
      ...campaign,
      subCampaigns: campaign.subCampaigns.map((subcampaign, i) =>
        i === index
          ? { ...subcampaign, expanded: !subcampaign?.expanded }
          : subcampaign
      ),
    });
  };

  const onAddSubCampain = () => {
    setCampaignData({
      ...campaign,
      subCampaigns: [...campaign.subCampaigns, initialSubCampaign],
    });
  };

  const onChangeAd = (
    subCampaignIndex: number,
    updatedAds: SubCampainAdType[]
  ) => {
    setCampaignData({
      ...campaign,
      subCampaigns: campaign.subCampaigns.map((subcampaign, i) =>
        i === subCampaignIndex
          ? { ...subcampaign, ads: updatedAds }
          : subcampaign
      ),
    });
  };

  const onAddNewAd = (subCampaignIndex: number) => {
    let currentAds = campaign.subCampaigns[subCampaignIndex].ads;
    onChangeAd(subCampaignIndex, [...currentAds, initialAd]);
  };

  const onEditAd = (subCampaignIndex: number, adIndex: number, data: any) => {
    let currentAds = campaign.subCampaigns[subCampaignIndex].ads;
    onChangeAd(
      subCampaignIndex,
      currentAds.map((ad, ii) => (ii === adIndex ? { ...ad, ...data } : ad))
    );
  };

  const values = {
    campaign,
    onChangeCampaign,
    errors,
    setErrors,
    onToggleSubCampaign,
    onAddSubCampain,
    onAddNewAd,
    onEditAd,
  };
  return (
    <CampaignContext.Provider value={values}>
      {children}
    </CampaignContext.Provider>
  );
};

export default CampaignProvider;

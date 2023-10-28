export type CampainType = {
  information: {
    name: string;
    describe?: string;
  };
  subCampaigns: SubCampainType[];
};

export type SubCampainType = {
  name: string;
  status: boolean;
  ads: SubCampainAdType[];
  expanded?: boolean;
};

export type SubCampainAdType = {
  name: string;
  quantity: number;
};

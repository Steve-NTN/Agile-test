import {
  Alert,
  Container,
  Snackbar,
  Stack,
  Tab,
  Tabs,
} from "@mui/material";
import { lazy, useMemo, useState } from "react";
import { StyledMain, SubmitButton } from "./index.styles";
import { useCampaignContext } from "providers/CampaignProvider";
import { IS_VALID_STRING } from "helpers/string";

const CampainChildren = lazy(() => import("./components/CampainChildren"));
const Informations = lazy(() => import("./components/Informations"));

type Props = {};

const Home = (props: Props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [snackbarStatus, setsnackbarStatus] = useState({
    show: false,
    status: 0,
  });
  const { campaign, setErrors } = useCampaignContext();

  const onClickTab = (e: any, newValue: number) => {
    setCurrentTab(newValue);
  };

  const CurrentTabContent = useMemo(() => {
    switch (currentTab) {
      case 0:
        return Informations;
      case 1:
        return CampainChildren;

      default:
        return () => null;
    }
  }, [currentTab]);

  const onValidateForm = () => {
    const { information, subCampaigns = [] } = campaign || {};
    let isValidName = IS_VALID_STRING(information?.name);
    let isValid = isValidName;
    let tmpErrors = {
      name: {
        show: !isValidName,
      },
      subCampaigns: subCampaigns.map((subCampaign) => {
        let isValidsubCampaignName = IS_VALID_STRING(subCampaign.name);
        let isValidsubCampaign = isValidsubCampaignName;
        let adsErrors = subCampaign.ads.map((ad) => {
          let isValidAdName = IS_VALID_STRING(ad.name);
          let isValidQuantity = IS_VALID_STRING(String(ad.quantity));
          if (!(isValidAdName && isValidQuantity)) {
            isValidsubCampaign = false;
          }
          return {
            name: { show: !isValidAdName },
            quantity: { show: !isValidQuantity },
          };
        });
        isValid = isValid && isValidsubCampaign;

        return {
          show: !isValidsubCampaign,
          name: { show: !isValidsubCampaignName },
          ads: adsErrors,
        };
      }),
    };

    setErrors(tmpErrors);
    return isValid;
  };

  const onSubmitForm = () => {
    let isValidForm = onValidateForm();
    console.log(campaign);
    setsnackbarStatus({ show: true, status: isValidForm ? 1 : 2 });
  };

  const onCloseSnack = () => {
    setsnackbarStatus({ show: false, status: 0 });
  };

  return (
    <Container>
      <StyledMain spacing={2} p={2} alignItems="center">
        <Tabs value={currentTab} onChange={onClickTab}>
          <Tab value={0} label="Informations" />
          <Tab value={1} label="Campain children" />
        </Tabs>

        <Stack spacing={2} my={2} width="100%">
          <CurrentTabContent />
        </Stack>

        <Snackbar
          open={snackbarStatus.show}
          autoHideDuration={3000}
          onClose={onCloseSnack}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert severity={snackbarStatus.status === 1 ? "success" : "error"}>
            {snackbarStatus.status === 1
              ? "Thành công"
              : "Vui lòng điền đúng và đầy đủ thông tin"}
          </Alert>
        </Snackbar>

        <SubmitButton variant="outlined" onClick={onSubmitForm}>
          Submit
        </SubmitButton>
      </StyledMain>
    </Container>
  );
};

export default Home;

import {
  Checkbox,
  Collapse,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useCampaignContext } from "providers/CampaignProvider";
import { StyledCampaignBox } from "./CampainChildren.styles";
import { Add, ExpandMoreOutlined } from "@mui/icons-material";

type Props = {};

const CampainChildren = (props: Props) => {
  const {
    campaign,
    onToggleSubCampaign,
    onChangeCampaign,
    errors,
    onAddSubCampain,
    onAddNewAd,
    onEditAd,
  } = useCampaignContext();
  const { subCampaigns = [] } = campaign || {};

  const onChangeField = (data: any, index: number) => {
    onChangeCampaign({
      ...campaign,
      subCampaigns: campaign?.subCampaigns.map((subcampaign, i) =>
        i === index ? { ...subcampaign, ...data } : subcampaign
      ),
    });
  };

  return (
    <Stack spacing={2} alignItems="center">
      {subCampaigns.map((subCampaign, i) => (
        <StyledCampaignBox error={errors?.subCampaigns[i]?.show} key={i}>
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>
              {subCampaign.name}({subCampaign.ads.length})
            </Typography>
            <IconButton onClick={() => onToggleSubCampaign(i)}>
              <ExpandMoreOutlined />
            </IconButton>
          </Stack>

          <Collapse in={subCampaign.expanded}>
            <Stack spacing={2} my={2} alignItems="center">
              <Stack
                spacing={2}
                direction="row"
                alignItems="center"
                width="100%"
              >
                <TextField
                  label="Subcampaign name"
                  required
                  value={subCampaign.name}
                  onChange={(e) => onChangeField({ name: e.target.value }, i)}
                  error={errors?.subCampaigns[i]?.name?.show}
                  sx={{ flex: 1 }}
                />
                <Checkbox
                  checked={subCampaign.status}
                  onChange={(e) =>
                    onChangeField({ status: e.target.checked }, i)
                  }
                />
              </Stack>

              <Typography fontWeight="bold">Promotion</Typography>

              {subCampaign.ads.map((ad, ii) => (
                <Stack spacing={2} className="ad_box" direction="row" key={ii}>
                  <TextField
                    label="Ad name"
                    required
                    value={ad.name}
                    onChange={(e) => onEditAd(i, ii, { name: e.target.value })}
                    error={errors?.subCampaigns[i]?.ads[ii]?.name?.show}
                  />
                  <TextField
                    label="Ad quanlity"
                    type="number"
                    required
                    value={ad.quantity}
                    onChange={(e) => {
                      let newValue = parseInt(e.target.value, 10);
                      if (newValue < 1) newValue = 1;
                      onEditAd(i, ii, {
                        quantity: isNaN(newValue) ? "" : newValue,
                      });
                    }}
                    error={errors?.subCampaigns[i]?.ads[ii]?.quantity?.show}
                  />
                </Stack>
              ))}

              <IconButton onClick={() => onAddNewAd(i)}>
                <Add />
              </IconButton>
            </Stack>
          </Collapse>
        </StyledCampaignBox>
      ))}

      <IconButton onClick={onAddSubCampain}>
        <Add />
      </IconButton>
    </Stack>
  );
};

export default CampainChildren;

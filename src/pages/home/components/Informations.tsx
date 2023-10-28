import { TextField } from "@mui/material";
import { useCampaignContext } from "providers/CampaignProvider";

type Props = {};

const Informations = (props: Props) => {
  const { campaign, onChangeCampaign, errors } = useCampaignContext();

  const onChangeField = (data: any) => {
    onChangeCampaign({ information: { ...campaign?.information, ...data } });
  };

  return (
    <>
      <TextField
        label="Campaign name"
        required
        value={campaign?.information?.name}
        onChange={(e) => onChangeField({ name: e.target.value })}
        error={errors?.name?.show}
      />
      <TextField
        multiline
        rows={3}
        label="Campaign description"
        value={campaign?.information?.describe}
        onChange={(e) => onChangeField({ describe: e.target.value })}
      />
    </>
  );
};

export default Informations;

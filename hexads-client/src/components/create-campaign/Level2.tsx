import React from "react";
import { TargetUsers } from "../../constants/TargetUsers";
import { CREATE_CAMPAIGN_VIEWS } from "../../constants/Views";
import useViews from "../../hooks/useView";
import Button from "../common/Button";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";

interface FormFieldType {
  values: any;
  getFieldMeta: any;
  getFieldProps: any;
  setFieldValue: any;
}

const Level2 = ({
  values,
  getFieldMeta,
  getFieldProps,
  setFieldValue,
}: FormFieldType) => {
  const views = useViews();
  return (
    <>
      <SelectInput
        value={values.target_users}
        setter={(value: any) => {
          setFieldValue("target_users", value);
        }}
        valueMap={Object.keys(TargetUsers)}
        label={"Target Users"}
        mandatory={true}
        styles={"w-full"}
      />
      <TextInput
        label={"Campaign Cost"}
        placeHolder={"0"}
        callback={(value: any) => {
          setFieldValue("campaign_cost", value);
        }}
        mandatory={true}
        value={values.campaign_cost}
        meta={getFieldMeta("campaign_cost")}
        type="number"
      />
      <Button
        type="button"
        onClick={() => {
          views.updateCampaignView(CREATE_CAMPAIGN_VIEWS.LEVEL3);
        }}>
        Next
      </Button>
    </>
  );
};

export default Level2;

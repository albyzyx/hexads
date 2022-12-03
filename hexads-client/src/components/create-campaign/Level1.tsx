import React from "react";
import { CREATE_CAMPAIGN_VIEWS } from "../../constants/Views";
import useViews from "../../hooks/useView";
import Button from "../common/Button";
import TextArea from "../common/TextArea";
import TextInput from "../common/TextInput";

interface FormFieldType {
  values: any;
  getFieldMeta: any;
  getFieldProps: any;
  setFieldValue: any;
}

const Level1 = ({
  values,
  getFieldMeta,
  getFieldProps,
  setFieldValue,
}: FormFieldType) => {
  const views = useViews();
  return (
    <>
      <TextInput
        label={"Subject"}
        placeHolder={""}
        callback={(value: any) => {
          setFieldValue("subject", value);
        }}
        mandatory={true}
        value={values.subject}
        meta={getFieldMeta("subject")}
      />
      <TextArea
        label={"Description"}
        placeHolder={""}
        callback={(value: any) => {
          setFieldValue("description", value);
        }}
        mandatory={true}
        value={values.description}
        meta={getFieldMeta("description")}
      />
      <TextInput
        label={"Redirect URI"}
        placeHolder={""}
        callback={(value: any) => {
          setFieldValue("redirect_url", value);
        }}
        mandatory={true}
        value={values.redirect_url}
        meta={getFieldMeta("redirect_url")}
      />
      <TextInput
        label={"Banner URI"}
        placeHolder={""}
        callback={(value: any) => {
          setFieldValue("banner_url", value);
        }}
        mandatory={true}
        value={values.banner_url}
        meta={getFieldMeta("banner_url")}
      />
      <Button
        onClick={() => {
          views.updateCampaignView(CREATE_CAMPAIGN_VIEWS.LEVEL2);
        }}
        type="button">
        Next
      </Button>
    </>
  );
};

export default Level1;

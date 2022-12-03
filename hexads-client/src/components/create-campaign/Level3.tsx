import React from "react";
import useViews from "../../hooks/useView";
import Button from "../common/Button";

interface FormFieldType {
  values: any;
  getFieldMeta: any;
  getFieldProps: any;
  setFieldValue: any;
  submitForm: any;
}

const valuesMap: any = {
  subject: "Subject",
  description: "Description",
  redirect_url: "Redirect URI",
  banner_url: "Banner URI",
  target_users: "Target Users",
  campaign_cost: "Campaign Cost",
};

const Level3 = ({
  values,
  getFieldMeta,
  getFieldProps,
  setFieldValue,
  submitForm,
}: FormFieldType) => {
  const views = useViews();

  return (
    <>
      {Object.keys(valuesMap).map((value: string, idx: number) => {
        return (
          <LabelValue
            key={idx}
            label={valuesMap[value]}
            value={getFieldProps(value).value}
          />
        );
      })}
      <section>
        <Button
          onClick={() => {
            views.updateCampaignView(views.from);
          }}
          type="button">
          Review
        </Button>
        <Button onClick={() => submitForm()} type="submit">
          Submit
        </Button>
      </section>
    </>
  );
};

const LabelValue = ({ label, value }: { label: string; value: string }) => {
  return (
    <section>
      <span>{label}</span>
      <span>{value}</span>
    </section>
  );
};

export default Level3;

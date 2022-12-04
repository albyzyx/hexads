import useViews from "../../hooks/useView";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CREATE_CAMPAIGN_VIEWS } from "../../constants/Views";
import { TargetUsers } from "../../constants/TargetUsers";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import Card from "../common/Card";
import useCreateCampaign from "../../hooks/useCreateCampaign";
import { useEffect } from "react";

const CreateCampaign = () => {
  const views = useViews();
  const campaign = useCreateCampaign();

  const submitForm = async (values: any) => {
    console.log(values);

    await campaign.approveSpendHook();
    await campaign.createCampaign(
      values.subject,
      values.description,
      values.redirect_url,
      values.banner_url,
      TargetUsers[values.target_users],
      String(values.campaign_cost)
    );
  };

  return (
    <Formik
      initialValues={{
        subject: "",
        description: "",
        redirect_url: "",
        banner_url: "",
        target_users: Object.keys(TargetUsers)[0],
        campaign_cost: 0,
      }}
      validationSchema={Yup.object({
        subject: Yup.string().required(),
        description: Yup.string().required(),
        redirect_url: Yup.string().url().required(),
        banner_url: Yup.string().url().required(),
        target_users: Yup.string().required(),
        campaign_cost: Yup.number().required(),
      })}
      onSubmit={async (values, { setSubmitting }) => {}}
    >
      {({
        isSubmitting,
        setFieldValue,
        getFieldMeta,
        getFieldProps,
        values,
      }) => (
        <section className="w-full h-full flex flex-col gap-5 items-start justify-center">
          <h2 className="font-bold text-2xl">Create Campaign</h2>
          <section className="h-full w-full flex items-center justify-between">
            <Form className="w-full">
              <Card>
                <div className="w-full gap-3 flex flex-col rounded-3xl">
                  <main className="w-full flex flex-col gap-4 items-center">
                    {views.campaign === CREATE_CAMPAIGN_VIEWS.LEVEL1 && (
                      <Level1
                        values={values}
                        getFieldMeta={getFieldMeta}
                        getFieldProps={getFieldProps}
                        setFieldValue={setFieldValue}
                      />
                    )}
                    {views.campaign === CREATE_CAMPAIGN_VIEWS.LEVEL2 && (
                      <Level2
                        values={values}
                        getFieldMeta={getFieldMeta}
                        getFieldProps={getFieldProps}
                        setFieldValue={setFieldValue}
                      />
                    )}
                    {views.campaign === CREATE_CAMPAIGN_VIEWS.LEVEL3 && (
                      <Level3
                        values={values}
                        getFieldMeta={getFieldMeta}
                        getFieldProps={getFieldProps}
                        setFieldValue={setFieldValue}
                        submitForm={submitForm}
                      />
                    )}
                  </main>
                </div>
              </Card>
            </Form>
          </section>
        </section>
      )}
    </Formik>
  );
};

export default CreateCampaign;

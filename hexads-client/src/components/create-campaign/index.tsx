import useViews from "../../hooks/useView";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CREATE_CAMPAIGN_VIEWS } from "../../constants/Views";
import { TargetUsers } from "../../constants/TargetUsers";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import Card from "../common/Card";

const CreateCampaign = () => {
  const views = useViews();

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
        target_users: Yup.string().required().oneOf(Object.keys(TargetUsers)),
        campaign_cost: Yup.number().required(),
      })}
      onSubmit={async (values, { setSubmitting }) => {}}>
      {({
        isSubmitting,
        setFieldValue,
        getFieldMeta,
        getFieldProps,
        values,
        submitForm,
      }) => (
        <section className="w-full h-full flex flex-col items-center justify-center mx-auto bg-gray bg-opacity-50">
          <Form className="w-2/3">
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
      )}
    </Formik>
  );
};

export default CreateCampaign;

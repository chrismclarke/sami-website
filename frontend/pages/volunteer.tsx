import React from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { IVolunteer } from "types/volunteer";
import Head from "next/head";
import { Volunteer, VolunteersQuery, VolunteersDocument, FaqsQuery, FaqsDocument, Faq } from "../graphql/generated";
import { serverQuery } from "lib/graphql";
import { VolunteerPageComponent } from "components/pages/volunteer";
import { IFaq } from "types/faq";

export const getServerSideProps = async ({}: GetServerSidePropsContext) => {
  let volunteerPageContent: IVolunteer[] = [];
  let faqs: IFaq[] = [];
  const volunteerRes = await serverQuery<VolunteersQuery>(VolunteersDocument);
  if (volunteerRes) {
    volunteerPageContent = volunteerRes.data.volunteers.data.map((v) => ({
      ...(v.attributes as Volunteer),
      id: v.id,
    }));
  }
  const faqRes = await serverQuery<FaqsQuery>(FaqsDocument);
  if (faqRes) {
    faqs = faqRes.data.faqs.data.map((faq) => ({
      ...(faq.attributes as Faq),
      id: faq.id,
    }));
  }
  return {
    props: {
      volunteerPageContent,
      faqs,
    },
  };
};

const VolunteerPage = ({ volunteerPageContent, faqs }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Volunteer Page</title>
      </Head>
      <VolunteerPageComponent volunteerPageContent={volunteerPageContent} faqs={faqs} />
    </>
  );
};

export default VolunteerPage;

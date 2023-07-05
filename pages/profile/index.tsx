import { NextPage } from "next";
import { Profile } from "@containers/Profile";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ProfilePage: NextPage = () => <Profile />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ProfilePage;

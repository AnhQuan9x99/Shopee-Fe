import { Home } from "@containers/HomePage";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage: NextPage = () => <Home />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
export default HomePage;

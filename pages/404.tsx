import { Layout } from "@layouts/Layout";
import Link from "next/link";

const Page404 = () => (
  <>
    <Layout />
    <div className="flex flex-col items-center justify-center w-full h-full bg-white dark:bg-dark_0">
      <p className="text-black dark:text-white text-2xl font-bold my-5">
        404 - Page Not Found
      </p>

      <Link href={"/"}>
        <a>
          <p className="text-dark_3 border-none bg-dark_2 rounded-md">
            Go back home
          </p>
        </a>
      </Link>
    </div>
  </>
);

export default Page404;

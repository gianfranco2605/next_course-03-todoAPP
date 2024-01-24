import { TabBar } from "@/components";
import { cookies } from "next/headers";

export const metadata = {
  title: "Cookies Page",
  description: "Cookies Page",
};

export default function CookiesPage() {
  const cookiesStore = cookies();

  const cookieTab = cookiesStore.get("selectedTab")?.value ?? 1;

  // const allCookies = cookiesStore.getAll();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-5">
      {/* reading all my cookies */}
      {/* {JSON.stringify(allCookies)} */}
      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        {/* + = covert to number */}
        <TabBar currentTab={+cookieTab} />
      </div>
    </div>
  );
}

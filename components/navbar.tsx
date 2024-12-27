import { UserButton } from "@clerk/nextjs";

import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import MobileSidebar from "./mobile-sidebar";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const proAccount = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar apiLimitCount={apiLimitCount} proAccount={proAccount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;

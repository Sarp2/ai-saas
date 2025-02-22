"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import Sidebar from "./sidebar";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileSidebar = ({ apiLimitCount = 0, proAccount = false }: { apiLimitCount: number; proAccount: boolean }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} proAccount={proAccount} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

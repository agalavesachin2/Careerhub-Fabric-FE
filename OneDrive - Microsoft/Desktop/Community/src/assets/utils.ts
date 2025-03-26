import { useEffect, useState } from "react";
import { IContextualMenuItem } from "@fluentui/react/lib/ContextualMenu";

export const getJSONParsed = (text: string | undefined | null) => {
  try {
    if (!text || typeof text !== "string") {
      console.error("getJSONParsed received invalid input:", text);
      return null;
    }

    return JSON.parse(decodeURIComponent(text).replace(/<#--[\s\S]*?-->/g, ""));
  } catch (err) {
    console.error("Error parsing custom content:", err, "Input:", text);
    return null;
  }
};

export const useWindowDimensions = () => {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    return hasWindow
      ? { width: window.innerWidth, height: window.innerHeight }
      : { width: null, height: null };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => setWindowDimensions(getWindowDimensions());
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
};

export interface IOverflowData {
  primary: IContextualMenuItem[];
  secondary: IContextualMenuItem[];
}

const navItemsList: IContextualMenuItem[] = [
  {
    text: "Participate",
    href: "#participate",
    id: "participate",
    key: "participate",
    data: {
      biId: "fabric_nav_participate",
      biName: "Participate",
      biArea: "Fabric Community Navigation",
    },
  },
  {
    text: "Winners",
    href: "#winners",
    id: "winners",
    key: "winners",
    data: {
      biId: "fabric_nav_winners",
      biName: "Winners",
      biArea: "Fabric Community Navigation",
    },
  },
  {
    text: "Get inspired",
    href: "#getinspired",
    id: "getinspired",
    key: "get_inspired",
    data: {
      biId: "fabric_nav_get_inspired",
      biName: "Get Inspired",
      biArea: "Fabric Community Navigation",
    },
  },
  {
    text: "FAQs",
    href: "#faqs",
    id: "faqs",
    key: "faqs",
    data: {
      biId: "fabric_nav_faqs",
      biName: "FAQs",
      biArea: "Fabric Community Navigation",
    },
  },
];

export const navItemsData: IOverflowData = {
  primary: [...navItemsList], // Ensure new array references
  secondary: [...navItemsList],
};

export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = window.scrollY === 0 ? 170 : 120;
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - yOffset;
    
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  }
};

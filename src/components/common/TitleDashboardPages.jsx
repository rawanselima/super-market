import useIsMobile from "@/hooks/useIsMobile";
import React from "react";
import Button from "./Button";
import HeaderSection from "./HeaderSection";
import { TiPlus } from "react-icons/ti";
const TitleDashboardPages = ({ isOpen, setIsOpen, title, textBtn }) => {
  const isMobile = useIsMobile();

  return (
    <section className="flex justify-between items-center">
      <HeaderSection smallMargin={true} > {title} </HeaderSection>
      {isMobile ? (
        <Button navigate={() => setIsOpen(!isOpen)} size={"small"}>
          <span className="mr-2">
            <TiPlus />
          </span>
          {textBtn}
        </Button>
      ) : (
        <Button navigate={() => setIsOpen(!isOpen)}>
          <span className="mr-2">
            <TiPlus />
          </span>
          {textBtn}
        </Button>
      )}
    </section>
  );
};

export default TitleDashboardPages;

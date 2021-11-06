import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../../styles/Layout";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import portfolios from "../../data/projects";
import Menu from "../../Components/Menu";
import Button from "../../Components/Button";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

export default function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [menuItem, setMenuItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };

  return (
    <div>
      <MainLayout>
        <div className="project-container  fade-in" id={props.id || ""}>
          <ScreenHeading title={"Projects"} subHeading={"in-depth view"} />
          <InnerLayout>
            <Button filter={filter} button={button} />
            <Menu menuItem={menuItem} />
          </InnerLayout>
        </div>
      </MainLayout>
    </div>
  );
}

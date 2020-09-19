import React from "react";
import { Layout, Issues as IssueCard } from "../components";

const issues = [
  {
    title: "Unable to Set Default Active Key (defaultOpen) in Accordion",
    text: `I had followed your suggestions in defect#5406 and have managed to control my Accordion from within the accordion body. 
            Now, however, because I have externalized the activeKey, I am not able to set a default Active key.The default Active icon seems to be inverted to me, and I have the accordion in a component, that I reuse everywhere. I want to pass a prop, default open flag and want the accordion to be open/closed on load and function appropriately. 
            Please share suggestions. Thanks, Selena`,
  },
  {
    title: "Unable to Set Default Active Key (defaultOpen) in Accordion",
    text: `I had followed your suggestions in defect#5406 and have managed to control my Accordion from within the accordion body. 
            Now, however, because I have externalized the activeKey, I am not able to set a default Active key.The default Active icon seems to be inverted to me, and I have the accordion in a component, that I reuse everywhere. I want to pass a prop, default open flag and want the accordion to be open/closed on load and function appropriately. 
            Please share suggestions. Thanks, Selena`,
  },
  {
    title: "Unable to Set Default Active Key (defaultOpen) in Accordion",
    text: `I had followed your suggestions in defect#5406 and have managed to control my Accordion from within the accordion body. 
            Now, however, because I have externalized the activeKey, I am not able to set a default Active key.The default Active icon seems to be inverted to me, and I have the accordion in a component, that I reuse everywhere. I want to pass a prop, default open flag and want the accordion to be open/closed on load and function appropriately. 
            Please share suggestions. Thanks, Selena`,
  },
];

const Issues = () => {
  return (
    <Layout
      title="Issues (Company Name)"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada ullamcorper gravida neque, dapibus leo, auctor..."
    >
      <IssueCard issues={issues} />
    </Layout>
  );
};

export default Issues;

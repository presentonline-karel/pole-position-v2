"use client";

// Next & React
import { ReactElement, useState } from "react";
import React from "react";

// Types
import { TabProps } from "@/types/components/Tab";

export default function Tabs(children: JSX.Element | JSX.Element[]) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  // Ensure children is an array
  const tabChildren = React.Children.toArray(children) as ReactElement<TabProps>[];

  console.log("children: ", children);

  return (
    <div className="tabs">
      <div className="tab-list">
        {tabChildren.map((child, index) => (
          <div key={index} onClick={() => handleTabClick(index)}>
            {child}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabChildren[activeTab]?.props.children}
      </div>
    </div>
  );
}
import React, { Component, useState } from "react";
import "./Portfolio.css";
import { TabView, TabPanel } from "primereact/tabview";
import { SplitButton } from "primereact/splitbutton";
import { Avatar } from "primereact/avatar";

const TabViewDemo = () => {
  const [activeIndex1, setActiveIndex1] = useState(1);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({
    title: `Tab ${i + 1}`,
    content: `Tab ${i + 1} Content`,
  }));

  const tabHeaderITemplate = (options) => {
    return (
      <button
        type="button"
        onClick={options.onClick}
        className={options.className}
      >
        <i className="pi pi-prime mr-2" />
        {options.titleElement}
      </button>
    );
  };

  const tabHeaderIIITemplate = (options) => {
    const items = [
      { label: "Update", icon: "pi pi-refresh" },
      { label: "Delete", icon: "pi pi-times" },
      { label: "Upload", icon: "pi pi-upload" },
    ];

    return (
      <SplitButton
        label="Header III"
        icon="pi pi-plus"
        onClick={options.onClick}
        className="px-2"
        model={items}
      ></SplitButton>
    );
  };

  const tabHeaderIITemplate = (options) => {
    return (
      <div
        className="flex align-items-center px-3"
        style={{ cursor: "pointer" }}
        onClick={options.onClick}
      >
        <Avatar
          image="images/avatar/amyelsner.png"
          onImageError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          shape="circle"
          className="mx-2"
        />
        Amy Elsner
      </div>
    );
  };
};

export class Portfolio extends Component {
  render() {
    const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({
      title: `Tab ${i + 1}`,
      content: `Tab ${i + 1} Content`,
    }));

    return (
        <div className="card">
        <h5>Header Icons</h5>
        <TabView className="tabview-header-icon">
            <TabPanel header="Header I" leftIcon="pi pi-calendar">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </TabPanel>
            <TabPanel header="Header II" rightIcon="pi pi-user">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </TabPanel>
            <TabPanel header="Header III" leftIcon="pi pi-search" rightIcon="pi pi-cog">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
            </TabPanel>
        </TabView>
    </div>

    );
  }
}

export default Portfolio;

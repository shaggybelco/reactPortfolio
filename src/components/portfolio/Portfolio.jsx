import React, { Component } from "react";
import "./Portfolio.css";
import { TabView, TabPanel } from "primereact/tabview";
import { SplitButton } from "primereact/splitbutton";
import { Avatar } from "primereact/avatar";

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex1: 1,
      activeIndex2: 0,
    };

    this.tabHeaderITemplate = this.tabHeaderITemplate.bind(this);
    this.tabHeaderIITemplate = this.tabHeaderIITemplate.bind(this);
    this.tabHeaderIIITemplate = this.tabHeaderIIITemplate.bind(this);
  }

  tabHeaderITemplate(options) {
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
  }

  tabHeaderIIITemplate(options) {
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
  }

  tabHeaderIITemplate(options) {
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
  }

  render() {
    // const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({
    //   title: `Tab ${i + 1}`,
    //   content: `Tab ${i + 1} Content`,
    // }));

    return (
      <div className="min-h-screen bg-base-100">
        <h1 className="flex font-bold text-5xl justify-center">Portfolio</h1>
        <div className="flex card justify-center">
          <TabView className="tabview-header-icon">
            <TabPanel header="All" leftIcon="pi pi-folder">
              <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-3 justify-center">
                {/* note app */}
                <div className="flex flex-wrap justify-center  mt-6 mb-6">
                  <div className="flex flex-row justify-center m-6">
                    <div className="card w-80 glass">
                      <figure>
                        <img
                          src={require("../../assets/Screenshot 2022-10-27 at 10.30.38.png")}
                          alt={"note!"}
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Note App</h2>
                        <p>
                          App that save your note online and save them for you
                          even when you lose your phone you can access them from
                          anywhere
                        </p>
                        <div className="card-actions justify-end">
                          <label
                            htmlFor="my-modal-6"
                            className="btn modal-button next"
                          >
                            Learn more..
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </TabPanel>
            <TabPanel header="APP" leftIcon="pi pi-th-large">
              <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-3 justify-center">
                {/* note app */}
                <div className="flex flex-wrap justify-center  mt-6 mb-6">
                  <div className="flex flex-row justify-center m-6">
                    <div className="card w-80 glass">
                      <figure>
                        <img
                          src={require("../../assets/Screenshot 2022-10-27 at 10.30.38.png")}
                          alt={"note!"}
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Note App</h2>
                        <p>
                          App that save your note online and save them for you
                          even when you lose your phone you can access them from
                          anywhere
                        </p>
                        <div className="card-actions justify-end">
                          <label
                            htmlFor="my-modal-6"
                            className="btn modal-button next"
                          >
                            Learn more..
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </TabPanel>
            <TabPanel header="WEBSITES" leftIcon="pi pi-globe">
              <div className="flex flex-wrap justify-center  mt-6 mb-6">
                <div className="flex flex-row justify-center m-6">
                  <div className="card w-80 glass">
                    <figure>
                      <img
                        src={require("../../assets/not.png")}
                        alt={"note!"}
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">No Website Yet.</h2>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabView>
        </div>

        {/* modal for note app */}
        <div className="flex justify-center">
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Note App</h3>
              <img
                src={require("../../assets/Screenshot 2022-10-27 at 10.30.38.png")}
                alt={""}
              />
              <p>
                App that save your note online and save them for you even when
                you lose your phone you can access them from anywhere
              </p>

              <div className="modal-action">
                <div className="web flex justify-center">
                  <a className="tt" href="https://belco.netlify.app/">
                    See the app
                  </a>
                </div>
                <label htmlFor="my-modal-6" className="btn btn-error">
                  Exit
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* guidence hub app */}
        <div className="flex justify-center">
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Guidence Hub App</h3>
              <img
                src={require("../../assets/Screenshot 2022-11-16 at 09.51.40.png")}
                alt={"hub!"}
              />
              <p>
                This app can help even the people who know what they want to do
                and but either want information or they are not sure about the
                requirement and more information.
              </p>

              <div className="modal-action">
                <div className="web flex justify-center">
                  <a className="tt" href="https://guidence.netlify.app/">
                    See the app
                  </a>
                </div>
                <label htmlFor="my-modal" className="btn btn-error">
                  Exit
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* modal for socialite app */}
        <div className="flex justify-center">
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Guidence Hub App</h3>
              <img
                src={require("../../assets/Screenshot 2022-11-16 at 09.35.12.png")}
                alt={"hub!"}
              />
              <p>
                This app is not on hosted on the internet but if you are
                interested on how it is develop, you can check on github
              </p>

              <div className="modal-action">
                <div className="web flex justify-center">
                  <a className="tt" href="https://github.com/shaggybelco/socialite.git">
                    See the app
                  </a>
                </div>
                <label htmlFor="my-modal-3" className="btn btn-error">
                  Exit
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;

import classnames from "classnames";
import React, { useState } from "react";
import {
  Card,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane
} from "reactstrap";
import AutoComplete from "./AutoComplete";
import EmailOptions from "./EmailOptions";
import FormikFormComponent from "./FormikForm";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [setProspectId] = useState("");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  /**
   * We have to enable next two tabs only when we get prospectId from first tab
   * Pass that prospect Id to next both tabs in props.
   * @param {*} childData
   */
  const handleCallback = (childData) => {
    console.log(childData);
    setProspectId(childData.prospectId);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Form - {props.id}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            // disabled={!prospectId}
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Terminals
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            // disabled={!prospectId}
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Emails
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <FormikFormComponent
                parentCallback={handleCallback}
              ></FormikFormComponent>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <Card body>
                <CardTitle>Auto Search, Search Git hub Users</CardTitle>
                <AutoComplete prospectId={props.id}></AutoComplete>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <Card body>
                <EmailOptions prospectId={props.id}></EmailOptions>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;

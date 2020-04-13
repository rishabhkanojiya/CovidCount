import React, { Component } from "react";
import Header from "./Header";
import Table from "./Table";
import { graphql } from "react-apollo";
import { query } from "../queries/query";
import TotalCt from "./TotalCt";

export class App extends Component {
  render() {
    const { loading, cvMainData } = this.props.data;

    const renderTable = loading => {
      if (loading && !cvMainData) {
        return <div></div>;
      }
      return <Table Querydata={cvMainData} />;
    };
    return (
      <div>
        <Header />
        <div className="" style={{ padding: "0px 30px" }}>
          <div className="row">
            <div className="col s12 m12">
              <TotalCt data={this.props.data} />
            </div>
          </div>
          <div className="row">{renderTable(loading)}</div>
        </div>
      </div>
    );
  }
}

export default graphql(query)(App);

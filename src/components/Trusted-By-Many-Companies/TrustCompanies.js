import React, { Component } from "react";
import Nutrizoe from "../../assests/safemeet-clients/nutrizoe.png";
import Ejohri from "../../assests/safemeet-clients/ejohri.png";
import Inroys from "../../assests/safemeet-clients/inroys.webp";
import Premier from "../../assests/safemeet-clients/premier.png";
import Zum from "../../assests/safemeet-clients/zum-heilen.png";
import Zhelakayre from "../../assests/safemeet-clients/zhelakayre.png";

export default class TrustCompanies extends Component {
  render() {
    const safemeet_client = [
      Nutrizoe,
      Ejohri,
      Zhelakayre,
      Premier,
      Inroys,
      Zum,
    ];
    return (
      <React.Fragment>
        <div className="safemeet-container safemeet-mg-t-3 safemeet-trusted-by-many-companies">
          <h1>Trusted by many Companies</h1>
        </div>
        <div className="safemeet-clients">
          {safemeet_client.map((item, index) => {
            return <img key={index} src={item} alt={item} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

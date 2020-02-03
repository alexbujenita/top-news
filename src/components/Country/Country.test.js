import React from "react";
import Country from "./Country";
import { shallow } from "enzyme";

describe("<Country />", () => {
  const defaultProps = {
    match: {
      params: {
        country: "gb"
      }
    }
  };

  it("should render the correct country", () => {
    const component = shallow(<Country {...defaultProps} />);
    const text = component.find("h2").text();
    expect(text).toBe("Top news from the United Kingdom");
  });

  it("should fetch the data when mounting", () => {
    const spyOnMount = jest.spyOn(Country.prototype, "componentDidMount");
    shallow(<Country {...defaultProps} />);
    expect(spyOnMount).toHaveBeenCalled();
  });

  it("should render the not found component if country is not valid", () => {
    defaultProps.match.params.country = 'it';
    const component = shallow(<Country {...defaultProps} />);
    expect(component.text()).toBe('<PageNotFound />');
  });
});

import React from "react";
import renderer from "react-test-renderer";
import LineChartAtom from "./LineChartAtom";

describe("LineChartAtom", () => {
  it("should render the LineChart component correctly", () => {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
        },
      ],
    };
    const width = 300;
    const height = 200;

    const component = renderer.create(
      <LineChartAtom data={data} width={width} height={height} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

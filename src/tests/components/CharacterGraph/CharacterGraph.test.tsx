import { screen } from "@testing-library/react";
import { useAppSelector } from "@/hooks";
import { HeroGraph } from "@/components";
import render from "@/tests/_utils/render";

jest.mock("@/hooks", () => ({
  useAppSelector: jest.fn(),
}));

describe("HeroGraph Component", () => {
  beforeEach(() => {
    (useAppSelector as jest.Mock).mockClear();
  });

  it("renders 'Hero not found' message when no hero is available", () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      hero: null,
      films: [],
      starships: [],
    });

    render(<HeroGraph />);

    expect(screen.getByText("Hero not found")).toBeInTheDocument();
  });

  it("renders hero node and connections when hero data is available", () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      hero: { name: "Luke Skywalker", id: "1" },
      films: [{ title: "A New Hope" }, { title: "The Empire Strikes Back" }],
      starships: [{ name: "X-wing" }, { name: "Millennium Falcon" }],
    });

    render(<HeroGraph />);

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText("A New Hope")).toBeInTheDocument();
    expect(screen.getByText("The Empire Strikes Back")).toBeInTheDocument();

    const xwingNodes = screen.getAllByText("X-wing");
    expect(xwingNodes.length).toBeGreaterThan(0);

    const millenniumNodes = screen.getAllByText("Millennium Falcon");
    expect(millenniumNodes.length).toBeGreaterThan(0);
  });
});

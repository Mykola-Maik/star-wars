import { screen } from "@testing-library/react";
import { Header } from "@/components";
import theme from "@/styles/muiTheme";
import { ROUTES } from "@/enums";
import render from "@/tests/_utils/render";

describe("Header component", () => {
  it("renders AppBar with correct background color", () => {
    render(<Header />);

    const appBar = screen.getByRole("banner");

    expect(appBar).toHaveStyle(
      `background-color: ${theme.palette.common.black}`
    );
  });

  it("displays the correct title text", () => {
    render(<Header />);

    const title = screen.getByText(/Star Wars/i);

    expect(title).toBeInTheDocument();
  });

  it("title has the correct color", () => {
    render(<Header />);

    const title = screen.getByText(/Star Wars/i);

    expect(title).toHaveStyle(`color: ${theme.palette.common.white}`);
  });

  it("contains a link that navigates to the correct route", () => {
    render(<Header />);

    const linkElement = screen.getByRole("link", { name: /Star Wars/i });

    expect(linkElement).toHaveAttribute("href", ROUTES.LIST);
  });
});

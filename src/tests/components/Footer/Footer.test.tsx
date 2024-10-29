import { screen } from "@testing-library/react";
import { Footer } from "@/components/Footer";
import render from "@/tests/_utils/render";

describe("Footer component", () => {
  it("renders footer correctly", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");

    expect(footerElement).toBeInTheDocument();
  });

  it("renders Footer with correct text", () => {
    render(<Footer />);
    const footerText = screen.getByText(
      `© ${new Date().getFullYear()} Made by Mykola Maik`
    );
    expect(footerText).toBeInTheDocument();
  });
});

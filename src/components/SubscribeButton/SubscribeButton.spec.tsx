import { render, screen, fireEvent } from "@testing-library/react";
import { signIn, useSession } from "next-auth/client";
import { mocked } from "ts-jest/utils";
import { useRouter } from "next/router";
import { SubscribeButton } from ".";

jest.mock("next-auth/client", () => {
  return {
    useSession() {
      return [null, false];
    },
    signIn: jest.fn(),
  };
});

jest.mock("next/router");

describe("SubscribeButton component", () => {
  it("renders correctly", () => {
    // const useSessionMocked = mocked(useSession);
    // useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SubscribeButton />);

    expect(screen.getByText("Subscribe now")).toBeInTheDocument();
  });

  // it("redirects user to sign in when not authenticated", () => {
  //   // const useSessionMocked = mocked(useSession);
  //   // useSessionMocked.mockReturnValueOnce([null, false]);

  //   const signInMocked = mocked(signIn);

  //   render(<SubscribeButton />);

  //   const subscribeButton = screen.getByText("Subscribe now");

  //   fireEvent.click(subscribeButton);

  //   expect(signInMocked).toHaveBeenCalled();
  // });

  // it("redirects to posts when user already has a subscription", () => {
  //   const useRouterMocked = mocked(useRouter);
  //   const pushMock = jest.fn();

  //   useRouterMocked.mockReturnValueOnce({
  //     push: pushMock,
  //   } as any);

  //   render(<SubscribeButton />);

  //   const subscribeButton = screen.getByText("Subscribe now");

  //   fireEvent.click(subscribeButton);

  //   expect(pushMock).toHaveBeenCalled();
  // });
});

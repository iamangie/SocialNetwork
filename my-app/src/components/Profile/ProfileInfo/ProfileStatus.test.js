import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe(" ProfileStatus component", () => {
  /*  test("status from props should be in the state", () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="it-kamasutra.com" />);
    });
    const root = component.root;

    expect(root.state.status).toBe("it-kamasutra.com");
  }); */

  test("after creation <span> should be desplayed", () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="it-kamasutra.com" />);
    });
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation <span> should contain correct status ", () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="it-kamasutra.com" />);
    });
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("it-kamasutra.com");
  });

  test("after creation <input> shouldn't be desplayed ", () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="it-kamasutra.com" />);
    });
    const root = component.root;

    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("<input> should be desplayed in EditMode instead of <span> ", () => {
    let component;
    act(() => {
      component = create(<ProfileStatus status="it-kamasutra.com" />);
    });
    const root = component.root;

    let span = root.findByType("span");
    act(() => {
      span.props.onDoubleClick();
    });
    let input = root.findByType("input");

    expect(input.props.value).toBe("it-kamasutra.com");
  });

  /*  test("callback should be called ", () => {
    const mockCallback = jest.fn();
    let component;
    act(() => {
      component = create(
        <ProfileStatus status="it-kamasutra.com" updateStatus={mockCallback} />
      );
    });

    const root = component.root;

    act(() => {
      root.deactivateEditMode();
    });

    expect(mockCallback.mock.calls.length).toBe(1);
  }); */
});

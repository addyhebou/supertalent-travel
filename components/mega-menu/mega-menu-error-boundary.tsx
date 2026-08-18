"use client";

import { Component, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

// Basic error boundary around the mega-menu content per the design doc's
// observability section — a data-layer failure degrades to an inline
// message instead of taking down navigation.
export class MegaMenuErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.children !== this.props.children && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <p className="text-[14px] italic text-placeholder">
          Something went wrong loading this menu. Try again in a moment.
        </p>
      );
    }
    return this.props.children;
  }
}

import { Component, type ReactNode } from 'react';

export default class ContentBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed)
      return (
        <section className="page" role="alert">
          <h1>This page could not load</h1>
          <p>
            Check your connection and reload. Your saved topics stay on this
            device.
          </p>
          <button className="button" onClick={() => window.location.reload()}>
            Reload page
          </button>
        </section>
      );
    return this.props.children;
  }
}

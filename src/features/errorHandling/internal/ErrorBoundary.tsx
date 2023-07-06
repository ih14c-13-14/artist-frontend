import type { ErrorInfo, PropsWithChildren } from 'react';
import { Component } from 'react';

import { FallbackDisplay } from './fallbackComponents';
import { AccessErrorMessageType } from './types';

export type ErrorBoundaryProps = PropsWithChildren<unknown>;

type ErrorBoundaryState = {
  hasError: boolean;
} & Partial<AccessErrorMessageType>;
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false } satisfies ErrorBoundaryState;
  }

  static getDerivedStateFromError(error: unknown) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      title: error instanceof Error ? error.name : '',
      subtitle: error instanceof Error ? error.message : '',
      contentRows: error instanceof Error ? [error.stack ?? ''] : [],
    } satisfies ErrorBoundaryState;
  }

  componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <FallbackDisplay
          title={this.state.title}
          subtitle={this.state.subtitle}
          contentRows={this.state.contentRows}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

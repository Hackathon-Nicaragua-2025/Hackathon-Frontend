// Import For React
import { Component, type ErrorInfo } from "react";

// Interface Error Boundary
interface ErrorBoundaryState {
  hasError: boolean;
}

// Interface Error Props
interface ErrorProps {
  children: React.ReactNode;
}

// Component Error Boundary
class ErrorBoundary extends Component<ErrorProps, ErrorBoundaryState> {
  // Constructor
  constructor(props: ErrorProps) {
    super(props)
    this.state = { hasError: false };
  }

  // Método Static 
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.log("Derived Error: ", error)
    return { hasError: true };
  }

  // Log Con El Error
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("Error: ", error)
    console.log("ErrorInfo: ", errorInfo)
  }

  // Render
  render() {
    if (this.state.hasError) {
      return <h2 className="flex items-center justify-center h-[50vh] text-3xl font-bold">Algo a Salido Mal...</h2>
    }

    return this.props.children
  }
}

// Export Default Error Boundary
export default ErrorBoundary;
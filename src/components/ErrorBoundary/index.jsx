import { Component } from "react";

import errorImg from "../../images/error-boundary.svg";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <img src={errorImg} alt="error" />
          <p className="mt-7 mb-1 text-2xl">OOPS! Something Went Wrong</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

//If ever ErrorBoundary comes as a functional component, please migrate this to functional one. Yeah I know react-error-boundary package exists but STOP INSTALLING UNNECESSARY PACKAGES IN YOUR APP !!
//    - Sparsh

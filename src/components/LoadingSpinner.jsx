const LoadingSpinner = () => {
    return (
      <div className="relative flex items-center justify-center">
        <div className="w-6 h-6 border-gray-200 border-2 rounded-full" />
        <div className="w-6 h-6 border-gray-800 border-t-2 animate-spin rounded-full absolute left-0 top-0" />
        <div className="sr-only">Loading</div>
      </div>
    );
  };
  
  export default LoadingSpinner;
  
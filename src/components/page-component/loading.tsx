interface LoadingProps {
  loading: boolean;
}

const Loading = ({ loading }: LoadingProps) => {
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
      </div>
    );
  } else {
    return null;
  }
};

export default Loading;

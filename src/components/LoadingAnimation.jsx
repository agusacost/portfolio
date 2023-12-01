import { MutatingDots } from "react-loader-spinner";

const LoadingAnimation = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <MutatingDots
        height="100"
        width="100"
        color="#133C39"
        secondaryColor="#133C39"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingAnimation;

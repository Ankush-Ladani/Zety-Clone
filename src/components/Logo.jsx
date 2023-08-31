const Logo = () => {
  return (
    <>
      <img
        src="data:image/png;base64,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"
        className="h-20 mx-48"
        alt=""
      />
    </>
  );
};

export default Logo;
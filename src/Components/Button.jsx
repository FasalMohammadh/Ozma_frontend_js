function Button(props) {
  const { disabled, className, loading, children, ...rest } = props;
  return (
    <button
      type='button'
      disabled={loading || disabled}
      className={`flex items-center justify-center gap-2 disabled:opacity-50 ${
        className ?? ''
      }`}
      {...rest}
    >
      {children}
      {loading && <Loader />}
    </button>
  );
}

const Loader = () => (
  <svg width={20} height={20} className='animate-spin'>
    <circle
      fill='transparent'
      cx='50%'
      cy='50%'
      r={8}
      stroke='black'
      strokeWidth={2}
      strokeDasharray={50}
      strokeDashoffset={5}
    />
  </svg>
);

export default Button;

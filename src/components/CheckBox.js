export default function CheckBox({ className, text, children, ...rest }) {
  return (
    <>
      {/* <label>
        <input type="checkbox" /> <span>I agree to the Terms & Conditions</span>
      </label> */}

      <label className={`${className}`} {...rest}>
        <input type="checkbox" {...rest} />
        {text} {children}
      </label>

    </>
  );
}

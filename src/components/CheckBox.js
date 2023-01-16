export default function CheckBox({ className, text, children, ...rest }) {
  return (
    <label className={`${className}`} {...rest}>
      <input type="checkbox" {...rest} />
      {text} {children}
    </label>
  );
}

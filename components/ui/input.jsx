
export function Input(props) {
  const { className = "", ...rest } = props;
  return <input {...rest} className={"px-3 py-2 rounded-xl border bg-white/10 border-white/10 text-white " + className} />;
}

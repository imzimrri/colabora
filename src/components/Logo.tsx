import logo from "../assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Colabora Business Solutions Logo"
      className={`${className} object-contain`}
    />
  );
}

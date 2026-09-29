import Link from "next/link";

const VARIANT_STYLES: Record<string, string> = {
  brown: "border-vgbrown bg-vgbrown hover:bg-vgbrown/80 text-white",
  green: "border-vgreen bg-vgreen hover:bg-vgreen/80 text-white",
  outline: "border-vgbrown bg-transparent text-vgbrown hover:bg-vgbrown hover:text-white",
};

const Button = ({
  title,
  animationClass,
  link,
  variant = "brown",
  target,
}: {
  title: string;
  animationClass?: string;
  link: string;
  variant?: "brown" | "green" | "outline";
  target?: string;
}) => {
  return (
    <Link
      href={link}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${animationClass} rounded-full border px-3 py-2 text-sm font-semibold transition-colors duration-300 cursor-pointer ${VARIANT_STYLES[variant]}`}
    >
      {title}
    </Link>
  );
};

export default Button;

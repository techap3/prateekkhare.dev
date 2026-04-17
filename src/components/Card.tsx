import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  background: string;
  border: string;
  widthClass?: string;
  paddingClass?: string;
};

export default function Card({
  children,
  background,
  border,
  widthClass = "w-full",
  paddingClass = "p-6",
}: CardProps) {
  return (
    <div
      className={`${widthClass} ${paddingClass} flex flex-col transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)]`}
      style={{ backgroundColor: background, border: `1px solid ${border}` }}
    >
      {children}
    </div>
  );
}
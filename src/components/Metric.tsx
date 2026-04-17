type MetricProps = {
  value: string;
  label: string;
};

export default function Metric({ value, label }: MetricProps) {
  return (
    <div className="flex w-[156px] flex-col gap-[6px]">
      <p className="font-display text-[28px] font-bold leading-[1.1] text-[#111111]">{value}</p>
      <div className="h-px w-full bg-[#9CA3AF]" />
      <p className="font-meta text-[12px] font-medium leading-[1.4] text-[#4B5563]">{label}</p>
    </div>
  );
}
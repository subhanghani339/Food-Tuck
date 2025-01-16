export const MetaItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span>{label}</span>
  </div>
);
// Interface InputCorpProps
interface InputCorpProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}

export const InputCorp = ({ children, icon }: InputCorpProps) => {
  return (
    <button className="flex items-center gap-8 p-2 rounded-4xl text-base border border-[#242155] text-[#242155] lg:text-3xl lg:border-none">
      {icon}
      {children}
    </button>
  )
}
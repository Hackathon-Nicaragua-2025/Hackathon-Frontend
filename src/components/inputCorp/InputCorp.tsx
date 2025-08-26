// Interface InputCorpProps
interface InputCorpProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}

export const InputCorp = ({ children, icon }: InputCorpProps) => {
  return (
    <button className="flex items-center gap-8 p-2 rounded-4xl text-base border border-[#242155] text-[#242155] lg:text-3xl lg:border-none cursor-pointer active:bg-[#183407] active:text-white duration-300 lg:active:bg-transparent lg:active:text-[#242155]">
      {icon}
      {children}
    </button>
  )
}
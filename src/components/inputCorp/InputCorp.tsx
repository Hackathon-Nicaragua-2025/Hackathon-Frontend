// Interface InputCorpProps
interface InputCorpProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}

export const InputCorp = ({ children, icon }: InputCorpProps) => {
  return (
    <button className="flex items-center w-full gap-2 py-4 px-6 rounded-4xl border border-[#242155] text-[#242155] bg-white active:bg-[#183407] active:text-white">
      {icon}
      {children}
    </button>
  )
}
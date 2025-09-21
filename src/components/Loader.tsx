export function Loader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-background">
      <div className="relative h-[150px] w-[150px] flex items-center justify-center">
        {/* The moving bars */}
        <div className="absolute h-[65px] w-[15px] bg-primary animate-move-h" />
        <div className="absolute h-[60px] w-[15px] origin-top-left rotate-90 bg-primary animate-move-v" />
        
        {/* The effect elements */}
        <div className="absolute top-0 left-[8%] h-[40px] w-[1px] bg-primary opacity-30 animate-loader-effect-light" />
        <div className="absolute top-[8%] left-0 h-[1px] w-[60px] bg-primary opacity-80 animate-loader-effect-light-d" />
        <div className="absolute top-[10%] left-[12%] text-lg font-black text-primary animate-loader-rot">X</div>
        
        <div className="absolute top-[90%] right-[10%] h-[40px] w-[1px] bg-primary opacity-30 animate-loader-effect-light" />
        <div className="absolute top-full right-0 h-[1px] w-[40px] bg-primary opacity-30 animate-loader-effect-light-d" />
        <div className="absolute top-full right-0 text-3xl text-primary animate-loader-scale">*</div>
        
        <div className="absolute bottom-0 left-0 h-[20px] w-[1px] origin-bottom-left rotate-45 bg-primary animate-loader-height" />
        <div className="absolute bottom-1/2 left-0 h-[1px] w-[20px] bg-primary animate-loader-width" />
      </div>
    </div>
  );
}

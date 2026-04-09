interface SkathesProps {
  children?: React.ReactNode;
}

const Skathes = ({ children }: SkathesProps) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="mx-4">
        {/* Background strip bergaris miring */}
        <div
          className="max-w-6xl mx-auto py-10 md:py-20 px-4 sm:px-6 border-x border-dashed border-stone-800"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(120, 120, 120, 0.1) 20px,
              rgba(120, 120, 120, 0.1) 40px
            )`,
          }}
        >
          <div className="text-center">
            {children || (
              <p className="text-stone-400 text-sm italic">
                “Build something great every day”
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skathes;

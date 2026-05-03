interface WarnProps {
  children?: React.ReactNode;
}

const Warn = ({ children }: WarnProps) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="mx-4">
        {/* Background strip bergaris miring dengan amber tua */}
        <div className="max-w-6xl mx-auto py-10 md:py-20 px-4 sm:px-6 border-x border-dashed border-stone-900 bg-amber-600">
          <div className="text-center">
            {children || (
              <p className="text-stone-900 text-sm italic font-medium">
                ⚠️ Perhatian penting
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warn;

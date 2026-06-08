interface SpeakerCardProps {
  name: string;
  role: string;
  description?: string;
  imageUrl: string;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  role,
  description,
  imageUrl,
}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center group pt-32 w-full max-w-sm">
      
      <div className="relative z-20 -mb-24 transition-transform duration-300 group-hover:scale-110">
        <img
          src={imageUrl}
          alt={name}
          className="h-48 w-48 rounded-full border-[10px] border-red-900 object-cover shadow-2xl"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full border-4 border-red-900 pt-28 pb-10 px-6 rounded-2xl shadow-xl bg-white overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-black/40">
        
        <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 z-0" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <h3 className="text-2xl text-red-900 font-bold text-center leading-tight">
            {name}
          </h3>
          <p className="text-sm font-medium text-grey-700 uppercase tracking-wider">
            {role}
          </p>
          
          {description && (
            <p className="text-sm text-gray-600 text-center mt-3 line-clamp-3">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
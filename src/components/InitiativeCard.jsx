export default function InitiativeCard({ initiative }) {
  const { image, title, description } = initiative;

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-[#009dc4]">{title}</h3>
        <p className="text-black flex-grow">{description}</p>
      </div>
    </div>
  );
}
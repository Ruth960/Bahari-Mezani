export default function Feedback() {
  return (
    <div className="p-5">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-black">What Our Partners Say</h2>
        <p className="text-gray-600">Feedback that inspires and drives our mission forward.</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Feedback 1 */}
        <div className="flex flex-col items-center text-center p-5 bg-white rounded-lg shadow-md">
          <img
            src="/images/johnKazungu.png"
            alt="feedback"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h3 className="text-xl font-bold mb-2">John Kazungu, Local Fisherman</h3>
          <p className="text-sm text-gray-600">
            Bahari Mezani's support has transformed my fishing practices, enabling me to fish
            sustainably while increasing my income. Their training programs have been invaluable.
          </p>
        </div>

        {/* Feedback 2 */}

        <div className="flex flex-col items-center text-center p-5 bg-white rounded-lg shadow-md">
          <img
            src="p/images/profile.png"
            alt="Aquaculture"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Sarah Polet, Community Leader</h3>
          <p className="text-sm text-gray-600">
            The projects led by Bahari Mezani have positively impacted our community, providing us
            with the tools and knowledge to thrive sustainably. We are grateful for their
            partnership.
          </p>
        </div>

        {/* Feedback 3 */}
        <div className="flex flex-col items-center text-center p-5 bg-white rounded-lg shadow-md">
          <img
            src="p/images/profile.png"
            alt="Aquaculture"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Francis Obiri, Environmental Scientist</h3>
          <p className="text-sm text-gray-600">
            Bahari Mezani's commitment to innovation in sustainable practices is commendable. Their
            projects are a model for how environmental conservation can align with community needs.
          </p>
        </div>
      </div>
    </div>
  );
}

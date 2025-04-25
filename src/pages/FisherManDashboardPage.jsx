import FishermanDashboard from "../components/FisherManDashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function FisherManDashboardPage() {
  return (
    <div>
      <Navbar/>
      <h1 className="text-3xl font-bold my-6">Fisherman Dashboard</h1>
      <FishermanDashboard />
      <Footer/>
    </div>
  );
}
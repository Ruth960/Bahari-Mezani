import BuyerDashboard from "../components/BuyerDashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function FisherManDashboardPage() {
  return (
    <div>
      <Navbar/>
      <h1 className="text-3xl font-bold my-6">Buyer Dashboard</h1>
      <BuyerDashboard />
      <Footer/>
    </div>
  );
}
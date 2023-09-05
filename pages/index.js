// pages/index.js atau pages/index.tsx
import Navbar from '../components/navbar';
import Dashborad from '../components/dashboard';

export default function Home() {
  return (
    <>
      <Navbar />
      <Dashborad />
    </>
  );
}

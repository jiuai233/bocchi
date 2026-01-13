import LandingPage from "@/components/LandingPage";
import GuestbookList from "@/components/GuestbookList";

export default async function Home() {
  return (
    <LandingPage
      guestbookList={<GuestbookList />}
    />
  );
}

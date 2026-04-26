import MainLayout from "./(main)/layout";
import NewsPage from "./(main)/news/page";

export default function Home() {
  return (
    <MainLayout>
      <NewsPage />
    </MainLayout>
  );
}

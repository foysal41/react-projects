import { redirect } from "next/navigation";

const default_category_id = "01";

const NewsPage = async () => {
  redirect(`/category/${default_category_id}`);
};

export default NewsPage;

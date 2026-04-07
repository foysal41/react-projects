import React, { useContext } from "react";
import { BookContext } from "../../context/Bookprovider";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../components/listedBooks/ListedReadList";
import ListedWishList from "../../components/listedBooks/ListedWishList";

const Books = () => {
  const { storeBooks, wishList } = useContext(BookContext);
 

  return (
    <div className="container mx-auto my-3">
      read list : {storeBooks.length}
      wish list : {wishList.length}


      <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <ListedReadList></ListedReadList>
    </TabPanel>
    <TabPanel>
      <ListedWishList></ListedWishList>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default Books;

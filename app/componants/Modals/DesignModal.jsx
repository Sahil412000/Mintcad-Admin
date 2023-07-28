"use client";
import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DesignModal() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const [jwtToken, setJwtToken] = useState("");

  const [categories, setCategories] = useState([]);

  const [formInput, setFormInput] = useState({
    categoryName: "",
    subCategoryName: "",
    selectedCategory: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    if (formInput.categoryName === "") return;
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/collections/create-category`,
        { name: formInput.categoryName },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": jwtToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
        props.setOpenModal(undefined);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCreateSubCategory = async (e) => {
    e.preventDefault();
    if (formInput.subCategoryName === "") return;
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/collections/create-sub-collection`,
        {
          name: formInput.subCategoryName,
          category_obj_id: formInput.selectedCategory,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": jwtToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
        props.setOpenModal(undefined);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (window) {
      const jwtToken = window.sessionStorage.getItem("jwtToken");
      if (jwtToken === null) {
        router.push("/login");
      }
      setJwtToken(jwtToken);
    }
  }, []);

  const getCategories = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/collections/get-cat-sub-cat`, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": jwtToken,
        },
      })
      .then((response) => {
        console.log(response);
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (jwtToken !== "") {
      getCategories();
    }
  }, [jwtToken]);

  console.log(formInput);

  return (
    <>
      <button
        onClick={() => props.setOpenModal("default")}
        type='button'
        className='text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
      >
        Add New
      </button>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header>Select Category and Sub-category</Modal.Header>
        <Modal.Body>
          <div className='space-y-5'>
            <p className='font-semibold text-center'>Add Categories</p>
            <div className='border border-gray-300 rounded-lg shadow  p-3'>
              <div className='flex flex-col space-y-2'>
                <label htmlFor='categoryName' className='font-bold'>
                  Enter a Category
                </label>
                <input
                  id='categoryName'
                  name='categoryName'
                  value={formInput.categoryName}
                  type='text'
                  onChange={handleInputChange}
                  className='h-10 p-2 rounded-lg text-sm'
                  placeholder='Enter a category'
                />
              </div>
              <button
                onClick={handleCreateCategory}
                type='button'
                className='mt-5 w-2/3 block mx-auto px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-full focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              >
                Confirm Change
              </button>
            </div>
          </div>
          <div className='mt-5 space-y-5'>
            <p className='font-semibold text-center'>Add Sub-categories</p>
            <div className='border border-gray-300 rounded-lg p-3 space-y-3'>
              <div className='flex flex-col space-y-2'>
                <label htmlFor='selectedCategory' className='font-bold'>
                  Choose a Category
                </label>
                <select
                  id='selectedCategory'
                  name='selectedCategory'
                  value={formInput.selectedCategory}
                  onChange={handleInputChange}
                  className='w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  {categories &&
                    categories.length &&
                    categories.length > 0 &&
                    categories.map((value, index) => {
                      return <option value={value._id}>{value.name}</option>;
                    })}
                </select>
              </div>
              <div className='flex flex-col space-y-2'>
                <label htmlFor='subCategoryName' className='font-bold'>
                  Enter a Sub-category
                </label>
                <input
                  id='subCategoryName'
                  name='subCategoryName'
                  value={formInput.subCategoryName}
                  type='text'
                  onChange={handleInputChange}
                  className='h-10 p-2 rounded-lg text-sm'
                  placeholder='Enter a sub-category'
                />
              </div>
              <button
                onClick={handleCreateSubCategory}
                type='button'
                className='mt-5 w-2/3 block mx-auto px-5 py-3 text-sm font-medium text-white bg-green-500 rounded-full focus:outline-none hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
              >
                Confirm Change
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

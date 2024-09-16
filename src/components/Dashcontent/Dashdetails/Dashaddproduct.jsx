import React, { useState } from "react";
import Swal from "sweetalert2";
import Dashuploadcard from "../Dashcomponent/Dashuploadcard";

import axios from "axios";
const Dashaddproduct = () => {
  const [product, setProduct] = useState({
    product_name: "",
    description: "",
    price: "",
    stock_quantity: "0",
    category_id: "1",
    sub_category: "10",
  });
  const [img, setImg] = useState(null);

  //product object
  const handlechange = (e) => {
    e.preventDefault();
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //image
  const handleChangeImg = (e) => {
    e.preventDefault();
    const upload = Array.from(e.target.files);

    //array
    const verify = upload.filter((file) => {
      if (file.type === "image/png" || file.type === "image/jpg") {
        return file;
      }
    });
    setImg(verify);
  };
  const checkimg = (e) => {
    console.log(img);
  };
  const handlesubmit = async () => {
    Swal.fire({
      icon: "question",
      title: "Do you want to create this product?",
      text: "Create this product",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Create",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //api
        const formData = new FormData();
        {img && formData.append("image", img)}

        try {
          const res = await axios.post(
            `${import.meta.env.VITE_URL}/product/addproduct`,
            product
          );
         

          if (res.data.msg === "Success") {
            Swal.fire("Success", "Create product successfully", "success");
          } else {
            Swal.fire("Error", "insert failed", "error");
          }
        } catch (error) {
          Swal.fire("Error", "Server error", "error");
        }

        
      }
    });
  };
  return (
    <>
      <div className="pd-1">
        <div className="bg-white rounded pd-1">
          <h2 style={{ marginBottom: "10px" }}>Add product</h2>
          <div className="addproduct">
            <div className="add-block">
              <div className="addproduct-image">
                <label className="check">Add images</label>
                {img ? (
                  img.map((file, key) => (
                    <img
                      src={URL.createObjectURL(file)}
                      alt="ProductImage"
                      style={{
                        border: "1px dashed blue",
                        borderRadius: "18px",
                      }}
                      key={key}
                    />
                  ))
                ) : (
                  <img
                    src="https://t4.ftcdn.net/jpg/05/65/22/41/360_F_565224180_QNRiRQkf9Fw0dKRoZGwUknmmfk51SuSS.jpg"
                    alt="ProductImage"
                    style={{ border: "1px dashed blue", borderRadius: "18px" }}
                  />
                )}
                {img &&
                  img.map((file, key) => (
                    <Dashuploadcard file={file} key={key} />
                  ))}

                <input type="file" multiple onChange={handleChangeImg} />
                <button onClick={checkimg}>Check</button>
              </div>
            </div>
            <div className="add-block addproduct-name">
              <label htmlFor="product_name">Product Name</label>
              <input
                type="text"
                name="product_name"
                onChange={handlechange}
                placeholder="Coca cola"
              />

              <label htmlFor="category_id">Category</label>
              <select name="category_id" onChange={handlechange} id="">
                <option value="1">Soft Drinks</option>
                <option value="2">Juices</option>
                <option value="3">Tea & Coffee</option>
                <option value="4">Alcoholic Beverages</option>
                <option value="5">Dairy & Plant-Based Drinks</option>
                <option value="6">Sports & Energy Drinks</option>
              </select>

              <label htmlFor="sub_category">Sub Category</label>
              <select name="sub_category" onChange={handlechange}>
                <option value="10">Organic & Health Drinks</option>
                <option value="11">Sugar-Free Drinks</option>
                <option value="12">Low-Calorie Drinks</option>
                <option value="13">Beverage Bundles</option>
              </select>

              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                onChange={handlechange}
                placeholder="Price"
              />

              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id=""
                placeholder="Description"
                onChange={handlechange}
              ></textarea>

              <label htmlFor="stock_quantity">Stock Quantity</label>
              <input
                type="text"
                name="stock_quantity"
                placeholder="Quantity"
                onChange={handlechange}
              />
            </div>
          </div>
          <div className="addproduct-publish">
            <button onClick={handlesubmit}>Publish Product</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashaddproduct;

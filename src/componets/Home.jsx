import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletproduct, getproduct, postproduct } from '../toolkit/api/api';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);
  const [post, setPost] = useState({ product: '', price: '' });
  console.log(data);
  useEffect(() => {
    dispatch(getproduct());
  }, [dispatch]);
  
  const deletedata = (id) => {
    dispatch(deletproduct(id));
    console.log(id);
  };

  const change = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    dispatch(postproduct(post));
  };

  return (
    <div>
      <h1>Products</h1>
        <div>
          <h2>Add Product</h2>
          <form action="">
            <div>
              <div>
                <label htmlFor="title">product:</label>
                <input type='text' name='product' onChange={change} />
              </div>
              <div>
                <label htmlFor="author">price:</label>
                <input type='text' name='price' onChange={change} />
              </div>
              <button type="button" onClick={submit}>Submit</button>
            </div>
          </form>
        </div>

      <table border={1}>
        <thead>
          <tr>
            <td>id</td>
            <td>product</td>
            <td>price</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => (
            <tr key={index}>
              <td>{val.id}</td>
              <td>{val.product}</td>
              <td>{val.price}</td>
              <td>
                <button onClick={() => deletedata(val.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

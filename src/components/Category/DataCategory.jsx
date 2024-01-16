import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataCategory = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/category');
        // Axios akan melempar error jika response status bukan 2xx
        // Sehingga Anda tidak perlu melakukan pemeriksaan response.ok seperti pada fetch
        const responseData = response.data;

        // Pastikan data.categories selalu array, atau gunakan array kosong jika data bukan array
        setCategories(Array.isArray(responseData.data) ? responseData.data : []);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError('Failed to fetch categories. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const handleUpdateClick = (categoryId) => {
    // Handle logic for update button click
    console.log('Update clicked for category ID:', categoryId);
  };

  const handleDeleteClick = (categoryId) => {
    // Handle logic for delete button click
    console.log('Delete clicked for category ID:', categoryId);
  };

  return (
    <div className="container-fluid " style={{marginTop: '10em', marginBottom: '10em'}}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h3 className='text-center mb-5'>Data List Category</h3>
      <button
        className="btn btn-success btn-sm"
        style={{margin: '20px 0'}}
        onClick={() => handleDeleteClick(category.id)}
      > <i className="bi bi-bag-plus-fill" style={{paddingRight: '10px'}}></i>
        Add Category
      </button>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Category Code</th>
            <th>Category Name</th>
            <th>Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.categoryCode}</td>
              <td>{category.categoryName}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleUpdateClick(category.id)}
                ><i className="bi bi-pencil-square" style={{paddingRight: '10px'}}></i>
                  Update
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteClick(category.id)}
                > <i className="bi bi-trash-fill" style={{paddingRight: '10px'}}></i>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataCategory;





//menggunakan fetch
// import React, { useState, useEffect } from 'react';

// const ListCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:8081/api/category');
//         if (!response.ok) {
//           throw new Error('Failed to fetch categories');
//         }

//         const responseData = await response.json();

//         // Pastikan data.categories selalu array, atau gunakan array kosong jika data bukan array
//         setCategories(Array.isArray(responseData.data) ? responseData.data : []);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//         setError('Failed to fetch categories. Please try again later.');
//       }
//     };

//     fetchData();
//   }, []);

//   const handleUpdateClick = (categoryId) => {
//     // Handle logic for update button click
//     console.log('Update clicked for category ID:', categoryId);
//   };

//   const handleDeleteClick = (categoryId) => {
//     // Handle logic for delete button click
//     console.log('Delete clicked for category ID:', categoryId);
//   };

//   return (
//     <div className="container-fluid " style={{ marginTop: '10em', marginBottom: '10em' }}>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <h3 className='text-center mb-5'>Data List Category</h3>
//       <table className="table table-striped table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Category Code</th>
//             <th>Category Name</th>
//             <th>Actions</th> {/* New column for actions */}
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map(category => (
//             <tr key={category.id}>
//               <td>{category.id}</td>
//               <td>{category.categoryCode}</td>
//               <td>{category.categoryName}</td>
//               <td>
//                 <button
//                   className="btn btn-primary btn-sm me-2"
//                   onClick={() => handleUpdateClick(category.id)}
//                 >
//                   Update
//                 </button>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => handleDeleteClick(category.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ListCategory;


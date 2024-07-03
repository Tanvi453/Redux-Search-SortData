import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addData, deleteData, update, searchData, sortbyFname } from './actions';


function App() {

  const dispatch = useDispatch();
  const selector = useSelector((selecter) => selecter);
  const [people, setPeople] = useState({ fname: '', dob: '', age: '', Password: '' });
  console.log(selector);
  const [isEdit, setIsEdit] = useState(-1);
  const [searched, setSearched] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name)
    setPeople({ ...people, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (isEdit === -1) { dispatch(addData(people)) }
    else {
      dispatch(update(people, isEdit))
    }
  }

  const handleEdit = (item, idx) => {
    setPeople(item)
    setIsEdit(idx)
  }

  const handleSearch = () => {
    dispatch(searchData(searched));
  }

  const sorting = () => {
    dispatch(sortbyFname())
  }

  return (
    <>

      <div style={{ backgroundImage: "url(https://img.freepik.com/premium-photo/flat-lay-comfortable-workspace-with-laptop-computer-notebook-coffee-cup-beige-background_35674-14721.jpg)", height: "955px", width: "100%", backgroundSize: "cover" }}>

        <div className='flex flex-col items-center gap-[60px] pt-[7%]'>

          <div className='flex flex-col gap-3'>
            <label htmlFor="fname" className='font-bold text-xl text-[#6b503b]'>Full Name:</label>
            <input type="text" id="fname" name="fname" value={people.fname} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#d7bfaf]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="dob" className='font-bold text-xl text-[#6b503b]'>Date Of Birth:</label>
            <input type="date" id='dob' name="dob" value={people.dob} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#d7bfaf]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="age" className='font-bold text-xl text-[#6b503b]'>Age:</label>
            <input type="number" id='age' name="age" value={people.age} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#d7bfaf]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="Password" className='font-bold text-xl text-[#6b503b]'>Password:</label>
            <input type="password" id="Password" name="Password" value={people.Password} onChange={(e) => handleChange(e)} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#d7bfaf]' />
          </div>

          <button type='submit' onClick={handleSubmit} className='font-bold text-xl h-[50px] w-[150px] mt-[30px] rounded-[10px] bg-transparent text-[#6b503b] border-[#d7bfaf]' >Submit</button>

        </div>

      </div>

      <div className='flex gap-[20px] justify-center mt-[30px]' >

        <input type="search" id="search" name="search" onChange={(e) => setSearched(e.target.value)} className='rounded-[5px] h-[30px] w-[300px] border-[#b89981]' />
        <button type='search' onClick={handleSearch} className='rounded-[5px] h-[30px] w-[50px] bg-transparent border-[#b89981]'> <svg
          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          viewBox="0 0 16 16">
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg> </button >


        <button type="button" onClick={sorting} className='h-[30px] w-[50px] text-[15px] font-bold text-[#6b503b] bg-transparent rounded-[5px] border-[#b89981]' >Sort</button>

      </div >

      <div className='flex gap-[20px] justify-center mt-[30px]'>

        <table>

          <thead>
            <th>Full Name:</th>
            <th>Date Of Birth:</th>
            <th>Age:</th>
            <th>Password:</th>
          </thead>

          <tbody>

            {selector?.formReducer?.map((item, index) => {
              return (
                <tr>

                  <td>{item?.fname}</td>
                  <td>{item?.dob}</td>
                  <td>{item?.age}</td>
                  <td>{item?.Password}</td>
                  <td>
                    <button onClick={() => {
                      dispatch(deleteData(index))
                    }}>Delete</button>
                  </td>
                  <td>
                    <button onClick={() => {
                      handleEdit(item, index)
                    }}>Edit</button>
                  </td>

                </tr>
              )
            })}

          </tbody>

        </table>
      </div>

    </>
  );
}

export default App;

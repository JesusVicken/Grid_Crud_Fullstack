import { useEffect, useState } from "react"
import axios from "axios"

const Home = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>Lista de Usuários</h1>

      <div className='w-75 rounded bg-white border shadow p-4'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  {/* Adicione botões de ação aqui, como editar ou excluir */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Home

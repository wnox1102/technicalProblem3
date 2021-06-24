import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Input from '../inputs/Input';
import useNotify from '../../hooks/useNotify';

function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const notify = useNotify();
  const history = useHistory();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const url = `https://dev.tuten.cl:443/TutenREST/rest/user/testapis%40tuten.cl`;
      const app = 'APP_BCK';
      const data = {
        email,
        pass: password,
        app,
      };
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          password,
          app,
        },
      };
      const user = await axios
        .put(url, data, config)
        .then((res) => res)
        .catch((err) => err);
      const token = 'testapis@tuten.cl585uuqtvtbittbfpmamrc834pf';
      localStorage.setItem('token', token);
      notify('Exito', 'success');
      history?.push('/information');
    } catch (err) {
      console.log(err);
      notify('Ha ocurrido un error al iniciar sesión', 'danger');
    }
  };

  return (
    <form id="sign-in" onSubmit={onSubmit} className="flex flex-col">
      <div className="w-full flex justify-start items-center text-gray-700">
        {/* <a className="block h-5 w-14">
          <LeftArrow />
        </a> */}
        <h1 className="block text-4xl font-semibold capitalize">
          Iniciar sesión
        </h1>
      </div>
      <p className="text-gray-700 font-light my-6 text-center text-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
        nostrum?
      </p>
      <div className="flex-1 flex flex-col">
        <div className="w-full mb-4">
          <Input
            label="Correo Electrónico"
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e?.target?.value);
            }}
          />
        </div>

        <div className="w-full mb-4">
          <Input
            label="Contraseña"
            type="password"
            name="password"
            placeholder="Tu contraseña"
            value={password}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e?.target?.value);
            }}
          />
        </div>
        <div className="w-full flex flex-col">
          <a className="text-indigo-700 text-lg block">
            ¿Olvidaste tu contraseña?
          </a>
          <a className="text-gray-700 text-lg block mt-4">
            ¿No tienes cuenta aún?{' '}
            <span className="text-indigo-900 font-semibold">Regístrate</span>.
          </a>
        </div>
        <div className="flex flex-col w-full mt-8 mb-8">
          <div className="w-full flex">
            <button
              className="bg-indigo-700 hover:bg-indigo-900 disabled:opacity-50 disabled:cursor-not-allowed text-white shadow-md text-lg font-semibold text-center rounded-lg h-12 w-full lg:w-6/12 mt-4 mx-auto"
              type="submit"
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignIn;

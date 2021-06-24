import React from 'react';
import axios from 'axios';
import Table from '../components/Table';
import Layout from '../components/Layout';
import formatMoney from '../lib/formatMoney';

interface ContactInfo {
  bookingId: number;
  client: string;
  bookingTime: number;
  streetAddress: string;
  bookingPrice: number;
}

export default function Information() {
  const [data, setData] = React.useState<Array<ContactInfo>>([]);
  const getInformation = async () => {
    const url =
      'https://dev.tuten.cl:443/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true';
    const response = await axios
      .get(url, {
        headers: {
          adminemail: 'testapis@tuten.cl',
          token: 'testapis@tuten.cl585uuqtvtbittbfpmamrc834pf',
          app: 'APP_BCK',
        },
      })
      .then((res) => res?.data)
      .catch((err) => console.log(err));
    if (response?.length > 0 && response) {
      const aux = response?.map((item) => {
        const date = new Date(item?.bookingTime);
        const dateFormat = `${date?.getFullYear()} / ${
          date?.getMonth() + 1
        } / ${date?.getDate()}`;

        return {
          bookingId: item?.bookingId,
          client: `${item?.tutenUserClient?.firstName} ${item?.tutenUserClient?.lastName}`,
          bookingTime: dateFormat,
          streetAddress: item?.locationId?.streetAddress,
          bookingPrice: `${formatMoney(item?.bookingPrice, true)}`,
        };
      });
      setData(aux);
    }
  };
  React.useEffect(() => {
    getInformation();
  }, []);

  const columns = [
    {
      Header: 'BookingId',
      accessor: 'bookingId', // accessor is the "key" in the data
    },
    {
      Header: 'Cliente',
      accessor: 'client',
    },
    {
      Header: 'Fecha de Creación',
      accessor: 'bookingTime',
    },
    {
      Header: 'Dirección',
      accessor: 'streetAddress',
    },
    {
      Header: 'Precio',
      accessor: 'bookingPrice',
    },
  ];
  return (
    <div className="w-full justify-items-center items-center min-h-screen flex flex-row">
      <Layout title="Information">
        {data?.length > 0 && data ? (
          <Table headers={columns} content={data} />
        ) : null}
      </Layout>
    </div>
  );
}

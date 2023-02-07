import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Table, Spinner } from "react-bootstrap";
import SButton from "../../components/Button";
import SBreadCrumb from "../../components/Breadcrumb";
import SNavbar from "../../components/Navbar";
import axios from "axios";
import { config } from "../../config";
export default function PageCategories() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const getCategoriesAPI = async () => {
      try {
        const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Proses pemasukan data yang categories kedalam useState Data
        setData(res.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    getCategoriesAPI();
  }, []);

  if (!token) return <Navigate to="/signin" replace={true} />;
  return (
    <>
      <SNavbar />

      <Container className="mt-3">
        <SBreadCrumb textSecound="Categories" />
        <SButton action={() => navigate("/categories/create")}>Tambah</SButton>

        <Table className="mt-3" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              // <Spinner />
              <tr>
                <td colSpan={data.length + 1} style={{ textAlign: "center" }}>
                  <div className="flex align-items-center justify-content-center">
                    <Spinner animation="grow" variant="light" />
                  </div>
                </td>
              </tr>
            ) : (
              data.map((data, index) => (
                <tr key={index}>
                  <td>{(index += 1)}</td>
                  <td>{data.name}</td>
                  <td>Otto</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
function SBreadCrumb({ textSecound, textThird, urlSecound }) {
  const navigate = useNavigate();
  return (
    <Breadcrumb className="my-2">
      <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>

      {!textThird && <Breadcrumb.Item active>{textSecound}</Breadcrumb.Item>}
      {textThird && (
        <Breadcrumb.Item onClick={() => navigate(urlSecound)}>
          {textSecound}
        </Breadcrumb.Item>
      )}
      {textThird && <Breadcrumb.Item active>{textThird}</Breadcrumb.Item>}
    </Breadcrumb>
  );
}

export default SBreadCrumb;

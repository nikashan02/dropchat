import React from "react";
import { gql, useQuery } from "@apollo/client";

const ROOMS_QUERY = gql`
query USERS_QUERY {
  rooms {
    id
    title
  }
}
`;

export default function Rooms() {
  const { loading, error, data } = useQuery(ROOMS_QUERY);
  if (loading) return <p>Loading... </p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      test
    </div>
  );
}
import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";

const IS_AUTHENTICATED = gql`
{
  me {
    id
  }
}
`

interface Props {
  children?: React.ReactNode
}

export default function Authenticated({ children }: Props) {
  const { loading, error, data } = useQuery(IS_AUTHENTICATED);
  if (loading) return <p>Loading... </p>;
  if (error) return <p>{error.message}</p>;
  if (!data.me) {
    return <Redirect to={{pathname: '/landing'}} />
  }
  return <>{children}</>
}

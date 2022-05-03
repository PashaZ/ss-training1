import { gql } from "@apollo/client";

export const GET_ALL = gql `
query{
    getAll{
        id,
        name,
        price, 
    }
}`
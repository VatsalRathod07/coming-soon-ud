import { request, gql } from 'graphql-request';

const graphqlAPI = "https://api-ap-south-1.hygraph.com/v2/clfm2rma40rtl01t5ftggari7/master";

export const submitNewsLetter = async (obj) =>{
    const result = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj),
    });
  
    return result.json();
  }
  
  export const getNewsLetters = async () => {
    const query = gql`
    query GetNewsletter{
      newsletters{
        email
      }
    }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.newsLetters;
  };
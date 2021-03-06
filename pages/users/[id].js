import {useRouter} from "next/router"
import { MainContainer } from "../../components/MainContainer";


export default function User({user}) {
  return (
    <MainContainer>Username: {user.name} with id {user.id}</MainContainer>
  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: {user}, // will be passed to the page component as props
  }
}

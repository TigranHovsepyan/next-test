import Link from 'next/link';
// import {useEffect} from 'react';
// import {useState} from 'react';
import A from '../components/A';
import { MainContainer } from '../components/MainContainer';
import styles from '../styles/user.module.scss'

const Users = ({users}) => {
  return (
    <MainContainer>
      <h1 className={styles.title}>Users list</h1>
      <div>
        <ul>
          {users.map((item) => (
            <A key={item.id} href={`/users/${item.id}`} text={item.name} />
          ))}
        </ul>
      </div>
    </MainContainer>
  )
}

export default Users;

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: {users}, // will be passed to the page component as props
  }
}

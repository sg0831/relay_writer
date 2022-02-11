import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TodayTop10.module.css';


export default function TodayTop10(props) {
  return (
    <div>
      <h3>{ `test left_list: ${ props.left_list }` }</h3>
      <h3>{ `test count: ${ props.count}` }</h3>


    </div>
  )
}

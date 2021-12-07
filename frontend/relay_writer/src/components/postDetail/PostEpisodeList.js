import React from 'react'
import { Link} from 'react-router-dom';
import styles from './PostEpisodeList.module.css';

export default function EpisodeList() {
  return (
    <div>
      <table className={ styles.episode_list }>
        <thead>
          <tr>
            <th className={ styles.episode_num }>회차</th>
            <th className={ styles.title }>제목</th>
            <th className={ styles.author }>작가</th>
            <th className={ styles.views }>조회수</th>
            <th className={ styles.likes }>좋아요</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={ styles.episode_num }>1</td>
            <td className={ styles.title }><Link to='/postDetail/1/page/1'>테스트 1화</Link></td>
            <td className={ styles.author }>테스터1</td>
            <td className={ styles.views }>0</td>
            <td className={ styles.likes }>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

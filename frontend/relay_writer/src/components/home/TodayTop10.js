import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TodayTop10.module.css';
import thumbnail from './logo_image.jpg';


export default function TodayTop10() {
  return (
    <div>
              <h2 className={ styles.title }>Today's T.O.P 10</h2>
        <article className={styles.top10}>
          <section className={styles.top_list}>
            <section className={ styles.top_list_content }>
              <section className={ styles.thumbnail }>
                <img src={ thumbnail } alt='Thumbnail' />
              </section>
              <section className={ styles.impo }>
                <Link className={ styles.impo_title } to="/postDetail/1">라이언 이야기</Link>
                <span className={ styles.impo_genre }>[데일리]</span>
                <span className={ styles.impo_views }>조회수: </span>
                <span className={ styles.impo_recommends }>추천수: </span>
              </section>
            </section>

            <section className={ styles.top_list_content }>
              <section className={ styles.thumbnail }>
                <img src={ thumbnail } alt='Thumbnail' />
              </section>
              <section className={ styles.impo }>
                <Link className={ styles.impo_title } to="/postDetail/1">라이언 이야기</Link>
                <span className={ styles.impo_genre }>[데일리]</span>
                <span className={ styles.impo_views }>조회수: </span>
                <span className={ styles.impo_recommends }>추천수: </span>
              </section>
            </section>

            <section className={ styles.top_list_content }>
              <section className={ styles.thumbnail }>
                <img src={ thumbnail } alt='Thumbnail' />
              </section>
              <section className={ styles.impo }>
                <Link className={ styles.impo_title } to="/postDetail/1">라이언 이야기</Link>
                <span className={ styles.impo_genre }>[데일리]</span>
                <span className={ styles.impo_views }>조회수: </span>
                <span className={ styles.impo_recommends }>추천수: </span>
              </section>
            </section>

            <section className={ styles.top_list_content }>
              <section className={ styles.thumbnail }>
                <img src={ thumbnail } alt='Thumbnail' />
              </section>
              <section className={ styles.impo }>
                <Link className={ styles.impo_title } to="/postDetail/1">라이언 이야기</Link>
                <span className={ styles.impo_genre }>[데일리]</span>
                <span className={ styles.impo_views }>조회수: </span>
                <span className={ styles.impo_recommends }>추천수: </span>
              </section>
            </section>

            <section className={ styles.top_list_content }>
              <section className={ styles.thumbnail }>
                <img src={ thumbnail } alt='Thumbnail' />
              </section>
              <section className={ styles.impo }>
                <Link className={ styles.impo_title } to="/postDetail/1">라이언 이야기</Link>
                <span className={ styles.impo_genre }>[데일리]</span>
                <span className={ styles.impo_views }>조회수: </span>
                <span className={ styles.impo_recommends }>추천수: </span>
              </section>
            </section>
          </section>

          <section className={styles.top_list}>
            <section className={ styles.top_list_content }>
              <section className={ styles.thumbnail }>
                <img src={ thumbnail } alt='Thumbnail' />
              </section>
              <section className={ styles.impo }>
                <Link className={ styles.impo_title } to="/postDetail/1">라이언 이야기</Link>
                <span className={ styles.impo_genre }>[데일리]</span>
                <span className={ styles.impo_views }>조회수: </span>
                <span className={ styles.impo_recommends }>추천수: </span>
              </section>
            </section>

            <section className={ styles.top_list_content }>
              <section className={ styles.thumbnail }>
                <img src={ thumbnail } alt='Thumbnail' />
              </section>
              <section className={ styles.impo }>
                <Link className={ styles.impo_title } to="/postDetail/1">라이언 이야기</Link>
                <span className={ styles.impo_genre }>[데일리]</span>
                <span className={ styles.impo_views }>조회수: </span>
                <span className={ styles.impo_recommends }>추천수: </span>
              </section>
            </section>

            <section className={ styles.top_list_content }>
              <section className={ styles.thumbnail }>
                <img src={ thumbnail } alt='Thumbnail' />
              </section>
              <section className={ styles.impo }>
                <Link className={ styles.impo_title } to="/postDetail/1">라이언 이야기</Link>
                <span className={ styles.impo_genre }>[데일리]</span>
                <span className={ styles.impo_views }>조회수: </span>
                <span className={ styles.impo_recommends }>추천수: </span>
              </section>
            </section>

            <section className={ styles.top_list_content }>
              <section className={ styles.thumbnail }>
                <img src={ thumbnail } alt='Thumbnail' />
              </section>
              <section className={ styles.impo }>
                <Link className={ styles.impo_title } to="/postDetail/1">라이언 이야기</Link>
                <span className={ styles.impo_genre }>[데일리]</span>
                <span className={ styles.impo_views }>조회수: </span>
                <span className={ styles.impo_recommends }>추천수: </span>
              </section>
            </section>

            <section className={ styles.top_list_content }>
              <section className={ styles.thumbnail }>
                <img src={ thumbnail } alt='Thumbnail' />
              </section>
              <section className={ styles.impo }>
                <Link className={ styles.impo_title } to="/postDetail/1">라이언 이야기</Link>
                <span className={ styles.impo_genre }>[데일리]</span>
                <span className={ styles.impo_views }>조회수: </span>
                <span className={ styles.impo_recommends }>추천수: </span>
              </section>
            </section>
          </section>
        </article>
    </div>
  )
}

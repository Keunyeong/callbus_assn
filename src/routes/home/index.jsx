import cx from 'classnames'

import styles from './home.module.scss'

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <h1>커뮤니티</h1>
      </div>
      <ul className={styles.category}>
        <li>
          <button type='button'>전체</button>
        </li>
        <li>
          <button type='button' className={cx({ [styles.active]: true })}>
            인기글
          </button>
        </li>
        <li>
          <button type='button'>대선청원</button>
        </li>
        <li>
          <button type='button'>대선청원</button>
        </li>
        <li>
          <button type='button'>대선청원</button>
        </li>
        <li>
          <button type='button'>대선청원</button>
        </li>
        <li>
          <button type='button'>대선청원</button>
        </li>
        <li>
          <button type='button'>대선청원</button>
        </li>
        <li>
          <button type='button'>대선청원</button>
        </li>
        <li>
          <button type='button'>대선청원</button>
        </li>
        <li>
          <button type='button'>대선청원</button>
        </li>
      </ul>
    </main>
  )
}

export default Home
